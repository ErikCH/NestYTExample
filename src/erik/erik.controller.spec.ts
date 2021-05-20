import { Test, TestingModule } from '@nestjs/testing';
import { ErikController } from './erik.controller';

describe('ErikController', () => {
  let controller: ErikController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ErikController],
    }).compile();

    controller = module.get<ErikController>(ErikController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
