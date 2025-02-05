const CustomAPIError = require("./customApi");
const UnauthenticatedError = require("./unauthenticated");
const NotFoundError = require("./notFound");
const BadRequestError = require("./badRequest");
const ConflictError = require("./conflict");

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError,
  ConflictError,
};
