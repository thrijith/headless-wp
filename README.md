## Headless WordPress with React and [NextJS](https://nextjs.org/)

### Setup / Configuration
* Clone the repo locally.
* Search and replace `siteurl` from `wp.test` to the url of your desired site.
* Run `npm install`.
* Run `npm run build` for production build.
* Run `npm run start` to see the changes as of now at http://localhost:8080. ( You can change port by updating `port` value in [server.js](./server.js) )
* Use `npm run dev` while making changes / updates to the files.

### Additional Info
* [pages](pages) - Files inside this directory will be treated as pages.
* [routes.js](routes.js) - You can define all the routes here.
* [server.js](server.js) - Contains server setup information.
 
### Demo
[![View App Demo](https://i.imgur.com/oKTuuc0.png)](https://vimeo.com/322869705 "View App Demo")

### Credits
Sample demo is built using [this](https://webdevstudios.com/2019/01/03/headless-wordpress-with-react-and-nextjs-1/).
