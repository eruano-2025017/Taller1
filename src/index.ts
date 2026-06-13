import { createInterface } from "readline";
import { crearIncidente, actualizarIncidente, obtenerIncidentes } from "./services/incidente.service";

const rl = createInterface({ input: process.stdin, output: process.stdout });
const ask = (q: string) => new Promise<string>(res => rl.question(q, res));

async function main() {
  const op = await ask("1 crear  2 actualizar  3 ver\n> ");

  if (op === "1") {
    const titulo       = await ask("titulo: ");
    const descripcion  = await ask("descripcion: ");
    const reportadoPor = await ask("reportado por: ");
    const prioridad    = await ask("prioridad (Alta/Media/Baja): ");
    const inc = crearIncidente({ titulo, descripcion, reportadoPor, prioridad: prioridad as any });
    console.log("creado con id:", inc.id);

  } else if (op === "2") {
    const id       = parseInt(await ask("id: "));
    const estado   = await ask("estado (Abierto/En Progreso/Resuelto): ");
    const prioridad = await ask("prioridad (Alta/Media/Baja): ");
    const r = actualizarIncidente(id, { estado: estado as any, prioridad: prioridad as any });
    console.log(r ?? "no encontrado");

  } else if (op === "3") {
    console.log(obtenerIncidentes());
  }

  rl.close();
}

main();