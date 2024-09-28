import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nurbek',
      password: '',
      database: 'blog_db',
      autoLoadEntities: true, // load entities automatically from provided modules
      synchronize: true,
    }),
    ArticleModule,
    UserModule,
  ],
})
export class AppModule {}
