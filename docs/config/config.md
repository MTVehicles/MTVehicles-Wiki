# Config
```yaml
empty-sound: weapons.gunempty
weaponCooldownPerWeapon: false
projectileProtectionReducesDamage: false
damageReductionPercentagePerLevel: 5
resourcePackURL: none
```

## empty-sound
**Type:** ``STRING``\
**Uitleg:** Stel een sound in die afspeelt als jij jouw wapen herlaad.

## weaponCooldownPerWeapon
**Type:** ``BOOLEAN``\
**Uitleg:** Zet op true als je wilt dat de cooldown van wapens op de speler worden gesaved of het wapen zelf.

## projectileProtectionReducesDamage
**Type:** ``BOOLEAN``\
**Uitleg:** Zet op true als je wilt dat wapens minder damage doen als je [projectile protection](https://minecraft.fandom.com/wiki/Projectile_Protection) op je chestplate hebt staan.

## damageReductionPercentagePerLevel
**Type:** ``INTEGER``\
**Uitleg:** Stel in hoeveel procent minder damage je krijgt per projectile protection level.\
**Formule:** ``damage - ((damage / 100 * percentage) * enchantmentLevel);``

## resourcePackURL
**Type:** ``STRING``\
**Uitleg:** Stel een resourcepack in waarvan jij wilt dat naar spelers wordt gestuurd als ze de server betreden.