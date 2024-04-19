import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './entities/user.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
})
export class AuthModule {

}
