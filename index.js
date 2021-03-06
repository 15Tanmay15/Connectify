const express = require('express');
require('dotenv').config()
const env = require('./config/environment');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./config/passport-jwt-strategy');
const passportGoogle = require('./config/passport-google-oauth2-strategy');

// const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const customMware = require('./config/middleware');
const MongoStore = require('connect-mongo');
// setup the chat server to be used with socket.io
const chatServer = require('http').Server(app);
const chatSockets = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(5000);
// console.log('chat Server is listening on port:', 5000);
const path = require('path');



// app.use(sassMiddleware({
//     src: path.join(__dirname, env.asset_path, 'scss'),
//     dest: path.join(__dirname, env.asset_path, 'css'),
//     debug: true,
//     outputStyle: 'expanded',
//     prefix: '/css'
// }))

app.use(express.static('./assets'));

// make the upload path available to he browser
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(expressLayouts);
app.use(express.urlencoded());
app.use(cookieParser());

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongostore is used to store the session cookie in the db
app.use(session({
    name: 'connectify',
    // TODO change secret before deployment in production mode
    secret: env.session_cookie_key,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
    // store: MongoStore.create(
    //     {
    //     mongoUrl: `mongodb://localhost:27017/${env.db}`,
    //     autoRemove: "disabled"
    // },
    // (err) => {
    //     console.log(err || 'connect-mongodb setup ok')
    // }
    // )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);
//use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in setting up the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`)
});