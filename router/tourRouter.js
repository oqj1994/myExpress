const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

//自定义middleware

// router.param('id', (req, res, next, val) => {
//   console.log(`Tour id is ${val}`);
//   next();
// });

// router.param('age', (req, res, next, val) => {
//   console.log(`you age is ${val}`);
//   next();
// });
// 当路由带有age 这个查询字符时，会执行这个路由
// router.param('id', tourController.checkID);
// router
//   .route('/')
//   .get(tourController.getAllTours)
//   .post(tourController.checkBody(tourController.createTour));
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);
module.exports = router;
