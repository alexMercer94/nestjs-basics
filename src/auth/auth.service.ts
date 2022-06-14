import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  public signup() {
    return { msg: 'I`m signed up' };
  }

  public signin() {
    return { msg: 'I`m signin up' };
  }
}
