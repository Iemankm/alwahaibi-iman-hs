import Application from './app'
import App from './app'
import database from './database'

//starting the server
database();
const app = new App();

app.start();