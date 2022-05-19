# Adding custom vehicles

In&nbsp;case you wish to add your own custom vehicles to your server, follow this tutorial!

## Prerequisities
- Model(s) of vehicle(s)
- Latest version of&nbsp;MTVehicles (already on a&nbsp;working server)
- Access to console and server files


## Create a&nbsp;resource&nbsp;pack

For the vehicles to work properly, you need to setup a&nbsp;resource pack where vehicles are determined by an item's durability.

> If you already have such a&nbsp;resource pack, you may skip this step.

### 0. Resource&nbsp;pack, huh?

In&nbsp;the event of complete obliviousness (if you have no idea how to create a&nbsp;resource pack), check [this tutorial](https://www.wikihow.com/Make-a-Minecraft-Texture-Pack).

### 1. Add models

Add your custom model(s) - .json files - to the `assets/minecraft/models/custom/` folder. You may create more subfolders, but you'll need to remember them later!

If your models use custom textures, remember to put them to the `assets/minecraft/textures/...` folders!

### 2. Add a&nbsp;diamond hoe model

Create a new file `assets/minecraft/models/item/diamond_hoe.json` and copy-paste this text (an&nbsp;edited example taken from the plugin's default resource pack):

```json
{
	"parent": "item/handheld",
	"textures": {
		"layer0": "items/diamond_hoe"
	},
	"overrides": [
		{ "predicate": { "damage": 0 }, "model": "item/diamond_hoe" },
		{ "predicate": { "damaged": 0, "damage": 0.64404609475032 }, "model": "custom/hotrod_red" },
    { "predicate": { "damaged": 0, "damage": 0.649807938540333 }, "model": "custom/sedan_politie" }
	]
}
```

Now, replace damage with the durability you really want to use.

Diamond hoe has a maximum of 1562 uses. If you want to use durability 1300, divide those two numbers.

After this step, replace the model path with the actual path to your model. The file extension (.json) is not necessary.

> One final note: You might use a different item (not only a diamond hoe), but as the default vehicles already use diamond hoes, why getting rid of other items, right?

### 3. Ready!

Your resource pack is ready to be used! Let's continue then.

It should look something like this:

```
assets
  └ minecraft
      └ models
         └ custom
             └ %your models%
         └ item
             └ diamond_hoe.json
      └ textures (if your models use them)
``` 


## Edit the `vehicles.yml` file

You may find this file in plugin files folder (via FTP), located in `plugins/MTVehicles/`.

### 1. Adding another vehicle category

New vehicle category is easy to add (if you looked at the file a bit longer, you might have figured it out yourself):

```yml
voertuigen:
  ... (the entire file - do not edit this)
  - name: "My custom vehicle" # Name of the vehicle category
    vehicleType: CAR # See info below...
    skinItem: DIAMOND_HOE
    itemDamage: 1300 # This is the damage you chose earlier, but undivided by 1562!
    benzineEnabled: true # Whether this vehicle needs fuel to operate
    kofferbakEnabled: true # Whether this vehicle has a trunk
    hornEnabled: true # Whether horn can be used
    maxHealth: 250.0 # Maximum health of vehicle - used if vehicleDamage is enabled in config.yml
    acceleratieSpeed: 0.012 # Acceleration speed
    maxSpeed: 0.67 # Maximum speed
    brakingSpeed: 0.03 # Braking speed
    aftrekkenSpeed: 0.005 # Friction
    rotateSpeed: 8 # Rotation speed
    maxSpeedBackwards: 0.35 # Maximum speed backwards
    seats:
      ... (we'll get to this later)
    cars:
      ... (we'll get to this later)
```        

You may edit all these specifications as you'd like. Remove the comments when you're finished.

VehicleType may be one of 5 options: `CAR`, `HOVER`, `TANK`, `HELICOPTER` or `AIRPLANE`. (See [Javadoc](https://docs.mtvehicles.eu/nl/mtvehicles/core/infrastructure/enums/VehicleType.html) for more information.)

### 2. Seats

To be completely candid, I don't understand this one. But it is supposed to be the location of all the seats in the vehicle. Unless somebody edits this tutorial, I guess you'll have to figure this thing yourself.

```yml
seats:
  - x: 0.0
    y: -1.0
    z: 0.0
  - x: -1.0
    y: -1.0
    z: 0.0
```

### 3. "Cars"

The name "cars" is rather poorly chosen as this may also be a plane, helicopter, etc... Don't mind that!

All of these should be **colour variants** of the custom vehicle you're creating. Every other specification will be the same (speed, horn, seats, ...).

```yml
cars:
  - name: "My blue custom vehicle" # Name of the colour variant
    SkinItem: DIAMOND_HOE
    itemDamage: 1300 # Damage=Texture used by the vehicle
    uuid: ABC12345 # UNIQUE UUID
  - name: "My yellow custom vehicle"
    SkinItem: DIAMOND_HOE
    itemDamage: 1301
    uuid: CBA54321
```

Every "car" has to have a **unique UUID**. If it's not unique, I guess you'll break the plugin. Just... make sure it is, okay?

You may only add 1&nbsp;variant, you may add 30. That's entirely up to you. What's more, the damage you specify here is the crucial one, the one you specified earlier was just for the menu.

## That's it!

Reload the plugin and try it out!

::: tip
If you have any other questions, [contact us](https://discord.gg/vehicle)!
:::