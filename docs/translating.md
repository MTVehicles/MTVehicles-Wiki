# Translate the plugin

## 1. Use one of MTV's offered languages
Apart from English (default), we and our community have already managed to add Dutch, Czech and Spanish (and as of 2.4.0, also German, Turkish and Chinese).

1. Execute `/mtv language`
2. Choose a language by clicking an item
3. Done! The plugin has been translated!

> All languages can be found as separate files in the `/plugins/MTVehicles/messages/` folder.<br>
> **You may edit them**, and after having it done, execute `/mtv reload` to apply changes.

<br>

## 2. Create your own language
This method is far more difficult, thus **you should not do it unless** you completely understand the following steps:

1. Create your own `messages_xx.yml` file in the `/plugins/MTVehicles/messages/` folder. (E.g. by copying an existing message file and editing the messages)

  ::: danger BEWARE
  Bear in mind, your final file **must end with `.yml`**! (.txt or other files will NOT work!)
  :::

2. Open `/plugins/MTVehicles/supersecretsettings.yml` and set `messagesLanguage: xx`

  ::: danger BEWARE
  **Do NOT change anything else.** (Even the messagesVersion must **remain the same**. Only change the `messagesLanguage` option.)
  :::

3. Reload the plugin by executing `/mtv reload`.

::: warning
This custom language **WILL NOT appear** in the `/mtv language` command GUI. You may only set it inside `supersecretsettings.yml`.
:::

<br>

### ❗THIS METHOD IS DANGEROUS❗
- If you mess up anything, it may result in the plugin not being able to send messages properly.
- **When you update**, make sure that your `messages_xx.yml` file contains ALL MESSAGES (= it has the same no. of rows as files created by us) because we may have added new ones.

<br>

## Do you want to contribute?🫂
**Have you translated the plugin for yourself and do you want the translation to be publicly available to anyone?** That's great!

Right now, you've got 2 options:
- **If you're familiar with how GitHub works**, [open a pull request](https://github.com/GamerJoep/MinetopiaVehicles/pulls) where you'll add the new file.

  > All messages are stored in [`src/main/resources/messages/`](https://github.com/GamerJoep/MinetopiaVehicles/tree/master/src/main/resources/messages).<br>
  > ⚠ New version are often developed in another branch. (But don't worry, we may adjust your PR so it's okay.)

- **In case you don't understand Git**, contact us at our [Discord](https://discord.gg/vehicle) and send us your file there.

  > It may take a little longer if you submit your file via Discord, but it'll get here eventually.
