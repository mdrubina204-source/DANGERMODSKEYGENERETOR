exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: "string",
      message:
`⚡️ DANGER MODS API ⚡️

╔════════════════════╗
║   🚀 API IS LIVE!   ║
║   ✅ STATUS: OK     ║
║   🎯 READY TO USE   ║
╚════════════════════╝

✨ Tips:
• Use your key correctly
• Stay updated
• Enjoy smooth access

🔥 Powered by Netlify`
    })
  };
};
