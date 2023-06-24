# Nunjucks Filter & Extensions

Sales & Dungeons contain additional filters and extensions for the Nunjucks templating. All the build-in's can be found here: [Templating Documentation](https://mozilla.github.io/nunjucks/templating.html).

## Filters

### Markdown

Markdown parsing is possible with the ``markdown`` and ``markdowni`` filters. The ``markdowni`` filter will return inline markdown, which means no line-breaks and paragraph margins. Uses [markdown-it](https://github.com/markdown-it/markdown-it) and has markdown table support enabled.

```
{{ it.some_data | markdown }}
{{ it.some_data | markdowni }}
```

### JSON

The ``json`` filter encodes the data as JSON which can help in debugging problems with a template or passing data to some javascript you want to execute.

```
{{ it.some_data | json }}
```

### Source

Fetch sources by id from inside your template with the ``source`` filter. This is useful in generators to fetch a source that was selected by the user.

```
{{ config.data_source.selected | source }}
{{ "ds:BigJk+open5e-monsters" | source }}

{% for item in "ds:BigJk+open5e-monsters" | source %}
   ...
{% endfor %}
```

## Extensions

### JSON Data

You can add JSON data as new Nunjucks variables. This might be useful if JSON wants to be embedded as some kind of static data for the template. The variable the data will be saved to can be specified (``some_var`` in the example).

```
{% data "some_var" %}
	{
		"test": "some data",
		"number": 123
	}
{% enddata %}

{{ some_var.test }}
{{ some_var.number }}
```

### Javascript Execution

If you want to execute some javascript on the data within Nunjucks instead of dynamically in the HTML (``<script>...</script>``) you can use the ``js`` extension. The extension expects a valid javascript function that takes 1 argument. The argument is a variable containing all the nunjucks variables. The function should return a value. That value will be saved to the nunjucks variable specified (``some_var`` in the example).

```
{% js "some_var" %}
	(state) => {
		// can access state.it, state.images, state.entries and any other nunjucks variables defined before this point.
		return state.it.test.map(t => t.num + 1)
	}
{% endjs %}

{% for item in some_var %}
	...
{% endfor %}
```