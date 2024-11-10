import React, { useMemo, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import BattleScreen from '../BattleScreen/BattleScreen';
import LevelSelect from '../LevelSelect/LevelSelect';
import TeamSelect from '../TeamSelectScreen/TeamSelectScreen';
import GlobalState from '../GlobalState/GlobalState';

import Minea220 from "../Game/Professors/Minea220"
import Davila220 from "../Game/Professors/Davila220"
export default function Root() {
  const [globalState, setGlobalState] = useState<GlobalState>({
    levelsUnlocked: ["110"],
    charactersUnlocked: [Minea220, Davila220],
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

