# AI Features

You can use LLM to aid in generating content for your templates. Currently supported providers:

- [OpenAI](https://openai.com/)
- [OpenRouter](https://openrouter.ai/): Gives you access to nearly all of the latest models
- Local/Custom Model: You can also use a local model that is running on your or another machine

## Setup

To use the AI features you need to provide an API key. Open the settings of S&D and scroll down to the AI section.

- Enable it
- Put in the key into `API Key`
- Select the `Provider` and `Model`

### Local Model

If you are using a local model, for example via [LMStudio](https://lmstudio.ai/) you want to select `Custom (e.g. Local)` as `Provider`.
You can then put in the URL of the model as `Custom URL` and provide a optional `Custom Model` in case the custom url provides multiple models.
In general all endpoints that support the OpenAI API specs should work, which is most of them.

### Context Window and Max Tokens

- **Context Window**: Defines how much token are allowed to be used to give the model context. The more context the better the model can generate content as he gets more example to work with.
- **Max Tokens**: Defines how many tokens the model should generate at max. If this is too low the model might not be able to finish the data.

## Template Features

If you open a Template you can open the `AI Tools` tab in the sidebar. Here you can generate content for your template.

- **AI Entry**: This will generate a new entry based on the prompt. Example for a ttrpg monster template: `generate a new entry about a rogue cash register.`
- **AI Translation**: This will try translating the current selected entry to another language.

## Nunjucks Template Features

You can also prompt the AI in the Nunjucks templates.

```
{% ai %}
  you are a expert in ...
{% user %}
  some question
{% endai %}
```

## AI from Javascript

In your templates the globally available `aiPrompt` function can also be used.

```js
const res = aiPrompt("you are a expert in ...", "some question");
```
