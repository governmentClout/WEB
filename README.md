## Folder Structure

The project should looks like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    logo.png
  src/
    components/
      name-of-component/
        component.css
        component.jsx
    pages/
      page-name.jsx
    index.css
    index.js
    logo.png
    routes.jsx
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

Only files inside `public` can be used from `public/index.html`.<br>

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
