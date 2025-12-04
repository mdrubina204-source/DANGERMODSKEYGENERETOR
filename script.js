const keyDisplay = document.getElementById("keyDisplay"); // The UI box to show the key
const apiUrl = "https://your-app.onrender.com/generate"; // Your server endpoint

// Fetch a key from server
async function fetchKey(days = "7", device = "1DEV") {
  try {
    const res = await fetch(`${apiUrl}?days=${days}&device=${device}`);
    const data = await res.json();
    keyDisplay.textContent = data.key; // <- THIS is your variable showing the key
  } catch (err) {
    console.error(err);
    keyDisplay.textContent = "Error fetching key!";
  }
}

// Event listener
document.getElementById("generateBtn").onclick = () => {
  const days = document.getElementById("days").value;
  const device = document.getElementById("device").value;
  fetchKey(days, device);
};
