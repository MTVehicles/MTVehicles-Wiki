# Skript

If you have Skript installed, you may use the following:

#### Expressions

| Name             | Expression                                            | Examples                                                                          | Since       |
| ---------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------- | ----------- |
| Vehicle          | `mtv vehicle`                                         | `set {_car} to mtv vehicle with license plate "DF-4J-2R"`                         | 2.5.1       |
|                  | `%player%'s driven mtv vehicle`                       | `set {_car} to player's driven mtv vehicle`                                       | 2.5.1       |
|                  | `new mtv vehicle with UUID %uuid% and owner %player%` | `set {_car} to new mtv vehicle with UUID "C4UQZJ" and owner player`               | 2.5.4       |
| License Plate    | ~~`{_car}'s license plate`~~                          | Deprecated.                                                                       | 2.5.1–2.5.5 |
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


#### Effects

| Name                          | Examples                                                             | Since       |
| ----------------------------- | -------------------------------------------------------------------- | ----------- |
| Give vehicle                  | `give mtv vehicle {_boat} to player`                                 | 2.5.1       |
|                               | `give {_player} mtv vehicle with license plate "DF-4J-2R"`           |             |
| Spawn vehicle                 | `spawn mtv vehicle {_car} at location {_loc}`                        | 2.5.1       |
|                               | `spawn mtv vehicle with license plate "DF-4J-2R" at {_loc}`          |             |
| Despawn vehicle               | `despawn mtv vehicle {_car}`                                         | 2.5.4       |
| Delete vehicle                | `delete mtv vehicle {_car}`                                          | 2.5.4       |
| Mount vehicle                 | `make player mount mtv vehicle {_car}`                               | 2.5.4       |
| Teleport vehicle              | `teleport mtv vehicle {_car} to location {_loc}`                     | 2.5.4       |
| ~~Edit license plate~~        | ~~`edit license plate of a mtv vehicle {_car} to "DF-4J-2R"`~~       | 2.5.4–2.5.5 |
|                               | deprecated from 2.5.6, use vehicle license plate expression instead  |             |
| Add rider/member (=passenger) | `add {_player} as a rider of the vehicle {_car}`                     | 2.5.5       |
|                               | `add player {_offlinePlayer} as a member to mtv vehicle {_car}`      | 2.5.5       |
| Remove rider/member           | `remove {_player} as a rider of the vehicle {_car}`                  | 2.5.5       |
|                               | `remove player {_offlinePlayer} as a member from mtv vehicle {_car}` | 2.5.5       |
| Block/Unblock braking         | `block vehicle breaking of mtv vehicle {_car}`                       | 2.5.6       |
|                               | `unblock vehicle breaking of license plate "MT-12-34"`               |             |
| Block/Unblock friction        | `block vehicle friction of {_car}`                                   | 2.5.6       |
|                               | `unblock vehicle friction of license "MT-12-34"`                     |             |

::: warning
Up to 2.5.5, any object could be given as a parameter to any effect – if it wasn't a vehicle, a warning message was sent to console. 

Since 2.5.6, Vehicle type has been added and effects strictly only allow vehicles to be used as parameters. This will foolproof your code so it does not break, but may initially result in some errors while reloading skripts.
:::


#### Events

| Name            | Expression                 | Parameters                        | Since |
| --------------- | -------------------------- | --------------------------------- | ----- |
| Horn Use        | `on horn use:`             | `event-player` (driver)           | 2.5.1 |
|                 |                            | `event-text` (license plate)      |       |
| Tank Shoot      | `on tank shoot:`           | `event-player` (driver)           | 2.5.1 |
|                 |                            | `event-text` (license plate)      |       |
| Trunk Open      | `on vehicle trunk open:`   | `event-player`                    | 2.5.1 |
|                 |                            | `event-text` (license plate)      |       |
| Vehicle Enter   | `on mtv vehicle enter:`    | `event-player`                    | 2.5.1 |
|                 |                            | `event-text` (license plate)      |       |
| Vehicle Leave   | `on mtv vehicle leave:`    | `event-player`                    | 2.5.1 |
|                 |                            | `event-text` (license plate)      |       |
| Vehicle Pick Up | `on vehicle pick up:`      | `event-player`                    | 2.5.1 |
|                 |                            | `event-text` (license plate)      |       |
| Vehicle Place   | `on vehicle place:`        | `event-player`                    | 2.5.1 |
|                 |                            | `event-text` (license plate)      |       |
|                 |                            | `event-location` (placement loc.) |       |
| Voucher Use     | `on vehicle voucher use:`  | `event-player`                    | 2.5.1 |
|                 |                            | `event-text` (uuid)               |       |
| Region Enter    | `on vehicle region enter:` | `event-player`   (driver)         | 2.5.1 |
|                 |                            | `event-text` (entered region)     |       |
| Region Leave    | `on vehicle region leave:` | `event-player` (driver)           | 2.5.1 |
|                 |                            | `event-text`  (left region)       |       |


#### Conditions

| Name                        | Examples                                                            | Since       |
| --------------------------- | ------------------------------------------------------------------- | ----------- |
| ~~isVehicle~~ (Deprecated.) | ~~`if {_object} is (not) an mtv vehicle:`~~                         | 2.5.5–2.5.5 |
| isOccupied                  | `if the vehicle {_car} is (not) occupied:`                          | 2.5.5       |
| isOwner                     | `if player is (not) the vehicle owner of {_car}:`                   | 2.5.5       |
| isRider                     | `if player is (not) a vehicle rider of {_car}:`                     | 2.5.5       |
| canRide (= owner OR rider)  | `if {_p} can/cannot ride [mtv] vehicle {_car}:`                     | 2.5.5       |
| isDrivingVehicle            | `if player {_p} is (not) driving an mtv vehicle`                    | 2.5.6       |
| isInsideVehicle             | `if player is (not) inside mtv vehicle:`                            | 2.5.6       |
|                             | `if player {_p} is (not) seated in an mtv vehicle:`                 |             |
| isBrakingBlocked            | `if mtv vehicle breaking of vehicle {_car} is (not) blocked:`       | 2.5.6       |
|                             | `if vehicle breaking of license plate "MT-12-34" is (not) blocked:` |             |
| isFrictionBlocked           | `if mtv vehicle friction of vehicle {_car} is (not)blocked:`        | 2.5.6       |
|                             | `if vehicle friction of license plate "MT-12-34" is (not) blocked:` |             |
