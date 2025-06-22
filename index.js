const express = require("express");
const app = express();

const clients = [
  {
    license: "user-lic-2025-08-01",
    expires: "2025-08-30",
    fingerprint: "126ab4424a2b530e7d85124afb6f8833e03dfc4cfe804365a97e0947eb8fe50a"
  },
  {
    license: "user-lic-2025-08-01",
    expires: "2025-08-30",
    fingerprint: "8e9f6e5804702742314dac004445478615f409e4cf8a84c5f18974982550d3af"
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
