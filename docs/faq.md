# FAQ, Frequent Errors

First of all, you need **a Minecraft server** with Spigot/Paper. (No, plugins do NOT work locally.)

## 1. How to download and set up the plugin?
For a step-by-step tutorial, [see the home page](/#how-to-set-up-the-plugin).

---

## 2. I can only see diamond hoes!
You need our **resource pack** to be able to see the vehicles. Download it [here](https://mtvehicles.nl/resourcepack/).

---

## 3. How to get a vehicle?
- Choose from a GUI menu using `/mtv menu`

  ::: warning
  Permission `mtvehicles.menu` necessary.
  :::

- Use the command `/mtv give <player> <vehicleName>`

  > `<player>` - To whom you're giving the vehicle. Must be online. This player will also be set as the vehicle's owner.<br>
  > `<vehicleName>` - If you're using Minecraft version 1.13+, the command should automatically show you a list of available vehicles (use TAB or scroll).<br><br>
  > Alternatively, you can also use `/mtv givecar <player> <UUID>`, list of UUIDs can be found in [vehicles.yml](https://github.com/GamerJoep/MinetopiaVehicles/blob/master/src/main/resources/vehicles.yml#L30)), but this approach is not recommended anymore.
  
  ::: warning
  Permission `mtvehicles.givecar` necessary.
  :::

- Get a voucher using `/mtv give <player> <vehicleName> --voucher:true`

  > Whoever uses the voucher will be the vehicle's owner.<br><br>
  > You may also use `/mtv givevoucher <player> <UUID>`, list of UUIDs can be found in [vehicles.yml](https://github.com/GamerJoep/MinetopiaVehicles/blob/master/src/main/resources/vehicles.yml#L30)), but this approach is not recommended anymore.

  ::: warning
  Permission `mtvehicles.givevoucher` necessary to use the command. Afterwards, anyone can use the voucher freely.
  :::

---

## 4. How to get rid of a vehicle?
Shift and Right-click the vehicle to pick it up.

::: warning
You must OWN the vehicle or have the permission `mtvehicles.oppakken`.
:::

::: danger BEWARE
Even after picking the vehicle up, it is still stored in the database and can be restored with the `/mtv restore` command.<br>
**To prevent this**, delete it using `/mtv delete` while holding the item.
:::

---

## 5. I am getting 'An internal error occurred...' error
Firstly, **check your console** and look for **this message** (time/version may be different, of course):

![Plugin is disabled](https://user-images.githubusercontent.com/47473562/161583020-5b4eea98-16b6-44a5-993e-c53b740df610.png)

> And if you're attentive, you should have already seen this warning:<br>
> ![Incompatible version](https://user-images.githubusercontent.com/47473562/161582673-4802aff9-6e82-41fc-85e3-9f187f760e19.png)

This means you're using an **incompatible Minecraft version**.

```
We support all Spigot/Paper versions from 1.12.2 up to 1.21.10, except these:
```

| ❌ Incompatible versions   |
|----------------------------|
| Older than 1.12            |
| 1.13                       | 
| 1.14–1.14.4                | 
| 1.16–1.16.3                | 

> Latest update: Support for 1.21.9 and 1.21.10 was added in plugin version 2.5.8.

---

## 6. I can't buy a vehicle!

- Use the command `/mtv buy <vehicleName>` to get a vehicle or `/mtv buy <vehicleName> --voucher:true` to get a voucher

  > `<vehicleName>` - If you're using Minecraft version 1.13+, the command should automatically show you a list of available vehicles (use TAB or scroll).<br><br>
  > Alternatively, you can also use `/mtv buycar <UUID>` or `/mtv buyvoucher <UUID>`, list of UUIDs can be found in [vehicles.yml](https://github.com/GamerJoep/MinetopiaVehicles/blob/master/src/main/resources/vehicles.yml#L30)), but this approach is not recommended anymore.
  
  ::: warning
  Permission `mtvehicles.buycar` or `mtvehicles.buyvoucher` necessary.
  :::

- If you still can't buy a vehicle, make sure **Vault** is installed and hooked correctly.

  ::: tip
  Use the `/mtv vault` command. Permission `mtvehicles.admin` is necessary.
  :::


If your Economy plugin is not hooked correctly – use `/mtv vault setup`. The plugin will try to find it again.

<img width="560" height="43" alt="image" src="https://github.com/user-attachments/assets/60d8c6ba-e60a-4368-b97f-f1151aae3ac7" />

If this still doesn't work, make sure your Economy plugin is hooked correctly with Vault using `/vault-info`:

<img width="386" height="40" alt="image" src="https://github.com/user-attachments/assets/7f2bcc2f-410b-4e7b-931d-9385169ea949" />


---

## 7. I've got lags. Is the plugin too demanding?
In case you're using Aternos, then you're probably right. As their servers are free, they might not be "beefy enough".

If you have your own server, try allocating more RAM or upgrading your CPU.

> We're constantly trying to optimize the plugin. Make sure you're using the latest plugin version.

---

## 8. How to create a vehicle shop?
We do not offer such a feature, however, you can achieve the same goal by installing any shop plugin out there.

- If you want to use **commands**, use `/mtv give <player> <vehicleName>`. (Explained [here](#_3-how-to-get-a-vehicle).)
- In case you need to use **items**, use **vouchers** - `/mtv give <player> <vehicleName> --voucher:true`.

  ::: warning
  You should NOT sell cars which you get from `/mtv menu`. They already have an owner (and other properties you'd have to edit) assigned to them.
  :::

---

## 9. How to fuel a vehicle?
Enter the vehicle and left-click it while holding a jerry can. You may obtain this jerry can by executing `/mtv fuel`.

::: warning
Permission `mtvehicles.benzine` necessary.
:::

**Alternatively**, you may execute `/mtv refill` while holding the vehicle in your hand.

::: warning
Permission `mtvehicles.refill` necessary.
:::

---

## 10. How to shoot (from a tank)?

Firstly, only tank shoots (nothing else).

Secondly, press `space` to shoot!

If you want to shoot TNTs, you have to set `tankTNT: true` in `config.yml` and reload the plugin (`/mtv reload`)!

---

## 11. How to fly with a UFO?

UFO doesn't fly, only airplanes and helicopters do.

---

## 12. How to fly an airplane?

To take off, you need to reach a certain speed. Then, take off with space (the same way you would with a helicopter).

---

## 13. Why isn't my boat moving?

Boats need to be in at least 2-block-deep water to move. (This means you can't operate them in shallow waters and on land.)

---

## 14. The vehicle is removed from the data, how to remove it?

![image](https://github.com/GamerJoep/MTVehicles-Wiki/assets/52205375/6e01f2b0-d2f0-4a05-9a42-0bb416846787)

This will delete all armor stands in the radius of `3`. Make sure you stand in the middle of the vehicle or change the radius.
- For Minecraft version 1.12.2, use `/kill @e[type=ArmorStand,r=3]`
- For versions 1.13+, use  `/minecraft:kill @e[type=armor_stand,distance=..3]`
