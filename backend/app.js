const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.status(200).json({
		message: "hello from the server side!",
	});
});

app.listen(3000, () => {
	console.log("server started on port 3000");
});
