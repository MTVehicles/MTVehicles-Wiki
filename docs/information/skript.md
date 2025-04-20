# Skript

If you have Skript installed, you may use the following:

#### Expressions

| Name             | Expression                                            | Examples                                                                          | Since       |
| ---------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------- | ----------- |
| Vehicle          | `mtv vehicle`                                         | `set {_car} to mtv vehicle with license plate "DF-4J-2R"`                         | 2.5.1       |
|                  | `%player%'s driven mtv vehicle`                       | `set {_car} to player's driven mtv vehicle`                                       | 2.5.1       |
|                  | `new mtv vehicle with UUID %uuid% and owner %player%` | `set {_car} to new mtv vehicle with UUID "C4UQZJ" and owner player`               | 2.5.4       |
| License Plate    | ~~`{_car}'s license plate`~~                          |                                                                                   | 2.5.1–2.5.5 |
|                  | `vehicle license plate`                               | `set {_lp} to vehicle license plate of (player's driven mtv vehicle)`             | 2.5.6       |
|                  |                                                       | `set {_car}'s vehicle license plate to "RW-2K-7I"`                                |             |
| Vehicle Type     | `vehicle type`                                        | `set {_type} to {_car}'s vehicle type`                                            | 2.5.4       |
| Vehicle UUID     | `vehicle UUID`                                        | `set {uuid} to vehicle UUID of (player's driven mtv vehicle)`                     | 2.5.4       |
| Vehicle Location | `vehicle location`                                    | `set {_type} to {_car}'s vehicle location`                                        | 2.5.4       |
| Owner's name     | `vehicle owner`                                       | `set {_owner} to vehicle owner of (mtv vehicle with license plate "DF-4J-2R")`    | 2.5.5       |
| Vehicle Speed    | `vehicle speed`                                       | `set {_licensePlate} to vehicle speed of (player's driven mtv vehicle)`           | 2.5.5       |
|                  |                                                       | `add 0.5 to vehicle speed of (player's driven mtv vehicle)`                       | 2.5.6       |
|                  |                                                       | `set mtv vehicle speed of {_helicopter} to 3`                                     | 2.5.6       |
| Rotation Speed   | `vehicle rotation speed`                              | similar to vehicle speed                                                          | 2.5.6       |
| Vehicle Health   | `vehicle health`                                      | `set {_currentHealth} to {_car}'s vehicle health`                                 | 2.5.6       |
|                  |                                                       | `set vehicle health of {_car} to 100`                                             |             |
|                  |                                                       | `remove 55.5 from {_car}'s vehicle health` / `add 0.5 to {_car}'s vehicle health` |             |
| Current Fuel     | `vehicle fuel level`                                  | `set {_fuel} to {_car}'s vehicle fuel level`                                      | 2.5.6       |
|                  |                                                       | `set vehicle fuel level of {_car} to 96`                                          |             |
|                  |                                                       | `remove 10 from {_car}'s vehicle fuel level` / `add 30 to ...`                    |             |
| Fuel Usage       | `vehicle fuel usage`                                  | `set {_usage} to {_car}'s vehicle fuel usage`                                     | 2.5.6       |
|                  |                                                       | `set vehicle fuel usage of {_car} to 0.5`                                         |             |




::: tip
I'll update the rest of the page to a similar table soon
:::


#### Effects

| Name            | Examples                                                         |
|-----------------|------------------------------------------------------------------|
| Give a vehicle  | `give mtv vehicle {_boat} to player`                             |
|                 | `give {_player} mtv vehicle with license plate "DF-4J-2R"`       |
|                 | `give {_player} mtv vehicle with uuid "XN9MKB"`                  |
| Spawn a vehicle | `spawn mtv vehicle {_car} at location {_loc}`                    |
|                 | `spawn mtv vehicle with license plate "DF-4J-2R" at {_loc}`      |
| Delete vehicle     | `delete mtv vehicle {_car}`                                |
| Despawn vehicle    | `despawn mtv vehicle {_car}`                               |
| Mount vehicle      | `make player mount mtv vehicle {_car}`                     |
| Edit license plate | `edit license plate of a mtv vehicle {_car} to "DF-4J-2R"` |
|                    | `set {_car}'s mtv license plate to "DF-4J-2R"`             |
|                    | ⚠️ Your {_car} variable may stop working after this! ⚠      |
| Teleport vehicle   | `teleport mtv vehicle {_car} to location {_loc}`           |

