import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IFlight } from '../domain layer/flight.interface';

//This is a infrastructure implementation of the flight.
//made with TypeORM
@Entity()
export class FlightEntity extends BaseEntity implements IFlight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  origin: string;

  @Column({
    nullable: false,
  })
  destination: string;

  @Column({
    nullable: false,
  })
  datetime: Date;

  @Column({
    type: 'decimal',
    scale: 2,
    nullable: false,
  })
  price: number;

  @Column({
    nullable: false,
    type: 'int',
  })
  duration: number;

}
