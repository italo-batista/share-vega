/**
 * @swagger
 * resourcePath: /api/visualization
 * description: Visualization operations
 */

/**
 * @swagger
 * path: /api/visualization
 * operations:
 *   -  httpMethod: GET
 *      summary: Display list of all Visualizations.
 *      responseClass: Visualization
 *      nickname: index-visualizations
 */

/**
 * @swagger
 * path: /api/visualization/{visualization_id}
 * operations:
 *   -  httpMethod: GET
 *      summary: Display details for a specific Visualization.
 *      responseClass: Visualization
 *      nickname: get-visualization
 *      parameters:
 *        - name: visualization_id
 *          description: Id of visualization.
 *          paramType: path
 *          required: true
 *          dataType: string
 */

/**
 * @swagger
 * path: /api/visualization
 * operations:
 *   -  httpMethod: POST
 *      summary: Post a new Visualization
 *      notes: Returns new Visualization
 *      responseClass: Visualization
 *      nickname: post-visualizations
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: creator
 *          description: User who wrote vis
 *          paramType: body
 *          required: true
 *          dataType: ObjectId
 *        - name: gist_link
 *          description: Url for vis in gist
 *          paramType: body
 *          required: true
 *          dataType: string
 */

/**
 * @swagger
 * path: /api/visualization
 * operations:
 *   -  httpMethod: PUT
 *      summary: Post a new Visualization
 *      notes: Returns new Visualization
 *      responseClass: Visualization
 *      nickname: put-visualizations
 *      consumes:
 *        - application/json
 *      parameters:
 *        - name: visualization_id
 *          description: Id of visualization.
 *          paramType: path
 *          required: true
 *          dataType: string
 *        - name: creator
 *          description: User who wrote vis
 *          paramType: body
 *          required: false
 *          dataType: ObjectId
 *        - name: gist_link
 *          description: Url for vis in gist
 *          paramType: body
 *          required: false
 *          dataType: string
 */

/**
 * @swagger
 * path: /api/visualization/{visualization_id}
 * operations:
 *   -  httpMethod: DELETE
 *      summary: Delete some Visualization.
 *      responseClass: Visualization
 *      nickname: delete-visualization
 *      parameters:
 *        - name: visualization_id
 *          description: Id of visualization to delete
 *          paramType: path
 *          required: true
 *          dataType: ObjectId
 */

/**
 * @swagger
 * models:
 *   Visualization:
 *     id: Visualization
 *     properties:
 *       creator:
 *         type: ObjectId
 *         required: true
 *       gist_link:
 *         type: String
 *         required: true
 *       dateCreated:
 *         type: Date
 *       dateLastUpdate:
 *         type: Date
 *       forkedBy:
 *         type: Array
 * */
