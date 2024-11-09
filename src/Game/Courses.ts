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

let map: Map<string, Course> = new Map(Object.entries({
    110: new Course([], "CICS 110"),
    160: new Course([Davila160, Reilly160], "CICS 160"),
    210: new Course([Golin210, Liberatore210, Richards210], "CICS 210"),
    220: new Course([Minea220, Davila220, Minea220], "CS 220"),
    240: new Course([Lan240, Wilson240, Lan240, Wilson240], "CS 240"),
    230: new Course([Chiu230, Bovornkeeratiroj230, Chiu230], "CS 230"),
    250: new Course([Barrington250, Golin250], "CS 250"), // miniboss
    311: new Course([Minea311, Parvini311, Sheldon311], "CS 311"), // final boss
}))

export default map;
