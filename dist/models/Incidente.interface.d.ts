import { Prioridad } from '../types/priority.type';
import { EstadoIncidente } from '../types/incidentStatus.type';
export interface Incidente {
    readonly id: number;
    titulo: string;
    descripcion: string;
    reportadoPor: string;
    prioridad: Prioridad;
    estado: EstadoIncidente;
    fechaCreacion: Date;
}
//# sourceMappingURL=incidente.interface.d.ts.map