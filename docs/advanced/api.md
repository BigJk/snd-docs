# API Routes

Sales & Dungeons exposes a few API routes that can be used to fetch data and trigger printing from external applications.

- If S&D wasn't modified the API is accessible under ``http://127.0.0.1:7123/``.
- All data is JSON encoded.

## ``(GET) /api/extern/templates``

- Returns a list of all templates stored in S&D

### Example

```json
[
   {
      "id":"tmpl:Author+slug",
      "name":"Cool Template",
      "author":"Author",
      "slug":"slug",
      "description":"..."
   }
]
```

## ``(GET) /api/extern/generators``

- Returns a list of all generators stored in S&D

### Example

```json
[
   {
      "id":"gen:BigJk+dungeon-generator",
      "name":"Dungeon Generator",
      "author":"BigJk",
      "slug":"dungeon-generator",
      "description":"This randomly generates a dungeon with some basic description. How you use the door and loot descriptions is up to you. The descriptions are based on the \"AX1: Old School Adventure Accessories - D30 DM Companion\" by Richard J. LeBlanc, Jr.",
      "config":[
         {
            "key":"type",
            "name":"Algorithm Type",
            "description":"Which algorithm to use for generation.",
            "type":"Options",
            "default":{
               "choices":[
                  "Uniform",
                  "Digger",
                  "Rogue"
               ],
               "selected":"Uniform"
            }
         },
         {
            "key":"doors",
            "name":"Add Doors",
            "description":"Add description of doors and if they are locked.",
            "type":"Checkbox",
            "default":true
         },
         {
            "key":"container",
            "name":"Add Loot Container",
            "description":"Adds some loot containers.",
            "type":"Checkbox",
            "default":true
         },
         {
            "key":"container_chance",
            "name":"Loot Container Chance",
            "description":"Percentage (0 - 100%) chance of a loot container present in a room.",
            "type":"Number",
            "default":10
         }
      ]
   }
]
```

## ``(POST) /api/extern/print/:id``

### Template

- POST body should be a JSON encoded object containing the entry data
- You can check the info button (top right) on any template to get the id
- ``:id`` should be the template id (e.g. ``tmpl:Author+slug``)

### Generator

- POST body should be a JSON encoded object containing the generator config
- You can check the info button on any generator to get the id and the current config as JSON
- ``:id`` should be the template id (e.g. ``gen:Author+slug``)

## ``(POST) /api/extern/print_raw``

- POST body should contain ESC/POS commands as bytes
- Commands will be sent to the configured printer
- This is used by the `Remote S&D Printing` to send prints to different S&D instances