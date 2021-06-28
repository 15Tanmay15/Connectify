const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');

const development = {
    name: 'development',
    asset_path: './assets',
    session_cookie_key: process.env.CONNECTIFY_SESSION_COOKIE_KEY,
    db: process.env.CONNECTIFY_DB,
    smtp: {
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.CONNECTIFY_GMAIL_USERNAME,
                pass: process.env.CONNECTIFY_GMAIL_PASSWORD
            }
    },
    google_client_id: process.env.CONNECTIFY_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.CONNECTIFY_GOOGLE_CLIENT_SECRET,
    google_call_back_url: process.env.CONNECTIFY_GOOGLE_CALL_BACK_URL,
    jwt_secret: process.env.CONNECTIFY_JWT_SECRET
}



module.exports = development;