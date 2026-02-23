import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [agents, setAgents] = useState([]);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    // Fetch agents and metrics data
    axios.get('http://localhost:5000/api/agents').then((response) => {
      setAgents(response.data);
    });
    axios.get('http://localhost:5000/api/metrics').then((response) => {
      setMetrics(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MARL Water Management Dashboard</h1>
      </header>

      <div className="metrics">
        <h2>System Metrics</h2>
        <p><strong>Total Water Flow:</strong> {metrics.totalWaterFlow}</p>
        <p><strong>Energy Usage:</strong> {metrics.energyUsage}</p>
        <p><strong>Water Loss:</strong> {metrics.waterLoss}</p>
      </div>

      <div className="agents">
        <h2>Agent Performance</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Performance (%)</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent.id}>
                <td>{agent.id}</td>
                <td>{agent.name}</td>
                <td>{agent.status}</td>
                <td>{agent.performance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
