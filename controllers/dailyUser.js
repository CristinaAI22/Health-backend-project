const { StatusCodes } = require("http-status-codes");
const DailyUserInfo = require("../models/dailyUserInfo");
const { UnauthenticatedError, BadRequestError } = require("../errors");

const addProduct = async (req, res) => {
  const user = req.user;
  const dailyProduct = req.body;
  const newUserInfo = await DailyUserInfo.create({
    owner: user._id,
    ...dailyProduct,
  });
  return res.status(StatusCodes.OK).json({ dailyUserInfo: newUserInfo });
};

const deleteProduct = async (req, res) => {
  const { _id } = req.user;
  const productId = req.params.productId;
  const product = await DailyUserInfo.findById(productId);
  if (!product) {
    throw new BadRequestError(`The provided id does not exist!`);
  }
  if (!product.owner._id.equals(_id)) {
    throw new UnauthenticatedError(
      `The provided id does not correspond to the current user`
    );
  }
  const deletedProduct = await DailyUserInfo.findByIdAndDelete(productId);
  res.status(StatusCodes.OK).json({ msg: "product removed", deletedProduct });
};

const getDailyInfo = async (req, res) => {
  const { _id } = req.user;
  const { date } = req.params;

  if (!date) {
    throw new BadRequestError("date parameter required!");
  }

  const formattedDate = new Date(date);
  if (isNaN(formattedDate)) {
    throw new BadRequestError("invalid date format");
  }
  const dailyInfo = await DailyUserInfo.find({
    owner: _id,
    date: formattedDate.toISOString().split("T")[0],
  });
  res.status(StatusCodes.OK).json({ dailyInfo });
};

module.exports = { addProduct, deleteProduct, getDailyInfo };
