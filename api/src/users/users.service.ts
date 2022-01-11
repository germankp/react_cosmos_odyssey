import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    let userCount: number;
    try {
      userCount = await this.usersRepository.count();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    if (userCount > 15) {
      try {
        await this.usersRepository.query(
          'DELETE FROM user WHERE id IN (SELECT id FROM user LIMIT 1)',
        );
      } catch (error) {
        throw new InternalServerErrorException(error);
      }
    }

    let user: User;
    try {
      user = await this.usersRepository.create(dto).save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return user;
  }

  async findAll(): Promise<User[]> {
    let users: User[];
    try {
      users = await this.usersRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return users;
  }
}
