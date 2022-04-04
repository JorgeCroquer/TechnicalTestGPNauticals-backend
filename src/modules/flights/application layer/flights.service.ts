import { Inject, Injectable } from '@nestjs/common';
import { CreateFlightDTO } from './create-flight.dto';
import { FlightDTO } from './flight.dto';
import { IFlightRepository } from './flight.repo';

@Injectable()
export class FlightsService {
  constructor(
    @Inject('FlightRepositoryProvider')
    private readonly flightRepository: IFlightRepository,
  ) {}

  //This method use the flightRepository to create a new flight in the
  //persistence layer.
  async createFlight(dto: CreateFlightDTO): Promise<void> {
    const flight = {
      id: undefined,
      origin: dto.origin,
      destination: dto.destination,
      datetime: dto.datetime,
      price: dto.price,
      duration: dto.duration,
      type: dto.type,
    };

    await this.flightRepository.save(flight);
  }

  async getFlights(page: number): Promise<FlightDTO[]> {
    return await this.flightRepository.getAll(page);
  }
}
