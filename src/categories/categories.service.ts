import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    // Implementation to create a new category
    const newCategory = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(newCategory);
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    return this.categoryRepository.findOne({
      where: { id: id }
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    // Implementation to update a category
    await this.categoryRepository.update(id, updateCategoryDto);
    return this.categoryRepository.findOne({
      where: { id: id }
    });
  }

  async remove(id: number) {
    // Implementation to remove a category
    await this.categoryRepository.delete(id);
    return { deleted: true, id };
  }
}
