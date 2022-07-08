import { NestFactory } from '@nestjs/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { AppModule } from './app.module';
//import * as cookieSession from 'cookie-parser';


// const cookieSession =require('cookie-session')

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.use(cookieSession({
  //   keys:['secretkey']
  // }))
  app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();
