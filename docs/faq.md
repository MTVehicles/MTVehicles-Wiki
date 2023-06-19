# FAQ, Frequent Errors

First of all, you need **a Minecraft server** with Spigot/Paper. (No, plugins do NOT work locally.)

## 1. How to download and set up the plugin?
For a step-by-step tutorial, [click here](https://github.com/GamerJoep/MinetopiaVehicles#how-to-download).

---

## 2. I can only see diamond hoes!
You need our **resource pack** to be able to see the vehicles. Download it [here](https://mtvehicles.nl/resourcepack/).

::: warning
As of version 2.4.0 (The Airplane Update), a new version of resource pack (v0.2) is required!
:::

---

## 3. How to get a vehicle?
- Execute `/mtv menu` and choose from dozens of vehicles!

  ::: warning
  Permission `mtvehicles.menu` necessary.
  :::

- Execute `/mtv givecar <player> <UUID>`.

  > &lt;player&gt; - Player who must be online when the command is being executed.<br>
  > &lt;UUID&gt; - UUID of your desired vehicle (can be found in [vehicles.yml](https://github.com/GamerJoep/MinetopiaVehicles/blob/master/src/main/resources/vehicles.yml#L30))
  
  ::: warning
  Permission `mtvehicles.givecar` necessary.
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
Firstly, **check your console** and look for **this message** (time may be different, of course):

![Plugin is disabled](https://user-images.githubusercontent.com/47473562/161583020-5b4eea98-16b6-44a5-993e-c53b740df610.png)

> And if you're attentive, you should have already seen this warning:<br>
> ![Incompatible version](https://user-images.githubusercontent.com/47473562/161582673-4802aff9-6e82-41fc-85e3-9f187f760e19.png)

This means you're using an **incompatible Minecraft version**. We always support the **latest patch versions**, except 1.14.x:

| Version(s)        | Compatibility     |   | Version(s)        | Compatibility     |
|-------------------|-------------------|---|-------------------|-------------------|
| Older than 1.12   | ❌ Incompatible  |   | 1.16.4            | Not guaranteed    |
| 1.12-1.12.1       | Not guaranteed    |  | 1.16.5            | ✔️ Compatible    | 
| 1.12.2            | ✔️ Compatible    |   | 1.17              | Not guaranteed    | 
| 1.13              | ❌ Incompatible  |   | 1.17.1            | ✔️ Compatible    | 
| 1.13.1            | Not guaranteed    |   | 1.18-1.18.1      | Not guaranteed    |
| 1.13.2            | ✔️ Compatible    |    | 1.18.2            | ✔️ Compatible   |
| 1.14-1.14.4       | ❌ Incompatible  |   | 1.19-1.19.2       | ✔️ Compatible   |
| 1.15-1.15.1       | Not guaranteed    |   | 1.19.3-1.19.4    | ⚠️ 2.5.0        |
| 1.15.2            | ✔️ Compatible    |   | 1.20-1.20.1       | ⚠️ 2.5.0         |
| 1.16-1.16.3       | ❌ Incompatible  |   | Newer snapshots   | ❌ Incompatible |
---

## 6. The vehicles do not move. I am using a compatible version of Paper.

You need to open the `paper.yml` file and set `armor-stand-tick: true`.

---

## 7. I've got lags. Is the plugin too demanding?
In case you're using Aternos, then you're probably right. As their servers are free, they might not be "beefy enough".

If you have your own server, try **allocating more RAM**.

---

## 8. How to create a vehicle shop?
We do not offer such a feature, however, you can achieve the same goal by installing any shop plugin out there.

- If you want to use **commands**, use `/mtv givecar <player> <UUID>`. (Explained [here](#_3-how-to-get-a-vehicle).)
- In case you need to use **items**, use **vouchers** - `/mtv givevoucher <player> <UUID>`. (Works exactly the same as /mtv givecar.)

  ::: warning
  You should NOT sell cars which you get from `/mtv menu`. They already have an owner (and other properties you'd have to edit) set.
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
