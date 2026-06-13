"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
const incidente_service_1 = require("./services/incidente.service");
const rl = (0, readline_1.createInterface)({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise(res => rl.question(q, res));
async function main() {
    const op = await ask("1 crear  2 actualizar  3 ver\n> ");
    if (op === "1") {
        const titulo = await ask("titulo: ");
        const descripcion = await ask("descripcion: ");
        const reportadoPor = await ask("reportado por: ");
        const prioridad = await ask("prioridad (Alta/Media/Baja): ");
        const inc = (0, incidente_service_1.crearIncidente)({ titulo, descripcion, reportadoPor, prioridad: prioridad });
        console.log("creado con id:", inc.id);
    }
    else if (op === "2") {
        const id = parseInt(await ask("id: "));
        const estado = await ask("estado (Abierto/En Progreso/Resuelto): ");
        const prioridad = await ask("prioridad (Alta/Media/Baja): ");
        const r = (0, incidente_service_1.actualizarIncidente)(id, { estado: estado, prioridad: prioridad });
        console.log(r ?? "no encontrado");
    }
    else if (op === "3") {
        console.log((0, incidente_service_1.obtenerIncidentes)());
    }
    rl.close();
}
main();
//# sourceMappingURL=index.js.map