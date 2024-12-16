const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();



app.get("/", (req, res) => {
	res.send("Not all who wander are lost.");
});

app.get("/api", (req, res) => {
	res.json({ message: "Nothing to see here..." });
});


app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
