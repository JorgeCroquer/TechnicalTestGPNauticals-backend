import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFlightDTO } from '../application layer/create-flight.dto';
import { FlightDTO } from '../application layer/flight.dto';
import { FlightsService } from '../application layer/flights.service';

@ApiTags('flights')
@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post()
  @HttpCode(201)
  async createFlight(@Body() flight: CreateFlightDTO): Promise<void> {
    try {
      await this.flightsService.createFlight(flight);
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @HttpCode(200)
  async getAllFlights(@Query('page') page: number): Promise<FlightDTO[]> {
    try {
      return await this.flightsService.getFlights(page);
    } catch (error) {
      console.error(error);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
