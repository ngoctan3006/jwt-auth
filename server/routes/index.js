import authRoutes from './auth.js';

export default function routes(app) {
  app.use('/api/v1/users', authRoutes);
  app.get('/', (req, res) => {
    res.send('App is running!');
  });
}
