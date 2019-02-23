#Sass and PHP files

### First install

```bash
npm install
```
Edit file webpack.config.js:
```javascript
...
  output: {
    path: path.resolve('./public/build/'),//Edit here
    publicPath: '/public/build/',//Edit here
    filename: '[name].js',
  },
...
```
You should change those lines by the whole path of your local webserver. 

For example if you visit your website like this:
`http://localhost:8000/my-awesome-project/public/`
Your file would look like this:
```javascript
...
  output: {
    path: path.resolve('./my-awesome-project/public/build/'),
    publicPath: '/my-awesome-project/public/build/',
    filename: '[name].js',
  },
...
```

### During development

```bash
npm run watch
```
### build and save CSS and JS files

```bash
npm run build
```