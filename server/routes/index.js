import authRoutes from './auth';
import studentRoutes from './student';
import teacherRoutes from './teacher';
import classRoutes from './class';

export default function routes(app) {
  app.use('/api/v1/users', authRoutes);
  app.use('/api/v1/teachers', teacherRoutes);
  app.use('/api/v1/students', studentRoutes);
  app.use('/api/v1/class', classRoutes);
  app.get('/', (req, res) => {
    res.send('App is running!');
  });
}
