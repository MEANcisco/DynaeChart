export interface DatosEvo {
  id: number;
  calculatedIndexTypeId: number;
  magnitude: number;
  from: Date;
  to: string;
}

export interface DatoPrincEvo{
  indexDetail: Array<DatosEvo>;
  sum: number;
  avg: number;

}
