# Skript (since 2.5.1)

If you have Skript installed, you may use the following:

#### Expressions

| Name           | Examples                                                         |
|----------------|------------------------------------------------------------------|
| Vehicle        | `set {_car} to a new mtv vehicle with license plate "DF-4J-2R"`  |
|                | `set {_helicopter} to player's driven mtv vehicle`               |
| License plate  | `set {_licensePlate} to {_car}'s license plate`                  |
|                | `set {_lp} to license plate of (player's driven mtv vehicle)`    |

#### Effects

| Name            | Examples                                                         |
|-----------------|------------------------------------------------------------------|
| Give a vehicle  | `give mtv vehicle {_boat} to player`                             |
|                 | `give {_player} mtv vehicle with license plate "DF-4J-2R"`       |
|                 | `give {_player} mtv vehicle with uuid "XN9MKB"`                  |
| Spawn a vehicle | `spawn mtv vehicle {_car} at location {_loc}`                    |
|                 | `spawn mtv vehicle with license plate "DF-4J-2R" at {_loc}`      |

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