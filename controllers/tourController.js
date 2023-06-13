/* eslint-disable node/no-unsupported-features/es-syntax */
const Tour = require('../models/tourModel');

// exports.checkBody = (controller) => (req, res) => {
//   const data = req.body;
//   if (!data.price || !data.name) return res.status(400).json({
//     status:'fail',
//     message:'name and price must be not empty'
//   });
//   controller(req, res);
// };
// exports.checkBody = (req, res, next) => {
//   const data = req.body;
//   if (!data.price || !data.name)
//     return res.status(400).json({
//       status: 'fail',
//       message: 'name and price must be not empty',
//     });
//   next();
// };
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  // const newTour=new Tour({
  // })
  // newTour.save()
  try {
    const newTour = await Tour.create(req.body);
    return res.status(201).json({
      status: 'success',
      data: { newTour },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    return res.status(201).json({
      status: 'success',
      data: { tour },
    });
  } catch (err) {
    return res.status(401).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // const result = await query.exec();
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    return res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
