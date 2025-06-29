# Softdependencies

## WorldGuard

You can download <a href="https://dev.bukkit.org/projects/worldguard">WorldGuard</a> to get access to custom features with regions. (Do not forget that WorldGuard needs WorldEdit as its dependency.)

::: danger
WorldGuard features are not supported on 1.12.2 as it is no longer maintained and uses older API version.
:::

You can edit the behaviour **in the config** where you may also find information how to set up the custom flags.

::: warning
WorldGuard features are disabled by default and have to be enabled in the config.
:::

| Custom flags         | State | Description                                                                                   |
|----------------------|-------|-----------------------------------------------------------------------------------------------|
| `mtv-gasstation`     | ALLOW | This region is a gas station. (More information can be found in the [config.yml])             |
|                      | DENY  | You can NEVER fill up jerrycans here. No config option can change this.                       |
| `mtv-place`          | ALLOW | Enables players to place vehicles, **if region whitelist for placing is enabled.**            |
|                      | DENY  | Prevents players from placing vehicles, **if region blacklist for placing is enabled.**       |
| `mtv-enter`          | ALLOW | Enables players to enter vehicles, **if region whitelist for entering is enabled.**           |
|                      | DENY  | Prevents players from entering vehicles, **if region blacklist for entering is enabled.**     |
| `mtv-pickup`         | ALLOW | Enables players to pick up vehicles, **if region whitelist for picking up is enabled.**       |
|                      | DENY  | Prevents players from picking up vehicles, **if region blacklist for picking up is enabled.** |
| `mtv-use-car`        | DENY  | Prevents all players from using CARS in this region.                                          |
| `mtv-use-tank`       | DENY  | Prevents all players from using TANKS in this region.                                         |
| `mtv-use-hover`      | DENY  | Prevents all players from using HOVERS in this region.                                        |
| `mtv-use-helicopter` | DENY  | Prevents all players from using HELICOPTERS in this region.                                   |
| `mtv-use-airplane`   | DENY  | Prevents all players from using AIRPLANES in this region.                                     |
| `mtv-ride`           | ALLOW | Enables players to ride vehicles and enter such regions, **if whitelist is enabled.**         |
| ⚠️ since 2.5.6       | DENY  | Prevents players from riding vehicles and entering such regions, **if blacklist is enabled.** |



## Vault

You can download <a href="https://www.spigotmc.org/resources/vault.34315/">Vault</a> to enable economy integration. (Of course, you must have an economy plugin that supports Vault.)

Options concerning Vault and prices are to be found in the config.yml.

## PlaceholderAPI

MTVehicles offers special placeholders for you to use if you have PAPI installed.

We've made a [separate page](https://wiki.mtvehicles.eu/information/placeholders.html) for them.

[config.yml]: https://github.com/GamerJoep/MinetopiaVehicles/blob/master/src/main/resources/config.yml
