const sendSuccessResponse = (res, statusCode = 200, message = 'Success', data = null) => {
  const response = {
    success: true,
    message
  };
  
  if (data) {
    response.data = data;
  }
  
  return res.status(statusCode).json(response);
};

const sendErrorResponse = (res, statusCode = 500, message = 'Server error', error = null) => {
  const response = {
    success: false,
    message
  };
  
  if (error && process.env.NODE_ENV === 'development') {
    response.error = error;
  }
  
  return res.status(statusCode).json(response);
};

module.exports = { sendSuccessResponse, sendErrorResponse };