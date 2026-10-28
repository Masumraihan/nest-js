import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { type ConfigType } from '@nestjs/config';
import authConfig from 'src/config/auth.config';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,

    @Inject(authConfig.KEY)
    private readonly authConfiguration: ConfigType<typeof authConfig>,
  ) {}
  IS_AUTHENTICATOR = false;
  login(email: string, password: string) {
    console.log(email, password, this.authConfiguration);
  }
}
