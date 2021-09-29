/**
 *@swagger
 *paths:
 *  /bookings:
 *    get:
 *      tags:
 *        - Bookings
 *      summary: Get All Bookings
 *      operationId: GetAllBookings
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /bookings/{booking_id}:
 *    get:
 *      tags:
 *        - Bookings
 *      summary: Get Booking
 *      operationId: GetBooking
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 */

const express = require('express');
const bookingController = require('./../controllers/bookingController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.get('/checkout-session/:tourId', bookingController.getCheckoutSession);

router.use(authController.restrictTo('admin', 'lead-guide'));

router
  .route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
