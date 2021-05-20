import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
  Response,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { Albums } from './entities/album.entity';
import { AlbumInterface } from './interfaces/album.interface';

@ApiTags('albums')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({ type: Albums, isArray: true })
  @Get()
  findAll(): AlbumInterface[] {
    return this.appService.findAll();
  }

  @Get(':id')
  getAlbumById(@Param('id', ParseIntPipe) id: number): Albums {
    return this.appService.findOne(id);
  }

  @ApiNoContentResponse({ type: Albums })
  @ApiBadRequestResponse()
  @HttpCode(204)
  @Post()
  async create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.appService.create(createAlbumDto);
  }
}
