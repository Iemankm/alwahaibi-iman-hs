const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc');




const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Library API",
        version: '1.0.0',
      },
    },
    apis: ["swagger.js"],
  };
  
  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  
  

  /**
   * @swagger
   * /blogs:
   *   get:
   *     description: Get all blogs
   *     responses:
   *       202:
   *         description: Success
   * 
   */
   app.get('/blogs', (req, res) => {
    res.send([
      {
        id: 1,
        BlogTitle: "Blog01",
        Detailes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      }
    ])
  });
  
  /**
   * @swagger
   * /blogs:
   *   post:
   *     description: Get all blogs
   *     parameters:
   *      - name: BlogTitle
   *        description: blog title
   *        in: formData
   *        required: true
   *        type: string
   *      - name: details
   *        description: blog
   *        in: formData
   *        required: true
   *        type: string
   *     responses:
   *       203:
   *         description: Created
   */
  app.post('/blogs', (req, res) => {
    res.status(203).send();
  });
  
