import Course from './Course';

import Barrington250 from "./Professors/Barrington250"
import Bovornkeeratiroj230 from "./Professors/Bovornkeeratiroj230"
import Chiu230 from "./Professors/Chiu230"
import Davila160 from "./Professors/Davila160"
import Golin210 from "./Professors/Golin210"
import Golin250 from "./Professors/Golin250"
import Lan240 from "./Professors/Lan240"
import Liberatore210 from "./Professors/Liberatore210"
import Minea220 from "./Professors/Minea220"
import Minea311 from "./Professors/Minea311"
import Parvini311 from "./Professors/Parvini311"
import Reilly160 from "./Professors/Reilly160"
import Richards210 from "./Professors/Richards210"
import Sheldon311 from "./Professors/Sheldon311"
import Wilson240 from "./Professors/Wilson240"
import Davila220 from "./Professors/Davila220"
import Swanier110 from "./Professors/Swanier110"
import Parvini110 from "./Professors/Parvini110"

let map: Map<string, Course> = new Map();
map.set("110", new Course([Parvini110, Swanier110], "CICS 110"));
map.set("160", new Course([Davila160, Reilly160], "CICS 160"));
map.set("210", new Course([Golin210, Liberatore210, Richards210], "CICS 210"));
map.set("220", new Course([Minea220, Davila220, Minea220], "CS 220")); // miniboss
map.set("230", new Course([Chiu230, Bovornkeeratiroj230, Chiu230], "CS 230"));
map.set("240", new Course([Lan240, Wilson240, Lan240, Wilson240], "CS 240"));
map.set("250", new Course([Barrington250, Golin250], "CS 250")); // miniboss
map.set("311", new Course([Minea311, Parvini311, Sheldon311], "CS 311")); // final boss


let prerequisiteMap: Map<string, string[]> = new Map();
prerequisiteMap.set("110", []);
prerequisiteMap.set("160", ["110"]);
prerequisiteMap.set("210", ["160"]);
prerequisiteMap.set("220", ["210"]);
prerequisiteMap.set("240", ["160"]);
prerequisiteMap.set("230", ["210"]);
prerequisiteMap.set("250", ["160"]);
prerequisiteMap.set("311", ["250"]);
export {prerequisiteMap};

export default map;
