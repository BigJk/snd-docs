# Templating

A template defines the look of a print-out and contains entries that can be printed.
Templates are 'designed' in HTML and CSS and the data is inserted via a templating
engine called [Nunjuks](https://mozilla.github.io/nunjucks/).

Using HTML and CSS makes it possible to use all the nice and convenient layout and style
options that they have to offer and even include any common framework you might need
(e.g. Fontawesome for Icons). This can greatly speedup the template creation process.

## Learning

If you are new to HTML, CSS and the likes a good starting point might be:

- HTML: [HTML Introduction](https://www.w3schools.com/html/html_intro.asp)
- CSS: [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
- Nunjucks: [Templating](https://mozilla.github.io/nunjucks/templating.html)

## Template Types

There are two types of templates that you can build in Sales & Dungeons.

### Template

A typical **Template** is used to create a print-out for a certain type of entry. Examples are:
- Template for Monsters
- Template for Spells
- Template for Items
- ...

### Generator

A **Generator** is used to create a print-out with random generated content based on some configuration. Examples are:
- Generator for random NPC stats
- Generator for a random dungeon
- Generator for a random encounter
- ...