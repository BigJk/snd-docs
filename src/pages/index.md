<img src="/img/readme_header.png" />

# Sales & Dungeons

With Sales & Dungeons you can create highly customizable handouts, quick reference and much more for your Dungeons and Dragons (or other PnP) Sessions.
Most Thermal Printer are small in size and can be taken with you and kept right at the gaming table. Use-cases range from printing out magic items, spells
or a letter that the group found to little character sheets of your players to use as DM note. The possibilities are nearly endless!

<center>
    <img src="/img/screenshot.png" style={{maxWidth: "700px"}} />
    <img src="/img/screenshot_gen.png" style={{maxWidth: "700px"}} />
</center>

---

## Features

- Works on
    - Windows
    - Mac (Intel, M1)
    - Linux (x64, ARM64)
    - Raspberry Pi (ARMv6, ARMv7)
    - Anything else go can be compiled on
- Extensive templating system through [Nunjucks](https://mozilla.github.io/nunjucks/)
- Extensive random generator system
- Various connection methods
    - Windows Direct Printing
    - Raw USB Printing
    - CUPS (Linux, Mac)
    - Serial
- Import & Export templates and data sources
- Fast access to external [data sources](https://github.com/BigJk/snd/wiki/Data-Sources) like Open5e (instant access to SRD monsters, spells and more)
- Import data from other sources:
    - CSV
    - [FoundryVTT](https://foundryvtt.com/) Modules
    - Fight Club 5e XML Format
- Access Community Templates, Generators & Data Sources from within the App
- Edit templates in your favorite editor (e.g. Visual Studio Code) and get live preview

---

## How It Works

<img alt="Sales &amp; Dungeons" src="/img/work_graph.svg" style={{ float: 'left', marginRight: '20px' }} />

**Templates:** Templates are created in HTML (and CSS) in combination with the Nunjucks templating language. You can imagine
the templates as little websites. That makes it possible to use all the nice and convenient layout options that HTML and CSS
has to offer and even include any common framework you might need (e.g. Fontawesome for Icons).

**Rendered HTML:** After creating a template you can create entries with the data you want and print them.
Nunjucks will create the rendered HTML from the data you want to print.

**Rendered Image:** Then this HTML get's converted to a image. Currently this conversion is done by Chrome via the
Chrome Debug Protocol. Although Chrome seems like a huge overkill for just HTML-To-Image conversion it's the standard solution at the
moment because it supports most of the modern HTML and CSS features.

**ESC / POS Commands:** The last step before our awesome template hits the Printer is the conversion from the rendered image
to the "draw image" command of the printer.

**Printer:** The generated command will then be sent to the printer and printed. Now your template is ready to be used!

:tada: :tada: :tada:

---

## Getting Started

To get started with Sales & Dungeons please read the [Getting Started](/docs/intro).