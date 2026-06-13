import { Incidente } from '../models/incidente.interface';
import { CreateIncidenteDTO } from '../dtos/createIncidente.dto';
import { UpdateIncidenteDTO } from '../dtos/updateIncidente.dto';

const incidentesDB: Incidente[] = [];
let contadorId = 1;

export const crearIncidente = (dto: CreateIncidenteDTO): Incidente => {
  const nuevo: Incidente = {
    id: contadorId++,
    titulo: dto.titulo,
    descripcion: dto.descripcion,
    reportadoPor: dto.reportadoPor,
    prioridad: dto.prioridad,
    estado: 'Abierto',
    fechaCreacion: new Date(),
  };
  incidentesDB.push(nuevo);
  return nuevo;
};

export const actualizarIncidente = (
  id: number,
  dto: UpdateIncidenteDTO
): Incidente | null => {
  const index = incidentesDB.findIndex(inc => inc.id === id);
  if (index === -1) return null;
  const actual = incidentesDB[index];
  if (!actual) return null;
  const actualizado: Incidente = {
    id: actual.id,
    titulo: dto.titulo ?? actual.titulo,
    descripcion: dto.descripcion ?? actual.descripcion,
    reportadoPor: dto.reportadoPor ?? actual.reportadoPor,
    prioridad: dto.prioridad ?? actual.prioridad,
    estado: dto.estado ?? actual.estado,
    fechaCreacion: actual.fechaCreacion,
  };
  incidentesDB[index] = actualizado;
  return actualizado;
};

export const obtenerIncidentes = (): readonly Incidente[] => {
  return incidentesDB;
};