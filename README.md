This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Now What
Okay! So let's get this rockin' and rolling from scratch.

* Make a directory and run `npm install create-react-app`
* Next let's create the repo. `npx create-react-app <app-name> --typescript`. This is when I pushed up my initial commit https://github.com/cilg017/weather-typescript/commit/a21f5351e90f532dafcd73e38200fcb0ac5fbdcb
* Install dependencies 
 `npm install --save react-redux`
 `npm install --save-dev @types/react-redux`
 `npm install --save redux-thunk`
## Store Setup

* We need actions, a reducer, a provider, a store, an app container! See my commit https://github.com/cilg017/weather-typescript/commit/dd516593aba321be4efe9aa800878bb245e4502e

## Component Setup

* Let's set up a couple components that show off some React things.
* Inline styling vs having it as a const in the same file vs importing the css sheet
* Passing props
* See this commit https://github.com/cilg017/weather-typescript/commit/315a288a530ced7d12bae3dc39d1ffe01d19f3b0

## API calls and updating the store

* Have a function that dispatches an action, which calls the reducer, which updates the store with the response from the API
* https://github.com/cilg017/weather-typescript/commit/8f2dc03ddb998701f323d4cf3a0d081ab7840886

**But wait!! You only call the one API to get a single day forecast**
 Fooled you, let's do the last part together!!




