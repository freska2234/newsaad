const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const clients = [
  {
    license: "user-lic-2025-08-01",
    expires: "2025-08-30",
    fingerprint: "55a462e0fe78f5098998264fce38f115d2c4165dac21ffc45b6bf7767166b6ae"
  },
    license: "admin",
    expires: "2025-08-30",
    fingerprint: "b96e9bac114b42e2a7dd468c334d61c7591b19863eed91561b0903b90b895f7e"
  },
];

app.get("/", (req, res) => {
  res.send("✅ Proxy is Live");
});

app.get("/clients", (req, res) => {
  const { license } = req.query;
  const client = clients.find(c => c.license === license);
  if (!client) return res.status(404).json({ error: "Not found" });
  res.json(client);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
