const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use('/libs', express.static('node_modules'));
// app.use(bodyParser.json());

const port = process.env.PORT || 3001;

// app.get('/', function(req, res) {
//     console.log('Its Work!');
//     res = 'Work';
//     return res;
// });

app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port);
});
