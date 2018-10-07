/**
 * @swagger
 * resourcePath: /api/auth
 * description: Auth operations
 */

/**
 * @swagger
 * path: /api/auth
 * operations:
 *   -  httpMethod: GET
 *      summary: Display details for a specific User.
 *      responseClass: User
 *      nickname: get-user
 *      parameters:
 *        - name: user_id
 *          description: Id of user.
 *          paramType: path
 *          required: true
 *          dataType: string
 */

/**
 * @swagger
 * path: /api/auth
 * operations:
 *   -  httpMethod: POST
 *      summary: Log in User
 *      notes: Log in User
 *      nickname: post-session
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: username
 *          description: Username for User
 *          paramType: body
 *          required: true
 *          dataType: string
 *        - name: password
 *          description: Secret for user session
 *          paramType: body
 *          required: true
 *          dataType: string
 */

/**
 * @swagger
 * path: /api/auth
 * operations:
 *   -  httpMethod: DELETE
 *      summary: Delete some User.
 *      responseClass: User
 *      nickname: delete-user
 */
