import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/article/article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article])], // register the entity with the TypeORM repository
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
