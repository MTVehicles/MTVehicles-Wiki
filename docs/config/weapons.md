# Weapons Config
```yaml
weapons:
  deserteagle:
    name: '&8Desert Eagle'
    type: SINGLE_BULLET
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: deserteagle_fullmodel
    sound: none
    reload-sound: none
    damage: 2.0
    range: 30.0
    max-ammo: 7
    attackspeed: 1.0
    ammo-type: deserteagle
  magnum44:
    name: '&8Magnum 44'
    type: SINGLE_BULLET
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: magnum44_fullmodel
    sound: none
    reload-sound: none
    damage: 2.5
    range: 30.0
    max-ammo: 8
    attackspeed: 1.0
    ammo-type: magnum44
  waltherp99:
    name: '&8Walther P99'
    type: SINGLE_BULLET
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: waltherp99_fullmodel
    sound: none
    reload-sound: none
    damage: 3.0
    range: 30.0
    max-ammo: 10
    attackspeed: 1.0
    ammo-type: waltherp99
  glock19:
    name: '&8Glock 19'
    type: SINGLE_BULLET
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: glock19_fullmodel
    sound: none
    reload-sound: none
    damage: 3.3
    range: 30.0
    max-ammo: 10
    attackspeed: 1.0
    ammo-type: glock19
  m16a4:
    name: '&8M16A4'
    type: SINGLE_BULLET
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: m16a4_fullmodel
    sound: none
    reload-sound: none
    damage: 3.7
    range: 30.0
    max-ammo: 25
    attackspeed: 1.0
    ammo-type: m16a4
  rpg:
    name: '&8RPG'
    type: RPG
    lore:
      - ''
      - Minetopia - Officieel Minetopia Wapen
      - ''
      - '&fUses: &7<Durability>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: grenade_launcher
    sound: none
    attackspeed: 1.0
  mk14:
    name: '&8MK14'
    type: SNIPER
    lore:
      - ''
      - Minetopia - Officieel Minetopia Wapen
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: mk14_scoped
    sound: none
    reload-sound: none
    damage: 10.0
    headshot-damage: 15.0
    range: 100.0
    max-ammo: 3
    attackspeed: 1.0
    ammo-type: mk14
    type-specific:
      scope:
        amplifier: 8
        limited: true
  flaregun:
    name: '&8Flare Gun'
    type: FLARE
    lore:
      - ''
      - Minetopia - Officieel Minetopia Wapen
      - ''
      - '&fUses: &7<Durability>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: fad_red
    sound: none
    attackspeed: 1.0
    type-specific:
      color:
        rgb-int: 16711680
  flamethrower:
    name: '&8Flame Thrower'
    type: FLAME_THROWER
    lore:
      - ''
      - Minetopia - Officieel Minetopia Wapen
      - ''
      - '&fUses: &7<Durability>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: flamethrower
    attackspeed: 0.1
    type-specific:
      range: 7
  m1a:
    name: '&8M1A'
    type: MULTIPLE_BULLET
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: m1a_ironsight
    sound: none
    reload-sound: none
    damage: 3.2
    range: 30.0
    max-ammo: 30
    attackspeed: 2.0
    ammo-type: m1a
    type-specific:
      iterations: 3
```

## name
**Type:** ``STRING``\
**Weapon Type:** ``ANY``\
**Uitleg:** Naam van het wapen.

## type
**Type:** ``WEAPONTYPE``\
**Weapon Type:** ``ANY``\
**Opties:** ``SINGLE_BULLET, MULTIPLE_BULLET, SNIPER, FLARE, FLAME_THROWER, RPG``\
**Default:** `SINGLE_BULLET`\
**Uitleg:** Het type van het wapen, bepaalt vooral het projectile wat het wapen schiet en sommige config opties.

## lore
**Type:** ``LIST``\
**Weapon Type:** ``ANY``\
**Uitleg:** De lore van het wapen.

## material
**Type:** [``MATERIAL``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java) \
**Weapon Type:** ``ANY``\
**Uitleg:** Het material van het wapen.

## nbt
**Type:** ``STRING``\
**Weapon Type:** ``ANY``\
**Uitleg:** De nbt tag key van het wapen.

## nbtvalue
**Type:** ``STRING``\
**Weapon Type:** ``ANY``\
**Uitleg:** De nbt tag value van het wapen.

