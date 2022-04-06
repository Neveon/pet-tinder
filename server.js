const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect to Database
connectDB();

// Init middleware, allows us to accept json body data
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/register", require("./routes/register"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/terminate", require("./routes/terminate"));
app.use("/api/like", require("./routes/like"));

// Serve static assets in production build
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

const PORT = process.env.PORT || 1337;

// Run on specified port or on 1337
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
