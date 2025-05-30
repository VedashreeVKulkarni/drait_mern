const express = require("express");
const mongoose = require("mongoose");
const Flight = require("./models/Flight");

const app = express();
const PORT = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/flightdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Route to add a flight
app.post("/flights", async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.status(201).json(flight);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to get all flights
app.get("/flights", async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
