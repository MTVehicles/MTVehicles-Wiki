# **Commands & Permissions**

::: tip
Is something not quite clear? Feel free to ask in our Discord server: [https://discord.gg/vehicle](https://discord.gg/vehicle) !
:::

## Main commands

| Command             | Description                                       | Permission                                       |
|---------------------|---------------------------------------------------|--------------------------------------------------|
| /vehicle info       | Get information about a vehicle                   | `None`, `mtvehicles.admin` to display admin info |
| /vehicle help       | Get a list of all the possible commands           | `None`, `mtvehicles.admin` to display admin info |
| /vehicle version    | Get info about the plugin *(use this on discord)* | `mtvehicles.admin`                               |
| /vehicle language   | Change the plugin language                        | `mtvehicles.admin` or `mtvehicles.language`      |
| /vehicle buycar     | Buy a vehicle (Economy plugin + Vault necessary)  | `None` ⚠️ Since 2.5.0-pre1                       |
| /vehicle buyvoucher | Buy a voucher (Economy plugin + Vault necessary)  | `None` ⚠️ Since 2.5.0-pre1                       |

## Vehicle specific commands
These commands can only be executed by the owner of the vehicle

| Command               | Description                                          | Permission |
|-----------------------|------------------------------------------------------|------------|
| /vehicle public       | Let everyone sit in your car                         | `None`     |
| /vehicle private      | Only allow people who have access to sit in your car | `None`     |
| /vehicle addrider     | Add a rider to your vehicle                          | `None`     |
| /vehicle addmember    | Add a member to your vehicle                         | `None`     |
| /vehicle removerider  | Remove a rider from your vehicle                     | `None`     |
| /vehicle removemember | Remove a member from your vehicle                    | `None`     |
| /vehicle repair       | Restore the health of a vehicle (vehicle damage must be enabled in the [config.yml]) | `mtvehicles.repair` |

## Moderation commands

| Command              | Description                                 | Permission               |
|----------------------|---------------------------------------------|--------------------------|
| /vehicle edit        | Adjust vehicle settings                     | `mtvehicles.edit`        |
| /vehicle menu        | Open a menu containing all the vehicles     | `mtvehicles.menu`        |
| /vehicle givevoucher | Give a voucher to a player                  | `mtvehicles.givevoucher` |
| /vehicle givecar     | Give a vehicle to a player                  | `mtvehicles.givecar`     |
| /vehicle restore     | A menu to recover vehicles                  | `mtvehicles.restore`     |
| /vehicle benzine     | Open the menu with jerrycans for the fuel   | `mtvehicles.benzine`     |
| /vehicle reload      | Reload the plugin's config files            | `mtvehicles.reload`      |
| /vehicle setowner    | Set an owner of a vehicle                   | `mtvehicles.setowner`    |
| /vehicle delete      | Remove a vehicle in your hand from the data | `mtvehicles.delete`      |
| /vehicle update      | Update the plugin to the latest version     | `mtvehicles.update`      |

## Other permissions

| Permission                        | Description                                                                                          |
|-----------------------------------|------------------------------------------------------------------------------------------------------|
| `mtvehicles.ride`                 | Whether a player can ride others' vehicles                                                           |
| `mtvehicles.anwb`                 | Whether a player can pick up vehicles from water - useless unless ANWB turned on in config           |
| `mtvehicles.oppakken`             | Whether a player can pick up vehicles                                                                |
| `mtvehicles.filljerrycans`        | Whether a player can fill up a jerry can - can be turned on/off in config                            |
| `mtvehicles.filljerrycansforfree` | Whether a player can fill up a jerry can for free (Economy plugin + Vault necessary)                 |
| `mtvehicles.limit.X`              | Number of vehicles obtainable from /vehicle menu (Change X to an integer, e.g. `mtvehicles.limit.6`) |
| `mtvehicles.nolimit`              | No limit for vehicles obtainable from /vehicle menu - ⚠️ since 2.5.8 |
