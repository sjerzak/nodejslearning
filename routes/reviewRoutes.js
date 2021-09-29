/**
 *@swagger
 *paths:
 *  /reviews:
 *    get:
 *      tags:
 *        - Reviews
 *      summary: Get All Reviews
 *      operationId: GetAllReviews
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *    post:
 *      tags:
 *        - Reviews
 *      summary: Create New Review
 *      operationId: CreateNewReview
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateNewReviewRequest'
 *            example:
 *              review: Loved it
 *              rating: 4
 *              tour: 5c88fa8cf4afda39709c2951
 *              user: 5cd14baa326b861fab416f56
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /reviews/{review_id}}:
 *    get:
 *      tags:
 *        - Reviews
 *      summary: Get Review
 *      operationId: GetReview
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /reviews/{updated_review_id}}:
 *    patch:
 *      tags:
 *        - Reviews
 *      summary: Update Review
 *      operationId: UpdateReview
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateReviewRequest'
 *            example:
 *              rating: 5
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /reviews/{del_review_id}:
 *    delete:
 *      tags:
 *        - Reviews
 *      summary: Delete Review
 *      operationId: DeleteReview
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /tours/{tour_id}/reviews:
 *    post:
 *      tags:
 *        - Tours/Reviews
 *      summary: Create New Review on Tour
 *      operationId: CreateNewReviewonTour
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateNewReviewonTourRequest'
 *            example:
 *              rating: 5
 *              review: Amazing
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /tours/{tours_id}/reviews:
 *    get:
 *      tags:
 *        - Tours/Reviews
 *      summary: Get All Reviews on Tour
 *      operationId: GetAllReviewsonTour
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 */

const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewController.deleteReview
  );

module.exports = router;
