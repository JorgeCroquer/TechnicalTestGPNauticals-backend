import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlightDTO } from '../application layer/flight.dto';
import { IFlightRepository } from '../application layer/flight.repo';
import { IFlight } from '../domain layer/flight.interface';
import { FlightEntity } from './flight.entity';

export class TypeORMFlightRepository implements IFlightRepository {
  constructor(
    @InjectRepository(FlightEntity)
    private readonly flightORM: Repository<FlightEntity>,
  ) {}

  async save(flight: IFlight): Promise<void> {
    await this.flightORM.save(flight);
  }
  async getFlightById(flightId: number): Promise<FlightDTO> {
    const ormFlight = await this.flightORM.findOne(flightId);
    return {
      id: ormFlight.id,
      origin: ormFlight.origin,
      destination: ormFlight.destination,
      datetime: ormFlight.datetime,
      price: ormFlight.price,
      duration: ormFlight.duration,
      type: ormFlight.type,
    };
  }
  async getAll(page: number): Promise<FlightDTO[]> {
    const perPage = 10;
    const offset: number = page ? (page - 1) * perPage : 0;

    return await this.flightORM.find({
      skip: offset,
      take: perPage,
    });
  }
  async exists(flightId: number): Promise<boolean> {
    const ormFlight = await this.flightORM.findOne(flightId);
    return !!ormFlight;
  }
}
