import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from 'test/mockRepository';
import { MockType } from 'test/mockType';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  //let repositoryMock: MockType<Repository<UsersEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UsersEntity),
          useClass: Repository,
          //useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    //repositoryMock = module.get(getRepositoryToken(UsersEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
