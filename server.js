const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Your device ID (change this to your actual phone ID)
const DEVICE_ID = "MY_PHONE_001";

// Example "database" of keys
// You can add pre-generated keys here or generate dynamically
let keysDB = [
    { key: "7D-1DEV-ABCD-EFGH-IJKL-MNOP", valid: true },
    { key: "LT-UNLIM-WXYZ-1234-5678-9ABC", valid: true }
];

// POST /verify-key
app.post("/verify-key", (req, res) => {
    const { key, deviceId } = req.body;

    if (!key || !deviceId) {
        return res.json({ status: "error", message: "Missing key or deviceId" });
    }

    // Check if device is correct
    if (deviceId !== DEVICE_ID) {
        return res.json({ status: "error", message: "Device not authorized" });
    }

    // Check if key exists and is valid
    const keyEntry = keysDB.find(k => k.key === key && k.valid);
    if (keyEntry) {
        return res.json({ status: "success", message: "Key valid ✅" });
    } else {
        return res.json({ status: "error", message: "Invalid Key ❌" });
    }
});

// Add new key (for admin use, optional)
app.post("/add-key", (req, res) => {
    const { key } = req.body;
    if (!key) return res.json({ status: "error", message: "Missing key" });

    keysDB.push({ key, valid: true });
    res.json({ status: "success", message: "Key added" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
