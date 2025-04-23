provider "azurerm" {
  features {}
}

variable "storage_account_name" {
  description = "The name of the storage account."
  type        = string
}

variable "location" {
  description = "The location where the storage account will be created."
  type        = string
  default     = "East US"
}

variable "sku_name" {
  description = "The SKU of the storage account."
  type        = string
  default     = "Standard_LRS"
  validation {
    condition     = contains(["Standard_LRS", "Standard_GRS", "Standard_ZRS", "Premium_LRS"], var.sku_name)
    error_message = "The SKU must be one of Standard_LRS, Standard_GRS, Standard_ZRS, or Premium_LRS."
  }
}

resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.example.name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = var.sku_name == "Premium_LRS" ? "LRS" : substr(var.sku_name, 9, 3)
  kind                     = "StorageV2"
}

resource "azurerm_resource_group" "example" {
  name     = "example-resource-group"
  location = var.location
}

output "storage_account_id" {
  description = "The ID of the storage account."
  value       = azurerm_storage_account.example.id
}