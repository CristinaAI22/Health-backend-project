const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./customApi");

class ConflictError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.CONFLICT;
  }
}

module.exports = ConflictError;
