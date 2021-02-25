## Installation

Fetch the repository and run `npm install` or `yarn` and install all dependencies.

Also you will need to configure the [https://openweathermap.org/api](api) and generate api key.
Remember to create .env file based on .env.example. The values declared there will be used in the code.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Future features

1. I plan to add dark mode to the app. It will be smoothly handled by tailwind.
2. Browser Geolocalization API could be used to pre-fill the search input for the user. This will require asking for a permission to the user localization.
3. Improving error handling for search.
4. Code tests coverage increase - react-testing-library should be used for basic tests of components. Also Cypress will be used for end-to-end testing.
5. Progressive app support and properly caching values for maximum 3 hours.
