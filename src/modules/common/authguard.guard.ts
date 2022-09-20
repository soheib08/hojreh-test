import { Guard, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { Reflector } from '@nestjs/core';

@Guard()
export class AuthguardGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(req, context: ExecutionContext):  boolean | Promise<boolean> | Observable<boolean> {
    
  }
}