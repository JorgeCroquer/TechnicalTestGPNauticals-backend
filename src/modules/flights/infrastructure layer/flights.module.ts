import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightsService } from '../application layer/flights.service';
import { FlightEntity } from './flight.entity';
import { FlightsController } from './flights.controller';
import { TypeORMFlightRepository } from './typeorm-flight-repo.adapter';

const selectedFlightsRepositoryProvider = {
  provide: 'FlightRepositoryProvider',
  useClass: TypeORMFlightRepository,
};

@Module({
  imports: [TypeOrmModule.forFeature([FlightEntity])],
  providers: [FlightsService, selectedFlightsRepositoryProvider],
  controllers: [FlightsController],
})
export class FlightsModule {}
