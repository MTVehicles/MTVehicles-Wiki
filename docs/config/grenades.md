# Grenade Config
```yaml
grenades:
  grenade:
    name: '&8Grenade'
    type: EXPLODE
    lore:
      - ''
      - 'Grenade Uses: &f<Uses>'
      - ''
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: grenade_3
    range: 4.0
    ranged-damage: 5.0
    cooldown: 1.0
  molotov:
    name: '&cMolotov'
    type: MOLOTOV
    lore:
      - ''
      - 'Molotov Uses: &f<Uses>'
      - ''
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: grenade_4
    range: 6.0
    ranged-damage: 2.0
    cooldown: 1.0
  flashbang:
    name: '&7Flash bang'
    type: EFFECT
    lore:
      - ''
      - 'Flash bang Uses: &f<Uses>'
      - ''
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: grenade_bol
    range: 3.0
    cooldown: 1.0
    type-specific:
      effects:
        BLINDNESS:
          duration: 30
          amplifier: 2
        SLOWNESS:
          duration: 20
          amplifier: 1
  smokegrenade:
    name: '&7Smoke Grenade'
    type: SMOKE
    lore:
      - ''
      - 'Smoke grenade Uses: &f<Uses>'
      - ''
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: grenade_2
    range: 3.0
    cooldown: 1.0
    type-specific:
      iterations: 5
```

## name
**Type:** ``STRING``\
**Grenade Type:** ``ANY``\
**Uitleg:** Naam van de grenade.

## type
**Type:** ``GRENADETYPE``\
**Grenade Type:** ``ANY``\
**Opties:** ``EXPLODE, MOLOTOV, EFFECT, SMOKE``\
**Uitleg:** Het type van de grenade.

## lore
**Type:** ``LIST``\
**Grenade Type:** ``ANY``\
**Uitleg:** De lore van de grenade.

## material
**Type:** [``MATERIAL``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java) \
**Grenade Type:** ``ANY``\
**Uitleg:** Het material van de grenade.

## nbt
**Type:** ``STRING``\
**Grenade Type:** ``ANY``\
**Uitleg:** De nbt tag key van de grenade.

## nbtvalue
**Type:** ``STRING``\
**Grenade Type:** ``ANY``\
**Uitleg:** De nbt tag value van de grenade.

## custommodeldata
**Type:** ``INTEGER``\
**Grenade Type:** ``ANY``\
**Required Version:** ``1.15+``\
**Uitleg:** De custom model data value van de grenade.

## range
**Type:** ``DOUBLE``\
**Grenade Type:** ``EXPLODE, MOLOTOV, EFFECT``\
**Default:** `3.0`\
**Uitleg:** Hoe groot de range van de grenade is.

## ranged-damage
**Type:** ``DOUBLE``\
**Grenade Type:** ``EXPLODE, EFFECT``\
**Uitleg:** De hoeveelheid damage dat de grenade doet in zijn radius.

## cooldown
**Type:** ``DOUBLE``\
**Weapon Type:** ``ANY``\
**Uitleg:** Hoelang het duurt voordat je weer een grenade kan gooien.

## type-specific.iterations
**Type:** ``INTEGER``\
**Weapon Type:** ``SMOKE``\
**Uitleg:** Hoeveel smoke een smoke grenade geeft.

## type-specific.effects.<POTION_EFFECT_TYPE>
**Type:** [``POTION_EFFECT_TYPE``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XPotion.java) \
**Weapon Type:** ``EFFECT``\
**Uitleg:** Welk type potion effect een grenade moet geven.

## type-specific.effects.<POTION_EFFECT_TYPE>.duration
**Type:** ``INTEGER``\
**Weapon Type:** ``EFFECT``\
**Uitleg:** Hoelang een potion effect moet duren.

## type-specific.effects.<POTION_EFFECT_TYPE>.amplifier
**Type:** ``INTEGER``\
**Weapon Type:** ``EFFECT``\
**Uitleg:** Hoe sterk een potion effect moet zijn.