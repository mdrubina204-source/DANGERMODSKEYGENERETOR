exports.handler = async (event, context) => {
  // Example response with a string key
  return {
    statusCode: 200,
    body: JSON.stringify({
      type: "string",  // <- make sure this is a string
      message: "API Working"
    })
  };
};
