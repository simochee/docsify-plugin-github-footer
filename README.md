<p align="center">
  <img src="docsify.svg" alt="Docsify Logo" height="128">
</p>
<h1 align="center">Docsify Plugins</h1>
<h3 align="center">GitHub Footer</h3>
<p align="center">by <a href="https://github.com/simochee">simochee</a></p>

[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/docsify-plugin-github-footer/badge)](https://www.jsdelivr.com/package/npm/docsify-plugin-github-footer)
[![npm version](https://badge.fury.io/js/docsify-plugin-github-footer.svg)](https://badge.fury.io/js/docsify-plugin-github-footer)
[![License](https://img.shields.io/npm/l/docsify-plugin-github-footer)](https://github.com/simochee/docsify-plugin-github-footer/blob/main/LICENSE)

Useful GitHub Pages links footer for Docsify.

## 📀 Installation

Insert a script tag to load the plugin script file after loading the Docsify script.

```html
<script>
  window.$docsify = {};
</script>
<script src="//cdn.jsdelivr.net/npm/docsify@v4/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-plugin-github-footer/lib/docsify-plugin-github-footer.min.js"></script>
```

## 🔰 Usage

Configure the plugin in the Docsify configuration.

```html
<script>
  window.$docsify = {
    githubFooter: {
      // required: production branch
      ref: 'develop',
      // optional: inherit from $docsify.repo
      repo: 'simochee/docs-repo',
      // optional: base directory of the repo
      dir: 'docs',
    }
  };
</script>
```

### Customize footer style

```html
<style>
.docsify-github-footer {
  /* override style */
}
</style>
```

## 💻 Development

1. Clone this repository
1. Enable Corepack using `corepack enable`
1. Install dependencies using `pnpm install`
1. Run watch mode using `pnpm run watch`
1. Start server using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
1. Insert a script tag to load the plugin script file after loading the Docsify script.

```html
<script src="http://localhost:5500"></script>
```

## 🛡️ License

MIT
