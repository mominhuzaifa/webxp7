const express = require("express");
const app = express()
const response = [
    {
        name: "Momin Huzaifa",
        email: "mominhuzaifa@hotmail.com"
    },
];
app.get("/users", (req, res) => {
    res.json(response);
})


app.listen(5000, () => {
    console.log("listening on port 5000");
})