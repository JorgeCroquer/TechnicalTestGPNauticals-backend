import { IFlight } from '../domain layer/flight.interface';
import { FlightDTO } from './flight.dto';

export interface IFlightRepository {
  save(flight: IFlight): Promise<void>;

  getFlightById(flightId: number): Promise<FlightDTO>;

  getAll(page: number): Promise<FlightDTO[]>;

  exists(flightId: number): Promise<boolean>;
}
