# FAQ, Frequent Errors

## 1. How to download and set up the plugin?
For a step-by-step tutorial, [click here](https://github.com/GamerJoep/MinetopiaVehicles#how-to-download).

---

## 2. How to get a vehicle?
- Execute `/mtv menu` and choose from dozens of vehicles!

  > ⚠ Permission `mtvehicles.menu` necessary.

- Execute `/mtv givecar <player> <UUID>`.

  > &lt;player&gt; - Player who must be online when the command is being executed.<br>
  > &lt;UUID&gt; - UUID of your desired vehicle (can be found in [vehicles.yml](https://github.com/GamerJoep/MinetopiaVehicles/blob/master/src/main/resources/vehicles.yml#L30))
  >
  > ⚠ Permission `mtvehicles.givecar` necessary.

---

## 3. How to get rid of a vehicle?
Shift and Right-click the vehicle to pick it up.
> ⚠ You must OWN the vehicle or have the permission `mtvehicles.oppakken`.

**Beware:** Even after picking the vehicle up, it is still stored in the database and can be restored with the `/mtv restore` command.<br>
**To prevent this**, delete it using `/mtv delete` while holding the item.

---

## 4. I am getting 'An internal error occurred...' error
Firstly, **check your console** and look for **this message** (time may be different, of course):

![image](https://user-images.githubusercontent.com/47473562/161583020-5b4eea98-16b6-44a5-993e-c53b740df610.png)

> And if you're attentive, you should have already seen this warning:<br>
> ![image](https://user-images.githubusercontent.com/47473562/161582673-4802aff9-6e82-41fc-85e3-9f187f760e19.png)

This means you're using an **incompatible Minecraft version**. We always support the **latest patch versions**, except 1.14.x:

| Version(s)        | Compatibility     |   | Version(s)        | Compatibility     |
|-------------------|-------------------|---|-------------------|-------------------|
| Older than 1.12   | ❌ Incompatible  |   | 1.15.2            | ✔️ Compatible    |
| 1.12-1.12.1       | Not guaranteed    |   | 1.16-1.16.3       | ❌ Incompatible  |
| 1.12.2            | ✔️ Compatible    |   | 1.16.4            | Not guaranteed    |
| 1.13              | ❌ Incompatible  |   | 1.16.5            | ✔️ Compatible    |
| 1.13.1            | Not guaranteed    |   | 1.17              | Not guaranteed    |
| 1.13.2            | ✔️ Compatible    |   | 1.17.1            | ✔️ Compatible    |
| 1.14-1.14.4       | ❌ Incompatible  |   | 1.18-1.18.1       | ❌ Incompatible  |
| 1.15-1.15.1       | Not guaranteed    |   | 1.18.2            | ✔️ Compatible    |

---

## 5. How to create a vehicle shop?
We do not offer such a feature, however, you can achieve the same goal by installing any shop plugin out there.

- If you want to use **commands**, use `/mtv givecar <player> <UUID>`. (Explained [here](#2-how-to-get-a-vehicle).)
- In case you need to use **items**, use **vouchers** - `/mtv givevoucher <player> <UUID>`. (Works exactly the same as /mtv givecar.)

  > ⚠ You should NOT sell cars which you get from `/mtv menu`. They already have an owner (and other properties you'd have to edit) set.
