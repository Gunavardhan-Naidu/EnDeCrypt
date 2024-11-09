const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Backend is running');
});

const encryptionRoutes = require('./routes/encryptionRoutes');
app.use('/api/encrypt', encryptionRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
