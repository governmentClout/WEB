import express from 'express';
import Loadable from 'react-loadable';


// we'll talk about this in a minute:
import serverRenderer from './middleware/renderer';

const PORT = 3000;
const path = require('path');

// initialize the application and create the routes
const app = express();
const router = express.Router();


// Always route the home page to our router
router.use('^/$', serverRenderer);

// anything else should act as our index page
// react-router will take care of everything

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
  ));
  
router.use('*', serverRenderer);
// tell the app to use the above rules
app.use(router);

// start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('something bad happened', error);
    }
  
    console.log(`server started on http://localhost:${PORT}`);
  });
});