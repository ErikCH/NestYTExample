import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateAlbumDto {
  @ApiProperty({
    description: 'Name of artist',
    type: 'string',
  })
  @IsAlphanumeric()
  @MaxLength(5)
  name: string;
  @ApiProperty()
  artist: string;
}
