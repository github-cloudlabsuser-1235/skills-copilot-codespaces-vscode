using System;

class Program
{
    static void Main()
    {
        int health = 100;
        int score = 0;

        Console.WriteLine("Welcome to the Adventure Game!");
        Console.WriteLine("You are in a dark forest.");

        while (health > 0)
        {
            DisplayOptions();
            int choice = GetUserChoice();

            switch (choice)
            {
                case 1:
                    ExploreForest(ref score);
                    break;
                case 2:
                    RestByCampfire(ref health);
                    break;
                case 3:
                    QuitGame(score);
                    return;
                default:
                    Console.WriteLine("Invalid choice. Try again.");
                    break;
            }

            health -= 10;
            if (health <= 0)
            {
                Console.WriteLine($"Game over. Your score: {score}");
            }
        }
    }

    static void DisplayOptions()
    {
        Console.WriteLine("\nOptions:");
        Console.WriteLine("1. Go deeper into the forest.");
        Console.WriteLine("2. Rest by the campfire.");
        Console.WriteLine("3. Quit the game.");
    }

    static int GetUserChoice()
    {
        Console.Write("Enter your choice: ");
        if (int.TryParse(Console.ReadLine(), out int choice))
        {
            return choice;
        }
        Console.WriteLine("Invalid input. Please enter a valid number.");
        return -1; // Return an invalid choice to prompt the user again
    }

    static void ExploreForest(ref int score)
    {
        Console.WriteLine("You go farther into the forest and discover a treasure chest!");
        score += 10;
    }

    static void RestByCampfire(ref int health)
    {
        Console.WriteLine("You rest by the campfire and regain 20 health.");
        health += 20;
    }

    static void QuitGame(int score)
    {
        Console.WriteLine($"Thanks for playing! Your score: {score}");
    }
}