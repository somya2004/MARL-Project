const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
let systemData = {
  agents: [
    { id: 1, name: 'Reservoir Agent 1', status: 'Active', performance: 95 },
    { id: 2, name: 'Pump Agent 1', status: 'Active', performance: 87 },
    { id: 3, name: 'Distribution Agent 1', status: 'Idle', performance: 90 },
  ],
  metrics: {
    totalWaterFlow: '1200 L/min',
    energyUsage: '300 kWh',
    waterLoss: '2.5%',
  },
};

// Endpoints
app.get('/api/agents', (req, res) => {
  res.json(systemData.agents);
});

app.get('/api/metrics', (req, res) => {
  res.json(systemData.metrics);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
