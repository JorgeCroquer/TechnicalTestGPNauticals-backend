import { flight_type } from '../domain layer/flight.interface';

export class FlightDTO {
  id: number;
  origin: string;
  destination: string;
  datetime: Date;
  price: number;
  duration: number;
  type: flight_type;
}
