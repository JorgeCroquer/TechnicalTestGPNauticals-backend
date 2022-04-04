import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { flight_type, IFlight } from '../domain layer/flight.interface';

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

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['roundtrip', 'oneway'],
  })
  type: flight_type;
}
