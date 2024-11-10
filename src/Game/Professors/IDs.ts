import ProfessorTemplate from "../ProfessorTemplate";
import Anderson0 from "./Anderson0";
import Barrington250 from "./Barrington250"
import Bovornkeeratiroj230 from "./Bovornkeeratiroj230"
import Chiu230 from "./Chiu230"
import Davila160 from "./Davila160"
import Golin210 from "./Golin210"
import Golin250 from "./Golin250"
import Lan240 from "./Lan240"
import Liberatore210 from "./Liberatore210"
import Minea220 from "./Minea220"
import Minea311 from "./Minea311"
import Parvini311 from "./Parvini311"
import Reilly160 from "./Reilly160"
import Richards210 from "./Richards210"
import Sheldon311 from "./Sheldon311"
import Wilson240 from "./Wilson240"
import Davila220 from "./Davila220";
import Haas0 from "./Haas0";
import Swanier110 from "./Swanier110";
import Parvini110 from "./Parvini110";

const map = new Map<number, ProfessorTemplate>();
map.set(0, Anderson0);
map.set(1, Barrington250);
map.set(2, Bovornkeeratiroj230);
map.set(3, Chiu230);
map.set(4, Davila160);
map.set(5, Golin210);
map.set(6, Golin250);
map.set(7, Lan240);
map.set(8, Liberatore210);
map.set(9, Minea220);
map.set(10, Minea311);
map.set(11, Parvini311);
map.set(12, Reilly160);
map.set(13, Richards210);
map.set(14, Sheldon311);
map.set(15, Wilson240);
map.set(16, Davila220);
map.set(17, Haas0);
map.set(18, Swanier110);
map.set(19, Parvini110);


export function getProfFromID(id: number): ProfessorTemplate {
  let prof: ProfessorTemplate|undefined = map.get(id);
  if (!prof) throw new Error(`Professor not found from id ${id}`);
  return prof;
}
