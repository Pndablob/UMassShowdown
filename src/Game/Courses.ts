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


export default {
    110: new Course([]);
    160: new Course([Davila160, Reilly160]);
    210: new Course([Golin210, Liberatore210, Richards210]);
    220: new Course([Minea220]);
    230: new Course([Bovornkeeratiroj230, Chiu230]);
    240: new Course([Lan240, Wilson240]);
    250: new Course([Barrington250, Golin250]);
    311: new Course([Minea311, Parvini311, Sheldon311]);
}