const express = require("express");
const app = express();

const clients = [
  {
  {
    license: "admin",
    expires: "2025-08-30",
    fingerprint: "b96e9bac114b42e2a7dd468c334d61c7591b19863eed91561b0903b90b895f7e"
  }
];

// 📦 API endpoint: /clients?license=xxx
app.get("/clients", (req, res) => {
  const license = req.query.license;
  const client = clients.find(c => c.license === license);
  if (client) {
    res.json(client);
  } else {
    res.status(404).json({ error: "License not found" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
