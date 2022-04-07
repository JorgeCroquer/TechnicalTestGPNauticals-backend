import { ApiProperty } from '@nestjs/swagger';


//DTO to send flight info
export class FlightDTO {
  @ApiProperty()
  id: number;

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
