# Express HTTPS

If behind a proxy make sure you enable [trust proxy](http://expressjs.com/en/4x/api.html#trust.proxy.options.table).

# TL;DR Usage

```js

const upgrade = require('express-https');
const app = require('express')();

// If behind a proxy
app.enable('trust proxy');

app.use(upgrade);

app.listen(config.port);

```