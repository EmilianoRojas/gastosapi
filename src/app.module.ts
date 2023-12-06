import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.tmnuzfepvjtuxvndewwo.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'your_password',
      database: 'postgres',
      entities: [/* your entities here */],
      synchronize: true,
    }),
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
