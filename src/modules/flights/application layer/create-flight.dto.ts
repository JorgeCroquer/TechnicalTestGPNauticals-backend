import { ApiProperty } from '@nestjs/swagger';


//DTO to the create flight command
export class CreateFlightDTO {

  @ApiProperty()
  origin: string;

  @ApiProperty()
  destination: string;

  @ApiProperty()
  datetime: Date;

  @ApiProperty()
  price: number;

  @ApiProperty()
  duration: number;

}
