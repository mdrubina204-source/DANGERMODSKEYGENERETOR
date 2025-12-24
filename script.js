/* 1. KEY GENERATION LOGIC */
function secureRandom(len){
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const arr = new Uint8Array(len);
  window.crypto.getRandomValues(arr);
  return [...arr].map(n=>chars[n%chars.length]).join('');
}

function makeKey(){
  const days = document.getElementById("days").value;
  const dev = document.getElementById("device").value;
  const dayPrefix = days === "LT" ? "LT" : days + "D";

  // Example: DM-7D-1DEV-A1B2C3D4
  return "DM-" + dayPrefix + "-" + dev + "-" + secureRandom(8);
}

/* 2. API SYNC LOGIC */
document.getElementById("generateBtn").onclick = async () => {
  const btn = document.getElementById("generateBtn");
  const display = document.getElementById("keyDisplay");
  const newKey = makeKey();
  
  display.textContent = "REGISTERING...";
  btn.disabled = true;

  try {
    // Calling your Netlify Function
    const response = await fetch(`/.netlify/functions/api?newKey=${newKey}`);
    const data = await response.json();

    if (data.status === "Registered") {
        display.textContent = newKey;
    } else {
        display.textContent = "SERVER ERROR";
    }
  } catch (error) {
    display.textContent = "OFFLINE";
  } finally {
    btn.disabled = false;
  }
};

document.getElementById("copyBtn").onclick = async () => {
  const key = document.getElementById("keyDisplay").textContent;
  if(key.includes("—")) return;
  await navigator.clipboard.writeText(key);
  alert("Copied!");
};
