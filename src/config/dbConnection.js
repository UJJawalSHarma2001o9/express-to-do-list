const { Sequelize } = require("sequelize");
dotenv = require("dotenv");
dotenv.config();

const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_DATABASE_NAME;


const dbConnection = async () => {
  const sequelize = new Sequelize(DB_NAME, USERNAME, PASSWORD, {
    host: HOST,
    port: PORT , 
    dialect: "mysql",
   
  });
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { dbConnection };
