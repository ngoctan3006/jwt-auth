import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connection from './database';
import routes from './routes';

dotenv.config();

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

routes(app);

// Connect to MySQL
const PORT = process.env.PORT || 5000;
connection.connect((error) => {
  if (error) {
    console.log(error.message);
  } else {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
});
