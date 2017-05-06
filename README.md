# Wordpress+React Theme

This project utilizes the native Wordpress Rest API (4.7+)
to power a custom theme built using React. This is a true single
page app, utilizing React Router to handle dynamic routing using page
data to create routes on the fly.

Download a fresh copy of [Wordpress](https://wordpress.org/), and replace `wp-content/`.

## Installation and Tools

We use webpack for module bundling and a gulp task for style (SCSS) compilation.

To get started, run:

```bash
~ npm install
```

Running `npm run dev` will start a local webpack dev server, as well as our gulp task.

`npm run build` generates a production bundle, ready and enqeued by our theme's `functions.php`
