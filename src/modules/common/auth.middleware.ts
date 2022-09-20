import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class AuthMiddleware implements NestMiddleware {
  resolve(name: string): ExpressMiddleware {
    return (req, res, next) => {
      next();
    };
 }
}