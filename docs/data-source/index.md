---
sidebar_position: 5
---

# Data Sources

Data Sources are collections of data that can be linked to Templates and Generators. For example a Data Source could contain monsters from Dungeons & Dragons 5e, so that the monsters can be used in a Template.

## Format

Data Sources consist out of two very simple .json files:

- meta.json
- entries.json

You can import folders or zip files containing these files into Sales & Dungeons.

### meta.json

Just the basic infos

```json
{
  "name": "Open5e Weapons",
  "slug": "open5e-weapons",
  "author": "BigJk",
  "description": "Imported weapon data from Open5e"
}
```

### entries.json

You entries as a array. Objects need a unique `id`, some `name` and then the `data` object with whatever data it should hold. Fairly plain.

```json
[
  {
    "id": "open5e/club",
    "name": "Club",
    "data": {
      // YOUR DATA HERE
      "description": "A simple ...",
      "cost": "1 sp"
    }
  },
  {
    "id": "open5e/dagger",
    "name": "Dagger",
    "data": {
      // YOUR DATA HERE
    }
  }
]
```

## Import

Sales & Dungeons supports additional import formats. Currently supported are:

- **CSV**: Tabular data
- **Fight Club 5e XML**: Data from the Fight Club 5e xml files
- **FoundryVTT**: Data from FoundryVTT modules
- **5e.tools**: JSON data from 5e.tools
