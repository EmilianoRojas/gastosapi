import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity'; // Adjust the import path as necessary
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const transaction = this.transactionRepository.create(createTransactionDto);
    return this.transactionRepository.save(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find();
  }

  async findOne(id: number): Promise<Transaction> {
    return this.transactionRepository.findOne({
      where: { id: id }
    });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    await this.transactionRepository.update(id, updateTransactionDto);
    return this.transactionRepository.findOne({
      where: { id: id }
    });
  }

  async remove(id: number): Promise<void> {
    await this.transactionRepository.delete(id);
  }
}
