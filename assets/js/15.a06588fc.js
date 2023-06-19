(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{306:function(t,e,s){"use strict";s.r(e);var a=s(14),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"adding-custom-vehicles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-custom-vehicles"}},[t._v("#")]),t._v(" Adding custom vehicles")]),t._v(" "),e("p",[t._v("In case you wish to add your own custom vehicles to your server, follow this tutorial!")]),t._v(" "),e("h2",{attrs:{id:"prerequisities"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisities"}},[t._v("#")]),t._v(" Prerequisities")]),t._v(" "),e("ul",[e("li",[t._v("Model(s) of vehicle(s)")]),t._v(" "),e("li",[t._v("Latest version of MTVehicles (already on a working server)")]),t._v(" "),e("li",[t._v("Access to console and server files")])]),t._v(" "),e("h2",{attrs:{id:"create-a-resource-pack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-resource-pack"}},[t._v("#")]),t._v(" Create a resource pack")]),t._v(" "),e("p",[t._v("For the vehicles to work properly, you need to setup a resource pack where vehicles are determined by an item's durability.")]),t._v(" "),e("blockquote",[e("p",[t._v("If you already have such a resource pack, you may skip this step.")])]),t._v(" "),e("h3",{attrs:{id:"_0-resource-pack-huh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-resource-pack-huh"}},[t._v("#")]),t._v(" 0. Resource pack, huh?")]),t._v(" "),e("p",[t._v("In the event of complete obliviousness (if you have no idea how to create a resource pack), check "),e("a",{attrs:{href:"https://www.wikihow.com/Make-a-Minecraft-Texture-Pack",target:"_blank",rel:"noopener noreferrer"}},[t._v("this tutorial"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"_1-add-models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-add-models"}},[t._v("#")]),t._v(" 1. Add models")]),t._v(" "),e("p",[t._v("Add your custom model(s) - .json files - to the "),e("code",[t._v("assets/minecraft/models/custom/")]),t._v(" folder. You may create more subfolders, but you'll need to remember them later!")]),t._v(" "),e("p",[t._v("If your models use custom textures, remember to put them to the "),e("code",[t._v("assets/minecraft/textures/...")]),t._v(" folders!")]),t._v(" "),e("h3",{attrs:{id:"_2-add-a-diamond-hoe-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-a-diamond-hoe-model"}},[t._v("#")]),t._v(" 2. Add a diamond hoe model")]),t._v(" "),e("p",[t._v("Create a new file "),e("code",[t._v("assets/minecraft/models/item/diamond_hoe.json")]),t._v(" and copy-paste this text (an edited example taken from the plugin's default resource pack):")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parent"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item/handheld"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"textures"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"layer0"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"items/diamond_hoe"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overrides"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"predicate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"damage"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item/diamond_hoe"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"predicate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"damaged"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"damage"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.64404609475032")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom/hotrod_red"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"predicate"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"damaged"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"damage"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.649807938540333")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom/sedan_politie"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Now, replace damage with the durability you really want to use.")]),t._v(" "),e("p",[t._v("Diamond hoe has a maximum of 1562 uses. If you want to use durability 1300, divide those two numbers.")]),t._v(" "),e("p",[t._v("After this step, replace the model path with the actual path to your model. The file extension (.json) is not necessary.")]),t._v(" "),e("blockquote",[e("p",[t._v("One final note: You might use a different item (not only a diamond hoe), but as the default vehicles already use diamond hoes, why getting rid of other items, right?")])]),t._v(" "),e("h3",{attrs:{id:"_3-ready"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-ready"}},[t._v("#")]),t._v(" 3. Ready!")]),t._v(" "),e("p",[t._v("Your resource pack is ready to be used! Let's continue then.")]),t._v(" "),e("p",[t._v("It should look something like this:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("assets\n  └ minecraft\n      └ models\n         └ custom\n             └ %your models%\n         └ item\n             └ diamond_hoe.json\n      └ textures (if your models use them)\n")])])]),e("h2",{attrs:{id:"edit-the-vehicles-yml-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#edit-the-vehicles-yml-file"}},[t._v("#")]),t._v(" Edit the "),e("code",[t._v("vehicles.yml")]),t._v(" file")]),t._v(" "),e("p",[t._v("You may find this file in plugin files folder (via FTP), located in "),e("code",[t._v("plugins/MTVehicles/")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"_1-adding-another-vehicle-category"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-adding-another-vehicle-category"}},[t._v("#")]),t._v(" 1. Adding another vehicle category")]),t._v(" "),e("p",[t._v("New vehicle category is easy to add (if you looked at the file a bit longer, you might have figured it out yourself):")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("voertuigen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(" (the entire file "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" do not edit this)\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My custom vehicle"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Name of the vehicle category")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vehicleType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CAR "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# See info below...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skinItem")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DIAMOND_HOE\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("itemDamage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1300")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is the damage you chose earlier, but undivided by 1562!")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("benzineEnabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Whether this vehicle needs fuel to operate")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kofferbakEnabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Whether this vehicle has a trunk")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hornEnabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Whether horn can be used")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxHealth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("250.0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Maximum health of vehicle - used if vehicleDamage is enabled in config.yml")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("acceleratieSpeed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.012")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Acceleration speed")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSpeed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.67")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Maximum speed")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("brakingSpeed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.03")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Braking speed")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aftrekkenSpeed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.005")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Friction")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rotateSpeed")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Rotation speed")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxSpeedBackwards")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.35")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Maximum speed backwards")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("seats")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(" (we'll get to this later)\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cars")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v(" (we'll get to this later)\n")])])]),e("p",[t._v("You may edit all these specifications as you'd like. Remove the comments when you're finished.")]),t._v(" "),e("p",[t._v("VehicleType may be one of 5 options: "),e("code",[t._v("CAR")]),t._v(", "),e("code",[t._v("HOVER")]),t._v(", "),e("code",[t._v("TANK")]),t._v(", "),e("code",[t._v("HELICOPTER")]),t._v(" or "),e("code",[t._v("AIRPLANE")]),t._v(". (See "),e("a",{attrs:{href:"https://docs.mtvehicles.eu/nl/mtvehicles/core/infrastructure/enums/VehicleType.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Javadoc"),e("OutboundLink")],1),t._v(" for more information.)")]),t._v(" "),e("h3",{attrs:{id:"_2-seats"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-seats"}},[t._v("#")]),t._v(" 2. Seats")]),t._v(" "),e("p",[t._v("To be completely candid, I don't understand this one. But it is supposed to be the location of all the seats in the vehicle. Unless somebody edits this tutorial, I guess you'll have to figure this thing yourself.")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("seats")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("y")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1.0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("z")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1.0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("y")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("-1.0")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("z")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n")])])]),e("h3",{attrs:{id:"_3-cars"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-cars"}},[t._v("#")]),t._v(' 3. "Cars"')]),t._v(" "),e("p",[t._v('The name "cars" is rather poorly chosen as this may also be a plane, helicopter, etc... Don\'t mind that!')]),t._v(" "),e("p",[t._v("All of these should be "),e("strong",[t._v("colour variants")]),t._v(" of the custom vehicle you're creating. Every other specification will be the same (speed, horn, seats, ...).")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cars")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My blue custom vehicle"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Name of the colour variant")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SkinItem")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DIAMOND_HOE\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("itemDamage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1300")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Damage=Texture used by the vehicle")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uuid")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ABC12345 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# UNIQUE UUID")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My yellow custom vehicle"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SkinItem")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DIAMOND_HOE\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("itemDamage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1301")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uuid")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CBA54321\n")])])]),e("p",[t._v('Every "car" has to have a '),e("strong",[t._v("unique UUID")]),t._v(". If it's not unique, I guess you'll break the plugin. Just... make sure it is, okay?")]),t._v(" "),e("p",[t._v("You may only add 1 variant, you may add 30. That's entirely up to you. What's more, the damage you specify here is the crucial one, the one you specified earlier was just for the menu.")]),t._v(" "),e("h2",{attrs:{id:"that-s-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#that-s-it"}},[t._v("#")]),t._v(" That's it!")]),t._v(" "),e("p",[t._v("Reload the plugin and try it out!")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If you have any other questions, "),e("a",{attrs:{href:"https://discord.gg/vehicle",target:"_blank",rel:"noopener noreferrer"}},[t._v("contact us"),e("OutboundLink")],1),t._v("!")])])])}),[],!1,null,null,null);e.default=n.exports}}]);