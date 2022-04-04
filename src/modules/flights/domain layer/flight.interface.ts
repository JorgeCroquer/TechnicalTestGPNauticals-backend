export type flight_type = 'roundtrip' | 'oneway';

export interface IFlight {
  id: number;

  origin: string;

  destination: string;

  datetime: Date;

  price: number;

  duration: number;

  type: flight_type;
}
