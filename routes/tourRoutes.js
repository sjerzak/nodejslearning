/**
 *
 *
 *@swagger
 *paths:
 *  /tours:
 *    get:
 *      tags:
 *        - Tours
 *      summary: Get All Tours
 *      description: Use this endpoint to create a new tour.
 *      operationId: GetAllTours
 *      parameters:
 *        - name: duration[gte]
 *          in: query
 *          description: Query for tour duration. Supports gte, lte, gt, lt operators.
 *          required: true
 *          style: form
 *          explode: true
 *          schema:
 *            type: integer
 *            format: int32
 *            example: 7
 *        - name: sort
 *          in: query
 *          description: ''
 *          required: true
 *          style: form
 *          explode: true
 *          schema:
 *            type: string
 *            example: price
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *    post:
 *      tags:
 *        - Tours
 *      summary: Create New Tour
 *      operationId: CreateNewTour
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateNewTourRequest'
 *            example:
 *              name: New Test Tour
 *              duration: 1
 *              maxGroupSize: 1
 *              difficulty: easy
 *              price: 200
 *              summary: Test tour
 *              imageCover: tour-3-cover.jpg
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /tours/{tour_id}:
 *    get:
 *      tags:
 *        - Tours
 *      summary: Get Tour
 *      operationId: GetTour
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /tours/{modified_tour_id}:
 *    patch:
 *      tags:
 *        - Tours
 *      summary: Update Tour
 *      operationId: UpdateTour
 *      parameters:
 *        - name: Content-Type
 *          in: header
 *          description: ''
 *          required: true
 *          style: simple
 *          schema:
 *            type: string
 *            example: application/json
 *      requestBody:
 *        content:
 *          application/x-www-form-urlencoded:
 *            encoding: {}
 *            schema:
 *              required:
 *                - imageCover
 *                - images
 *                - price
 *              type: object
 *              properties:
 *                imageCover:
 *                  type: string
 *                images:
 *                  type: string
 *                price:
 *                  type: integer
 *                  format: int32
 *                  example: 997
 *        required: false
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /tours/{del_tour_id}:
 *    delete:
 *      tags:
 *        - Tours
 *      summary: Delete Tour
 *      operationId: DeleteTour
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /tours/top-5-cheap:
 *    get:
 *      tags:
 *        - Tours
 *      summary: Get Top 5 Cheap Tours
 *      operationId: GetTop5CheapTours
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /tours/monthly-plan/2021:
 *    get:
 *      tags:
 *        - Tours
 *      summary: Get Monthly Plan
 *      operationId: GetMonthlyPlan
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /tours/tour-stats:
 *    get:
 *      tags:
 *        - Tours
 *      summary: Get Tour Stats
 *      operationId: GetTourStats
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /tours/tours-within/200/center/34.111745,-118.113491/unit/mi:
 *    get:
 *      tags:
 *        - Tours
 *      summary: Get Tours Within Radius
 *      operationId: GetToursWithinRadius
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /tours/distances/34.111745,-118.113491/unit/mi:
 *    get:
 *      tags:
 *        - Tours
 *      summary: Get Distances to Tours From Point
 *      operationId: GetDistancestoToursFromPoint
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *components:
 *  schemas:
 *    CreateNewTourRequest:
 *      title: CreateNewTourRequest
 *      required:
 *        - name
 *        - duration
 *        - maxGroupSize
 *        - difficulty
 *        - price
 *        - summary
 *        - imageCover
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        duration:
 *          type: integer
 *          format: int32
 *        maxGroupSize:
 *          type: integer
 *          format: int32
 *        difficulty:
 *          type: string
 *        price:
 *          type: integer
 *          format: int32
 *        summary:
 *          type: string
 *        imageCover:
 *          type: string
 *      example:
 *        name: New Test Tour
 *        duration: 1
 *        maxGroupSize: 1
 *        difficulty: easy
 *        price: 200
 *        summary: Test tour
 *        imageCover: tour-3-cover.jpg
 */

const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();

// router.param('id', tourController.checkID);

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews

router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    tourController.getMonthlyPlan
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);
// /tours-within?distance=233&center=-40,45&unit=mi
// /tours-within/233/center/-40,45/unit/mi

router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.createTour
  );

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour
  );

module.exports = router;
