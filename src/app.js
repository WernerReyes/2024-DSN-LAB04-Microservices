import express from 'express';
import ClientRouter from './routes/client.route.js';
import ProductRouter from './routes/product.route.js';

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware

// Parse JSON request body
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  console.log('Welcome to the API');
  res.send('Welcome to the API');
});
app.use('/api/clients', ClientRouter);
app.use('/api/products', ProductRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

