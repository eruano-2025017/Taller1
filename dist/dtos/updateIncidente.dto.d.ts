import { Prioridad } from '../types/priority.type';
import { EstadoIncidente } from '../types/incidentStatus.type';
export interface UpdateIncidenteDTO {
    titulo?: string;
    descripcion?: string;
    reportadoPor?: string;
    prioridad?: Prioridad;
    estado?: EstadoIncidente;
}
//# sourceMappingURL=updateIncidente.dto.d.ts.map