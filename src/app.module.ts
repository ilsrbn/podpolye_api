import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { dataSourceOptions } from 'db/datasource';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { AttachmentModule } from './attachment/attachment.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AccountModule,
    AuthModule,
    PostModule,
    AttachmentModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'client', 'dist'),
    }),
    MulterModule.register({
      dest: './public',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
