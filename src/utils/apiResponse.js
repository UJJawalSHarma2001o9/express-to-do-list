const apiSuccessResponse = (res, status, message, statusCode, data = {}) => {
  return res.status(statusCode).json({
    status: status,
    statusCode: statusCode,
    message: message,
    data: data,
  });
};

const apiErrorResponse = (res, status, message, statusCode, data = {}) => {
  return res.status(statusCode).json({
    status: status,
    statusCode: statusCode,
    message: message,
    error: data,
  });
};

module.exports = {
  apiSuccessResponse,
  apiErrorResponse,
};
