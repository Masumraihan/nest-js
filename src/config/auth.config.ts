import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => {
  return {
    sharedSecret: process.env.SECRET_KEY,
  };
});
