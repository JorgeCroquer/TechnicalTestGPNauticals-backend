import { Inject, Injectable } from '@nestjs/common';
import { CreateFlightDTO } from './create-flight.dto';
import { FlightDTO } from './flight.dto';
import { IFlightRepository } from './flight.repo';

@Injectable()
export class FlightsService {
  constructor(
    //This receives a implementation flightRepository by DI
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

  //This methods gets all flights of the page provided 
  //from the persistence layer
  async getFlights(page: number): Promise<FlightDTO[]> {
    return await this.flightRepository.getAll(page);
  }
}
