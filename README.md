# PET TINDER

An app to browse dogs available for adoption using an instagram-like frontend UI along with the petfinder API for the backend.

## How to add your mongoDB DB?

-   Follow this [MongoDB Atlas Tutorial](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/)

-   Add your mongoURI to `config/default.json`

## Add your petfinder API and SECRET KEY to `default.json`

-   How to get petfinder API and SECRET KEY? Follow [this link](https://www.petfinder.com/developers/)

## NPM Commands

<code>npm install</code><br/>
Install backend dependencies for the app.
<br/><br/>

<code>npm clientinstall</code><br/>
Install client (frontend) dependencies for the app.
<br/><br/>

<code>npm run start</code><br/>
Starts the server, however any changes made requires to manually restart the server to see changes.
<br/><br/>

<code>npm run server</code><br/>
Start the server and any detected changes made will automatically restart the server.
<br/><br/>

<code>npm run dev</code><br/>
Run both the server and frontend client.
<br/><br/>

#### Things I Learned

Due to `react-router-dom` being updated to v6, for `<Route>`, `component` was replaced with `element`. In order to be able to use `Context.Provider`, the global state, I need to set `element={<someComponent/>}` and **NOT AS** `element={someComponent()}` otherwise `useContext()` will always return undefined for `someComponent`.
