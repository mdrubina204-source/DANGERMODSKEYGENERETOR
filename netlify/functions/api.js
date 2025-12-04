exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      type: "string",
      message: `
✨🚀 Welcome to the API! 🚀✨

╔════════════════════╗
║   API is LIVE!     ║
║   Enjoy your data  ║
╚════════════════════╝

💡 Tip: Make something amazing! 💡
      `.trim()
    })
  };
};
