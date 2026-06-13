import { Incidente } from '../models/incidente.interface';
import { CreateIncidenteDTO } from '../dtos/createIncidente.dto';
import { UpdateIncidenteDTO } from '../dtos/updateIncidente.dto';
export declare const crearIncidente: (dto: CreateIncidenteDTO) => Incidente;
export declare const actualizarIncidente: (id: number, dto: UpdateIncidenteDTO) => Incidente | null;
export declare const obtenerIncidentes: () => readonly Incidente[];
//# sourceMappingURL=incidente.service.d.ts.map