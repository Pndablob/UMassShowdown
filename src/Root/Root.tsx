import React, { useMemo, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import BattleScreen from '../BattleScreen/BattleScreen';
import LevelSelect from '../LevelSelect/LevelSelect';
import TeamSelect from '../TeamSelectScreen/TeamSelectScreen';
import GlobalState from '../GlobalState/GlobalState';

import Barrington250 from "../Game/Professors/Barrington250"
import Bovornkeeratiroj230 from "../Game/Professors/Bovornkeeratiroj230"
import Chiu230 from "../Game/Professors/Chiu230"
import Davila160 from "../Game/Professors/Davila160"
import Golin210 from "../Game/Professors/Golin210"
import Golin250 from "../Game/Professors/Golin250"
import Lan240 from "../Game/Professors/Lan240"
import Liberatore210 from "../Game/Professors/Liberatore210"
import Minea220 from "../Game/Professors/Minea220"
import Minea311 from "../Game/Professors/Minea311"
import Parvini311 from "../Game/Professors/Parvini311"
import Reilly160 from "../Game/Professors/Reilly160"
import Richards210 from "../Game/Professors/Richards210"
import Sheldon311 from "../Game/Professors/Sheldon311"
import Wilson240 from "../Game/Professors/Wilson240"
import Davila220 from "../Game/Professors/Davila220"
export default function Root() {
  const [globalState, setGlobalState] = useState<GlobalState>({
    levelsUnlocked: ["110", "160", "210", "220", "230", "240", "250", "311"],
    charactersUnlocked: [Davila160, Reilly160, Golin210, Liberatore210, Richards210, Minea220, Davila220, Minea220, Lan240, Wilson240, Chiu230, Bovornkeeratiroj230, Barrington250, Golin250, Minea311, Parvini311, Sheldon311],
  });

 const router = useMemo(() => {
  return createBrowserRouter([
    {
      path: "/",
      element: <LevelSelect globalState={globalState} setGlobalState={setGlobalState}/>,
    },
    {
      path: "/battleScreen",
      element: <BattleScreen globalState={globalState} setGlobalState={setGlobalState}/>,
    },
    {
      path: "/teamSelect",
      element: <TeamSelect globalState={globalState} setGlobalState={setGlobalState}/>,
    },
    ])
  }, [globalState, setGlobalState]);

  return (
    //<React.StrictMode>
     <RouterProvider router={router}/>
    //</React.StrictMode>
  )
}

