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
import { FlightDTO } from '../application layer/flight.dto';
import { FlightsService } from '../application layer/flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post()
  @HttpCode(201)
  async createFlight(@Body() flight: FlightDTO): Promise<void> {
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
