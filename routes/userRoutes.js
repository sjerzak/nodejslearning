/**
 *
 *
 *@swagger
 *paths:
 *  /users:
 *    get:
 *      tags:
 *        - Users
 *      summary: Get All Users
 *      operationId: GetAllUsers
 *      parameters:
 *        - name: role
 *          in: query
 *          description: ''
 *          required: true
 *          style: form
 *          explode: true
 *          schema:
 *            type: string
 *            example: user
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /users/{user_id}:
 *    patch:
 *      tags:
 *        - Users
 *      summary: Update User
 *      operationId: UpdateUser
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateUserRequest'
 *            example:
 *              name: Administrator
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /users/{del_user_id}:
 *    delete:
 *      tags:
 *        - Users
 *      summary: Delete User
 *      operationId: DeleteUser
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /users/me:
 *    get:
 *      tags:
 *        - Users
 *      summary: Get Current User
 *      operationId: GetCurrentUser
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /users/updateMe:
 *    patch:
 *      tags:
 *        - Users
 *      summary: Update Current User
 *      operationId: UpdateCurrentUser
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateCurrentUserRequest'
 *            example:
 *              name: Jonas Schmedtmann
 *              role: admin
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /users/deleteMe:
 *    delete:
 *      tags:
 *        - Users
 *      summary: Delete Current User
 *      operationId: DeleteCurrentUser
 *      parameters: []
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /users/signup:
 *    post:
 *      tags:
 *        - Authentication
 *      summary: Sign Up
 *      operationId: SignUp
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SignUpRequest'
 *            example:
 *              name: Jonas
 *              email: jonas@mailsac.com
 *              password: pass1234
 *              passwordConfirm: pass1234
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /users/login:
 *    post:
 *      tags:
 *        - Authentication
 *      summary: Login
 *      operationId: Login
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginRequest'
 *            example:
 *              email: admin@natours.io
 *              password: '{{password}}'
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /users/forgotPassword:
 *    post:
 *      tags:
 *        - Authentication
 *      summary: Forgot Password
 *      operationId: ForgotPassword
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ForgotPasswordRequest'
 *            example:
 *              email: test3@natours.io
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /users/resetPassword/1652bfc347b939d3d19cea352d231d6dbe6dfef0884e68e6c61629019c44b9ca:
 *    patch:
 *      tags:
 *        - Authentication
 *      summary: Reset Password
 *      operationId: ResetPassword
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ResetPasswordRequest'
 *            example:
 *              password: newpassword
 *              passwordConfirm: newpassword
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *  /users/updateMyPassword:
 *    patch:
 *      tags:
 *        - Authentication
 *      summary: Update Current User Password
 *      operationId: UpdateCurrentUserPassword
 *      parameters: []
 *      requestBody:
 *        description: ''
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateCurrentUserPasswordRequest'
 *            example:
 *              passwordCurrent: pass1234
 *              password: newpassword
 *              passwordConfirm: newpassword
 *        required: true
 *      responses:
 *        '200':
 *          description: ''
 *          headers: {}
 *      deprecated: false
 *
 *components:
 *  schemas:
 *    UpdateUserRequest:
 *      title: UpdateUserRequest
 *      required:
 *        - name
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *      example:
 *        name: Administrator
 *    UpdateCurrentUserRequest:
 *      title: UpdateCurrentUserRequest
 *      required:
 *        - name
 *        - role
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        role:
 *          type: string
 *      example:
 *        name: Jonas Schmedtmann
 *        role: admin
 *    SignUpRequest:
 *      title: SignUpRequest
 *      required:
 *        - name
 *        - email
 *        - password
 *        - passwordConfirm
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        passwordConfirm:
 *          type: string
 *      example:
 *        name: Jonas
 *        email: jonas@mailsac.com
 *        password: pass1234
 *        passwordConfirm: pass1234
 *    LoginRequest:
 *      title: LoginRequest
 *      required:
 *        - email
 *        - password
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        password:
 *          type: string
 *      example:
 *        email: admin@natours.io
 *        password: '{{password}}'
 *    ForgotPasswordRequest:
 *      title: ForgotPasswordRequest
 *      required:
 *        - email
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *      example:
 *        email: test3@natours.io
 *    ResetPasswordRequest:
 *      title: ResetPasswordRequest
 *      required:
 *        - password
 *        - passwordConfirm
 *      type: object
 *      properties:
 *        password:
 *          type: string
 *        passwordConfirm:
 *          type: string
 *      example:
 *        password: newpassword
 *        passwordConfirm: newpassword
 *    UpdateCurrentUserPasswordRequest:
 *      title: UpdateCurrentUserPasswordRequest
 *      required:
 *        - passwordCurrent
 *        - password
 *        - passwordConfirm
 *      type: object
 *      properties:
 *        passwordCurrent:
 *          type: string
 *        password:
 *          type: string
 *        passwordConfirm:
 *          type: string
 *      example:
 *        passwordCurrent: pass1234
 *        password: newpassword
 *        passwordConfirm: newpassword
 *  securitySchemes:
 *    httpBearer:
 *      type: http
 *      scheme: bearer
 */

const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);
router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.delete('/deleteMe', userController.deleteMe);

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
