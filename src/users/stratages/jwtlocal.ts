import { CanActivate, ExecutionContext,Injectable } from "@nestjs/common";

import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class Jwtlocal extends AuthGuard('jwt') {

    
}