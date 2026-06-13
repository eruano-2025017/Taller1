"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerIncidentes = exports.actualizarIncidente = exports.crearIncidente = void 0;
const incidentesDB = [];
let contadorId = 1;
const crearIncidente = (dto) => {
    const nuevo = {
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
exports.crearIncidente = crearIncidente;
const actualizarIncidente = (id, dto) => {
    const index = incidentesDB.findIndex(inc => inc.id === id);
    if (index === -1)
        return null;
    const actual = incidentesDB[index];
    if (!actual)
        return null;
    const actualizado = {
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
exports.actualizarIncidente = actualizarIncidente;
const obtenerIncidentes = () => {
    return incidentesDB;
};
exports.obtenerIncidentes = obtenerIncidentes;
//# sourceMappingURL=incidente.service.js.map