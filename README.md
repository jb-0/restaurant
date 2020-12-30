# Restaurant site

This site was built using Gatsby, React and serves up content stored in Contentful CMS. This site includes a home page, menu and blog that can be updated via Contentful, including defining HTML elements such as buttons. The site is responsive and can be used as the basis for creating a real world restaurant site.

## Requirements
You will need to have Node.js installed to run this project, please visit the node site for install
instructions: https://nodejs.org/en/download/

## Installation
Once you have NPM installed you can run the following shell commands to install this project:
```
git clone https://github.com/jb-0/restaurant.git
cd restaurant
npm install
```

## Environment variables
For assigning environment variables in dev I opted to use https://www.npmjs.com/package/dotenv,
however you can use your preferred approach to assigning environment variables. The project is
configured to work with contentful, so if you wish to use as is you will supply the following
from https://www.contentful.com/:
- **CONTENTFUL_SPACE_ID** - The contentful space (where your content is stored)
- **CONTENTFUL_ACCESS_TOKEN** - The secret used to authenticate to the space

## Running the application
To run the app you can execute the following commands in the project root directory:
```
gatsby develop
```

Using your preferred web browser you can navigate to localhost:8000 to view and use the app.