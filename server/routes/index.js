import authRoutes from './auth';
import classRoutes from './class';
import studentRoutes from './student';
import teacherRoutes from './teacher';

export default function routes(app) {
  app.use('/api/v1/users', authRoutes);
  app.use('/api/v1/class', classRoutes);
  app.use('/api/v1/students', studentRoutes);
  app.use('/api/v1/teachers', teacherRoutes);
  app.get('/', (req, res) => {
    res.send('App is running!');
  });
}
