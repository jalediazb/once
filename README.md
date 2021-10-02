# ONCE - Eleventy Theme

[**Demo**](https://once-eleventy.netlify.app/)

Personal theme made with:
- [Eleventy](https://www.11ty.dev/)
- [BulmaCSS](https://bulma.io/)
- [PurgeCSS](https://purgecss.com/)

Features:

- Layouts for:
  - Pages (minimal-post.njk)
  - Post (post.njk)
  - Index
  - Tag pages
  - Error 404
- Sitemap
- Search by titles
- Share Buttons
- Links for social profiles.
- Blocks for ads or another content
- Cookies advice
- Minify CSS, JS and HTML
- Remove unused CSS

## Scripts

- Develop: `npm run serve`
- Build: `npm run build`

## Config Theme

There is a file `_data/config.json` where you can edit your configuration.

### Custom CSS y JS
- `./src/_css/custom.css`
- `./_includes/scripts.js`

### Error 404

There is a template for errors. [More information](https://www.11ty.dev/docs/quicktips/not-found/).

### Ad Blocks

Edit in `eleventy.js`
