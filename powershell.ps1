# Login to Azure
Connect-AzAccount

# Variables
$resourceGroupName = "example-resource-group"
$location = "East US"
$vmName = "example-vm"
$adminUsername = "azureuser"
$adminPassword = "P@ssw0rd123!" # Replace with a secure password
$vmSize = "Standard_DS1_v2"
$osDiskName = "$vmName-osdisk"
$networkInterfaceName = "$vmName-nic"
$virtualNetworkName = "$vmName-vnet"
$subnetName = "$vmName-subnet"
$publicIpName = "$vmName-pip"
$imageReference = @{
    Publisher = "Canonical"
    Offer     = "UbuntuServer"
    Sku       = "18.04-LTS"
    Version   = "latest"
}

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a virtual network and subnet
$vnet = New-AzVirtualNetwork -ResourceGroupName $resourceGroupName -Location $location `
    -Name $virtualNetworkName -AddressPrefix "10.0.0.0/16"
Add-AzVirtualNetworkSubnetConfig -Name $subnetName -AddressPrefix "10.0.1.0/24" -VirtualNetwork $vnet
$vnet | Set-AzVirtualNetwork

# Create a public IP address
$publicIp = New-AzPublicIpAddress -ResourceGroupName $resourceGroupName -Location $location `
    -Name $publicIpName -AllocationMethod Dynamic

# Create a network interface
$subnet = Get-AzVirtualNetworkSubnetConfig -Name $subnetName -VirtualNetwork $vnet
$nic = New-AzNetworkInterface -ResourceGroupName $resourceGroupName -Location $location `
    -Name $networkInterfaceName -SubnetId $subnet.Id -PublicIpAddressId $publicIp.Id

# Create the virtual machine configuration
$vmConfig = New-AzVMConfig -VMName $vmName -VMSize $vmSize
$vmConfig = Set-AzVMOperatingSystem -VM $vmConfig -Linux -ComputerName $vmName `
    -Credential (New-Object PSCredential ($adminUsername, (ConvertTo-SecureString $adminPassword -AsPlainText -Force)))
$vmConfig = Set-AzVMSourceImage -VM $vmConfig -PublisherName $imageReference.Publisher `
    -Offer $imageReference.Offer -Skus $imageReference.Sku -Version $imageReference.Version
$vmConfig = Add-AzVMNetworkInterface -VM $vmConfig -Id $nic.Id
$vmConfig = Set-AzVMOSDisk -VM $vmConfig -Name $osDiskName -CreateOption FromImage

# Deploy the virtual machine
New-AzVM -ResourceGroupName $resourceGroupName -Location $location -VM $vmConfig