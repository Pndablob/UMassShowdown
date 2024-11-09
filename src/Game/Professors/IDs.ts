import ProfessorTemplate from "../ProfessorTemplate";
import Anderson0 from "./Anderson0";

const map = new Map<number, ProfessorTemplate>();
map.set(0, Anderson0);

export function getProfFromID(id: number): ProfessorTemplate {
  let prof: ProfessorTemplate|undefined = map.get(id);
  if (!prof) throw new Error(`Professor not found from id ${id}`);
  return prof;
}
