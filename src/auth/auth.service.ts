import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}
  IS_AUTHENTICATOR = false;
  login(email: string, password: string) {
    console.log(email, password);
  }
}
