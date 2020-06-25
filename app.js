const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(request, response){
    response.send('Fuck you you cocksucking basterd, you smell like octopus pussy');
})

app.get("/fuckyou", function(request, response){
    response.send("you gay basterd, i should kick you in the cock");
})
app.listen(port, () => {
    console.log('server is running on port: 3000');
});