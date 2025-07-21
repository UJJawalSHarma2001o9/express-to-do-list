const app = require('./app');
const dotenv = require('dotenv');
const { dbConnection } = require('./config/config');
dotenv.config();

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  dbConnection();
});


process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err.message);
  process.exit(1);
});
