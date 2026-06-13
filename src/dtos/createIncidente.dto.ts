import { Prioridad } from '../types/priority.type';

export interface CreateIncidenteDTO {
  titulo: string;
  descripcion: string;
  reportadoPor: string;
  prioridad: Prioridad;
}