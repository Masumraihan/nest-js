import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  return {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    synchronize: process.env.DB_SYNC === 'true',
    autoLoadEntities: process.env.DB_AUTO_LOAD === 'true',
  };
});
