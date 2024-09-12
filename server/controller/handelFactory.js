const { catchAsync } = require("../utils/catchAsync");
const { AppError } = require("../utils/AppError");
exports.getAll = (model) =>
  catchAsync(async (req, res, next) => {
    const doc = await model.find();

    res.status(200).json({
      status: "success",
      result: doc.length,
      data: {
        doc,
      },
    });
  });
exports.createtOne = (model) =>
  catchAsync(async (req, res, next) => {
    const doc = await model.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
exports.getOne = (model) =>
  catchAsync(async (req, res, next) => {
    const doc = await model.findById(req.params.id);
    if (!doc) {
      return next(new AppError("no doc for this id", 404));
    }
    res.status(200).json({
      status: "success",
      result: doc.length,
      data: {
        doc,
      },
    });
  });
exports.upatetOne = (model) =>
  catchAsync(async (req, res, next) => {
    const doc = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError("no doc for this id", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
exports.deleteOne = (model) =>
  catchAsync(async (req, res, next) => {
    const doc = await model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("no doc for this id", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
