const resp = (statusCode, msg, data) => {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin":"*"
    },
    body: JSON.stringify(
      {
        message: msg,
        data,
      }
    ),
  };
};

module.exports = {
    resp
}