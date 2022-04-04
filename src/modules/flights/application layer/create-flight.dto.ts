import { flight_type } from '../domain layer/flight.interface';

export class CreateFlightDTO {
  origin: string;
  destination: string;
  datetime: Date;
  price: number;
  duration: number;
  type: flight_type;
}
