# Use MTV in your plugin

## Maven

::: warning SORRY :(
We currently do not offer adding MTVehicles as a dependency from a remote repository.
:::

In its stead, you may move MTVehicles to a separate folder and add it with the `system scope`.

```xml
<dependency>
    <groupId>nl.mtvehicles</groupId>
    <artifactId>core</artifactId>
    <version>2.4.3</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/libs/MTVehicles.jar</systemPath>
</dependency>
```

## plugin.yml

Do not forget to add this line to your `plugin.yml` file.

```
depend: [MTVehicles]
```
