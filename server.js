const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "API Working" });
});

app.listen(3000, () => console.log("Server running"));    } else {
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
