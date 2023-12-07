import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { TransactionsModule } from './transactions/transactions.module';
import { Transaction } from './transactions/entities/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.tmnuzfepvjtuxvndewwo.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'Salomon281213*.',
      database: 'postgres',
      entities: [Category, Transaction],
      // synchronize: true,
    }),
    CategoriesModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
