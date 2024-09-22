# Generator

A Generator creates procedural content like random dungeons, rolling from a table, random encounters and much more.

In the following section a brief introduction to the tabs found in the generator creation will be given:

## Information

Here basic information for the generator, like a name and description that will be shown in the generator page are set.

### Author & Slug

It's important to know that generators will be identified by author and slug. Both are allowed
to contain alphanumeric (`a-z A-Z 0-9`) and the `-` character. You can think about the slug as a simplified
name that is used for identification instead of looking nice to display.

**Example:** If you want a generator generating Dungeons you might set the name to `Dungeon Generator`,
the Author to `YourUsername` and the slug to `dungeon-generator`.

With the help of author and slug it is easier to share generators and update them when importing.

## Images

It is possible to attach images to a generator. Imagine you want to add a border to your template.
Here is the right place to add these images. If you added an image it is possible to access it
in a template via the `images` variable.

### Example

```html
<img src="{{ images['your_image.png'] }}" alt="" />
```

## Sources

Data sources are collection of entries (data) that can be linked to generators.
An example would be a list of Monsters or Magic Items. Any data source that you want to link
to this generator can be selected here.

The sources are available in the template via the `sources` variable. It's important to know that this is a list of the source ids.
If you want to fetch the data of a source you can use the `source` filter. Check the **Tips & Tricks** section below for more information.

## Config

The config of a generator defines what kind of values a user can tweak. These are the values your generator template should respond to and are available in your template.

- **Key**: Specifies the key for the value. This affects how you access the value in the template. `key_test` can be accessed in template by `{{ config.key_test }}`
- **Name & Description**: What the user will be shown as name and description for this config option.
- **Type**: What kind of input will be shown for the user.
- **Default Value**: The default value for this config

### Seed

Every generator will have a seed as config option. This option can't be deleted and generator authors are advised to use the seed or the seeded random functions inside their Print Template to keep the output reproducible. More on that in the Print Template section.

## Test Config

Here you can change the test config for the template preview to see if everything works as expected.

## Print Template

Just like a Template a Generator also contains a Print Template that specifies what should be printed. With generators the template will most likely contain more complex logic and javascript than your typical Template.

See [Nunjucks Filter & Extension](https://github.com/BigJk/snd/wiki/Nunjucks-Filter-&-Extensions) for more info on additional filters and extensions available in Sales & Dungeons.

### Random

#### Seed

As mentioned before all generators should use the user provided seed in their generation logic. You can access the seed with `{{ config.seed }}`.
There are two javascript functions that are pre-seeded with the `config.seed` value. If you use them the template will be seeded correctly without any additional changes:

#### `random()`

Replacement for `Math.random()`

#### RPG Dice Roller

[RPG Dice Roller](https://dice-roller.github.io/documentation/) is embedded in any generator template. You can access it via the global variable `rpgDiceRoller`.

If you just want to quickly roll a dice and get the numeric output use: `dice.roll('1d6+2').total`

#### Nunjucks

The following Nunjucks filters are also seeded and should result in predictable output when using the same seed:

```
Shuffled: {{ [1, 2, 3, 4, 5] | shuffle }}
Pick one by random: {{ [1, 2, 3, 4, 5] | random }}
```

## 🛠️ Tips & Tricks

### Accessing a linked Data Source

**Randomly select an entry from each linked Data Source**

```
{% for s in sources %}
  {% set selected = s | source | random %}
  {{ selected.id }} {{ selected.data.whatever }}
{% endfor %}
```

**If you only have one linked Data Source**

```
{% set selected = sources[0] | source | random %}
{{ selected.id }} {{ selected.data.whatever }}
```

**If you linked it via a config option**

```
{% set selected = config.my_source | source | random %}
{{ selected.id }} {{ selected.data.whatever }}
```

### Passing the config to javascript

```html
<script>
  const config = JSON.parse(`{{ config | json }}`);
</script>
```

### Nunjucks Filter & Extensions

Checkout [Nunjucks Filter & Extensions](/docs/templating/nunjucks-filter/) for more info on additional filters and extensions available in Sales & Dungeons.
