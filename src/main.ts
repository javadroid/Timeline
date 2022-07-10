import { NestFactory } from '@nestjs/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(
    session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000}
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  
  app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();
