# Use MTV in your plugin

## Adding as a dependency

- You can use **JitPack** to add MTVehicles as a dependency to your project.
- See the JitPack page for more information: [https://jitpack.io/#MTVehicles/MinetopiaVehicles](https://jitpack.io/#MTVehicles/MinetopiaVehicles)

[![](https://jitpack.io/v/MTVehicles/MinetopiaVehicles.svg)](https://jitpack.io/#MTVehicles/MinetopiaVehicles)

### Maven

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>

<dependency>
    <groupId>com.github.MTVehicles</groupId>
    <artifactId>MinetopiaVehicles</artifactId>
    <version>2.5.7</version>
</dependency>
```

### Gradle

```gradle
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}

dependencies {
    implementation 'com.github.MTVehicles:MinetopiaVehicles:2.5.7'
}
```

<br>


::: warning Wait!
JitPack releases are only available as of 2.5.7 – if you want to use an older version, you have to use the system scope.
:::

Here is an example of a `system scope` implementation in Maven:

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
