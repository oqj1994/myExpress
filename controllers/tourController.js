const config = require('../config');
const fs = require('fs');
const readFile = (name) =>
  fs.readFileSync(`${config.FILE_PATH}${name}`, 'utf-8');
const toursData = readFile('/tours-simple.json');
const tours = JSON.parse(toursData);

exports.checkID = (req, res, next, val) => {
  if (!tours.some((t) => t.id === +val))
    return res.status(404).json({
      status: `fail`,
      message: 'Invalid ID',
    });
  req.tourID = req.params.id * 1;
  next();
};
// exports.checkBody = (controller) => (req, res) => {
//   const data = req.body;
//   if (!data.price || !data.name) return res.status(400).json({
//     status:'fail',
//     message:'name and price must be not empty'
//   });
//   controller(req, res);
// };
exports.checkBody = (req, res, next) => {
  const data = req.body;
  if (!data.price || !data.name)
    return res.status(400).json({
      status: 'fail',
      message: 'name and price must be not empty',
    });
  next();
};
exports.getAllTours = (req, res) => {
  return res.status(200).json({
    status: 'success',
    requestTime: req.requestTime,
    result: tours.length,
    data: {
      tours,
    },
  });
};

exports.createTour = (req, res) => {
  // console.log(req.body);
  const newID = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newID }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${config.FILE_PATH}/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      //status code 201 stand for create a new resourses success
      if (!err)
        return res.status(201).json({
          status: 'success',
          data: {
            tour: newTour,
          },
        });

      res.status(500).json({
        status: 'create tour failed',
      });
    }
  );
};

exports.getTour = (req, res) => {
  const tour = tours.find((t) => t.id === req.tourID);
  return res.status(201).json({
    status: 'success',
    data: { tour },
  });
};

exports.updateTour = (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: {
      tour: `<Update tour here>`,
    },
  });
};

exports.deleteTour = (req, res) => {
  const index = tours.findIndex((tour) => tour.id === req.tourID);
  tours.splice(index, 1);
  return res.status(204).json({
    status: 'success',
    data: null,
  });
};
