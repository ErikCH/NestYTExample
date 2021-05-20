import { ApiProperty } from '@nestjs/swagger';

export class Albums {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  artist: string;
}
