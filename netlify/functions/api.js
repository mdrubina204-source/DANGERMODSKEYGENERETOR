exports.handler = async () => {
  const message = `
✨🚀 Welcome to the API! 🚀✨

╔════════════════════╗
║   API is LIVE!     ║
║   Enjoy your data  ║
╚════════════════════╝

💡 Tip: Make something amazing! 💡
`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "string",
      message: message
    })
  };
};
