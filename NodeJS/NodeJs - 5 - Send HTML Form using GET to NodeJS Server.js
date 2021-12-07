----------------------------------
<!-- save index.html  -->
----------------------------------

<html>

<body>

    <form action="http://127.0.0.1:8081/process_get" method="GET"> First Name: <input type="text" name="first_name">
        <br>
        Last Name: <input type="text" name="last_name">
        <input type="submit" value="Submit">
    </form>
</body>

</html>

----------------------------------
// SAVE index.js
----------------------------------

var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + "/" +
                 "index.html");
})
app.get('/process_get', function(req, res) {
    response = {
        first_name : req.query.first_name,
        last_name : req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})