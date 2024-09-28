import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Article])], // register the entity with the TypeORM repository
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
