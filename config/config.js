module.exports = {
 "development": {
   "username": "gallery_user",
   "password": null,
   "database": "gallery_development",
   "host": "127.0.0.1",
   "dialect": "postgres"
 },
 "test": {
   "username": "gallery_user",
   "password": null,
   "database": "gallery_test",
   "host": "127.0.0.1",
   "dialect": "postgres"
 },
 "production": {
   "username": process.env.USERNAME,
   "password": process.env.PASSWORD,
   "database": process.env.DATABASE,
   "host": process.env.DATABASE_URL,
   "dialect": process.env.DIALECT
 }
};