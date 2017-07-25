/**
 * Created by Shweta on 22/6/17.
 * @description: configuration file
 */
const path = require('path');
const packageJSON = require('./package.json');

var APP_DIR = path.join(__dirname, 'src/app');

module.exports = {
    name: packageJSON.name,
    version: packageJSON.version,
    directories: {
        application: APP_DIR,
        publicDir: path.join(__dirname, 'app'),
        images: path.join(__dirname, 'app', 'assets', 'images')
    },
    files: {
        mainHTML: 'index.html',
        favicon: 'favicon.ico'
    },
    /* Uncomment this if you want to use a database
     database: {
     dialect: 'postgres',
     host: 'localhost',
     port: 5432,
     database: 'undefined',
     username: 'postgres',
     password: 'postgres',
     // Options for sequelize
     forceSync: false,
     pool: {
     min: 0,
     max: 10,
     idle: 100
     },
     logLevel: 'verbose'
     },
     */
    logger: {
        levels: ['error', 'warn', 'info', 'verbose', 'html', 'silly'],
        dateFormat: 'isoDateTime'
    },
    ssl: {
        enabled: true,
        key: path.join(__dirname, 'server', 'ssl_key', 'key.pem'),
        cert: path.join(__dirname, 'server', 'ssl_key', 'cert.pem')
    },
    server: {
        port: 8000,
        contextPath: '/',
        routes: {
            '/': 'index'
        },
        assetsPath: {
            images: '/images',
            publicDir: '/'
        },
     /* use it in case we need connection with R
       R: {
            command: 'library(DCO)'
        } */
    },
    session: {
        name: 'lnWizz-session',
        secret: 'session-secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            path: '/'
        }
    },
    bodyParser: {
        json: {
            limit: '10mb'
        },
        text: {
            limit: '10mb'
        },
        urlencoded: {
            extended: true,
            limit: '10mb'
        }
    }
};