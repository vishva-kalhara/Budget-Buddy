import dotenv from 'dotenv';
import { createApp } from './app';
// import cors from 'cors';

const app = createApp();

// Enabling PUT, PATCH, DELETE requests
// const corsOptions = {
//   origin: 'http://localhost:5173',
// };
// app.use(cors(corsOptions));

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception! Server is shutting down...');
  console.log(err.name, err.message);
  // console.log(err)
  process.exit(1);
});

dotenv.config({ path: '../configs/.env' });
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// export default server
