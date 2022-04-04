# Naming Conventions
Naming conventions are simply a set of rules to follow when deciding on names for your classes, packages, variables, methods, and so on. These conventions are followed mostly to make your code easier for yourself and others to read.
If you don't follow proper naming conventions, you may come back to some code a year after writing it and be scratching your head trying to figure out what anything does. This is especially important for open-source work. Having clean, easy-to-read code makes you stand out as a programmer and makes it easier for others to use and work off of.
​
## Classes
Classes should be named in UpperCamelCase. Examples: Color, Button, Dog, EventHandler

## Methods
Methods should be named in lowerCamelCase. Examples: doStuff(), main(), onEnable(), sendMessage()

## Variables
Variables should also be named in lowerCamelCase. Examples: dogColor, dogName, pluginInstance, commandHandler

## Packages
Packages should be in lowercase. The structure of your packages generally should follow this rule: \<reversed.domain.name>.\<project name>[.<sub.packages>]. This is the standard to avoid clashes. If you don't own a domain name, something like io.github.yourname.projectname or com.gmail.youremail.projectname can suffice. Example: org.bukkit.block.

## Constants
Constants should be in uppercase. Example:
public static final int MAX_MOB_HEALTH = 40;
This applies to enum constants like Bukkit's ChatColor class as well.

## Names
Another important part of naming conventions is giving things meaningful names. A method that sends a message to a player should not be called "s". It should be called "send", or even better "sendMessage". A variable keeping track of health shouldn't be called "h". It should be called "health" or even "healthPoints", or at least "hp".