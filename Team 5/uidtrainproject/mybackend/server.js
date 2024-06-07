const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/trains', (req, res) => {
  res.json([
    { id: 1, name: 'Train 1', from: 'Delhi', to: 'Mumbai' },
    { id: 2, name: 'Train 2', from: 'Chennai', to: 'Bangalore' },
  ]);
});

app.listen(5000, () => console.log('Server is running on port 5000'));