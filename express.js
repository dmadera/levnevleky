const express    = require('express');
const app        = express();
const portNumber = 3000;
const sourceDir  = 'dist';
const webpackHotMiddleware = require("webpack-hot-middleware");

app.use(express.static(sourceDir));

const wphmw = webpackHotMiddleware(webpackCompiler);
app.use(wphmw);

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