#### Events

| Name           | Examples                                                         |
|----------------|------------------------------------------------------------------|
| Horn Use       | `on horn use:`                                                   |
|                | `set {_driver} to event-player`                                  |
|                | `set {_licensePlate} to event-text`                              |
| Tank Shoot     | `on tank shoot:`                                                 |
|                | `set {_driver} to event-player`                                  |
|                | `set {_licensePlate} to event-text`                              |
| Trunk Open     | `on vehicle trunk open:`                                         |
|                | `set {_driver} to event-player`                                  |
|                | `set {_licensePlate} to event-text`                              |
| Vehicle Enter  | `on mtv vehicle enter:`                                          |
|                | `set {_driver} to event-player`                                  |
|                | `set {_licensePlate} to event-text`                              |
| Vehicle Leave  | `on mtv vehicle leave:`                                          |
|                | `set {_driver} to event-player`                                  |
|                | `set {_licensePlate} to event-text`                              |
| Vehicle Pick Up| `on vehicle pick up:`                                            |
|                | `set {_driver} to event-player`                                  |
|                | `set {_licensePlate} to event-text`                              |
| Vehicle Place  | `on vehicle place:`                                              |
|                | `set {_driver} to event-player`                                  |
|                | `set {_licensePlate} to event-text`                              |
|                | `set {_placeLocation} to event-location`                         |
| Region Enter   | `on vehicle region enter:`                                       |
|                | `set {_driver} to event-player`                                  |
|                | `set {_enteredRegion} to event-text`                             |
| Region Leave   | `on vehicle region leave:`                                       |
|                | `set {_driver} to event-player`                                  |
|                | `set {_leftRegion} to event-text`                                |
| Voucher Use    | `on vehicle voucher use:`                                        |
|                | `set {_driver} to event-player`                                  |
|                | `set {_uuid} to event-text`                                      |

### New (from 2.5.5)

| Effect              | Examples                                                   |
|---------------------|------------------------------------------------------------|
| [Add Rider/Member](https://github.com/MTVehicles/MinetopiaVehicles/blob/master/src/main/java/nl/mtvehicles/core/infrastructure/dependencies/skript/effects/EffAddRiderMember.java)    | `add {_player} as a rider of the vehicle {_car}`           |
|                     | `add player {_offlinePlayer} as a member to mtv vehicle {_car}` |
| [Remove Rider/Member](https://github.com/MTVehicles/MinetopiaVehicles/blob/master/src/main/java/nl/mtvehicles/core/infrastructure/dependencies/skript/effects/EffRemoveRiderMember.java) | `remove {_player} as a rider of the vehicle {_car}`        |
|                     | `remove player {_offlinePlayer} as a member from mtv vehicle {_car}` |


| Conditions       | Examples                                                         |
|------------------|------------------------------------------------------------------|
| [isVehicle](https://github.com/MTVehicles/MinetopiaVehicles/blob/master/src/main/java/nl/mtvehicles/core/infrastructure/dependencies/skript/conditions/CondIsVehicle.java)        | `if {_car} is (not) an mtv vehicle:` (to prevent issues)         |
| [isOccupied](https://github.com/MTVehicles/MinetopiaVehicles/blob/master/src/main/java/nl/mtvehicles/core/infrastructure/dependencies/skript/conditions/CondIsOccupied.java)       | `if the vehicle {_car} is (not) occupied:`                       |
| [isOwner](https://github.com/MTVehicles/MinetopiaVehicles/blob/master/src/main/java/nl/mtvehicles/core/infrastructure/dependencies/skript/conditions/CondIsOwner.java)          | `if player is (not) the vehicle owner of {_car}:`                |
| [isRider](https://github.com/MTVehicles/MinetopiaVehicles/blob/master/src/main/java/nl/mtvehicles/core/infrastructure/dependencies/skript/conditions/CondIsRider.java)          | `if player is (not) a vehicle rider of {_car}:`                  |
| [canRide](https://github.com/MTVehicles/MinetopiaVehicles/blob/master/src/main/java/nl/mtvehicles/core/infrastructure/dependencies/skript/conditions/CondCanRide.java) = owner OR rider | `if {_p} can/cannot ride [mtv] vehicle {_car}:`          |
