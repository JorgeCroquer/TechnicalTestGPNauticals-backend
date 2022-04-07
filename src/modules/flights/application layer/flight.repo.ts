import { IFlight } from '../domain layer/flight.interface';
import { FlightDTO } from './flight.dto';

//Application port to be adapted by any persistence layer implementation
export interface IFlightRepository {

  //Use it to save a flight in the persistence system
  save(flight: IFlight): Promise<void>;

  //Use it to get a Flight by its ID from the persistence system
  getFlightById(flightId: number): Promise<FlightDTO>;

  //Use it to get all flights from the persistence system (Paginated)
  getAll(page: number): Promise<FlightDTO[]>;

  //Use to check if a flight exists in the persistence system
  exists(flightId: number): Promise<boolean>;
}
