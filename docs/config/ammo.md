# Ammo Config
```yaml
ammo:
  deserteagle:
    name: 'Desert Eagle Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: deserteagle_bullets
  magnum44:
    name: 'Magnum 44 Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: magnum44_bullets
  waltherp99:
    name: 'Walther P99 Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: waltherp99_bullets
  glock19:
    name: 'Glock 19 Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: glock19_bullets
  m16a4:
    name: 'M16A4 Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: m16a4_bullets
  mk14:
    name: 'MK14 Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: ammo_mk14
  m1a:
    name: 'M1A Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: ammo_m1a
```

## name
**Type:** ``STRING``\
**Uitleg:** Naam van het ammo item.

## lore
**Type:** ``LIST``\
**Weapon Type:** ``ANY``\
**Uitleg:** De lore van het ammo item.

## material
**Type:** [``MATERIAL``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java) \
**Uitleg:** Het material van het ammo item.

## nbt
**Type:** ``STRING``\
**Uitleg:** De nbt tag key van het ammo item.

## nbtvalue
**Type:** ``STRING``\
**Uitleg:** De nbt tag value van het ammo item.

## custommodeldata
**Type:** ``INTEGER``\
**Required Version:** ``1.15+``\
**Uitleg:** De custom model data value van het ammo item.