## custommodeldata
**Type:** ``INTEGER``\
**Weapon Type:** ``ANY``\
**Required Version:** ``1.15+``\
**Uitleg:** De custom model data value van het wapen.

## sound
**Type:** ``STRING``\
**Weapon Type:** ``ANY``\
**Uitleg:** De sound die het wapen maakt bij het schieten.

## reload-sound
**Type:** ``STRING``\
**Weapon Type:** ``ANY``\
**Uitleg:** De sound die het wapen maakt bij het herladen.

## damage
**Type:** ``DOUBLE``\
**Weapon Type:** ``ANY``\
**Uitleg:** De hoeveelheid damage dat het wapen doet.

## range
**Type:** ``DOUBLE``\
**Weapon Type:** ``ANY``\
**Default:** `30.0`\
**Uitleg:** Hoe ver het wapen kan schieten.

## max-ammo
**Type:** ``INTEGER``\
**Weapon Type:** ``ANY``\
**Uitleg:** Hoeveel ammo het wapen maximaal kan hebben.

## attackspeed
**Type:** ``DOUBLE``\
**Weapon Type:** ``ANY``\
**Uitleg:** Hoelang het duurt voordat je weer kan schieten na een schot.

## ammo-type
**Type:** ``AMMOTYPE``\
**Weapon Type:** ``SINGLE_BULLET, MULTIPLE_BULLET, SNIPER``\
**Uitleg:** Welk type ammo het wapen gebruikt.

## type-specific.scope.amplifier
**Type:** ``INTEGER``\
**Weapon Type:** ``SNIPER``\
**Default:** `8`\
**Uitleg:** Hoever de sniper inzoomed.

## type-specific.scope.limited
**Type:** ``BOOLEAN``\
**Weapon Type:** ``SNIPER``\
**Default:** `false`\
**Uitleg:** Zet op true als je wilt dat je alleen kan schieten wanneer je bent ingezoomed.

## disable-durability
**Type:** ``BOOLEAN``\
**Weapon Type:** ``ANY``\
**Default:** `false`\
**Uitleg:** Zet op true als je wilt dat een wapen geen durability verbruikt.

## type-specific.color.rgb-int
**Type:** ``INTEGER``\
**Weapon Type:** ``FLARE``\
**Default:** `16711680`\
**Uitleg:** Welke kleur het firework is wat word gelanceerd.

## type-specific.range
**Type:** ``INTEGER``\
**Weapon Type:** ``FLAME_THROWER``\
**Default:** `7`\
**Uitleg:** Hoever de flamethrower players kan raken.

## type-specific.iterations
**Type:** ``INTEGER``\
**Weapon Type:** ``MULTIPLE_BULLET``\
**Default:** `3`\
**Uitleg:** Hoeveel bullets er per schot worden afgevuurd.

## type-specific.sneakingModifiesItem
**Type:** ``BOOLEAN``\
**Weapon Type:** ``ANY``\
**Default:** `false`\
**Uitleg:** Verander hoe het wapen eruit ziet als je aan het sneaken bent.

## type-specific.sneakingModifiesItem.material
**Type:** [``MATERIAL``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java) \
**Weapon Type:** ``ANY``\
**Uitleg:** Het material van het wapen. (Alleen tijdens sneaken)

## type-specific.sneakingModifiesItem.nbt
**Type:** ``STRING``\
**Weapon Type:** ``ANY``\
**Uitleg:** De nbt tag key van het wapen. (Alleen tijdens sneaken)

## type-specific.sneakingModifiesItem.nbtvalue
**Type:** ``STRING``\
**Weapon Type:** ``ANY``\
**Uitleg:** De nbt tag value van het wapen. (Alleen tijdens sneaken)

## type-specific.sneakingModifiesItem.custommodeldata
**Type:** ``INTEGER``\
**Weapon Type:** ``ANY``\
**Required Version:** ``1.15+``\
**Uitleg:** De custom model data value van het wapen. (Alleen tijdens sneaken)

## headshot-damage
**Type:** ``DOUBLE``\
**Weapon Type:** ``ANY``\
**Uitleg:** De hoeveelheid damage dat het wapen doet als je op het hoofd word geraakt.

## recoil
**Type:** ``RECOIL``\
**Weapon Type:** ``ANY``\
**Opties:** ``LOW, MEDIUM, HIGH``\
**Uitleg:** Hoeveel recoil je krijgt bij het schieten van een wapen.