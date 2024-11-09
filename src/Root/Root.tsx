import React, { useMemo, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import BattleScreen from '../BattleScreen/BattleScreen';
import LevelSelect from '../LevelSelect/LevelSelect';
import TeamSelect from '../TeamSelectScreen/TeamSelectScreen';
import GlobalState from '../GlobalState/GlobalState';

export default function Root() {
  const [globalState, setGlobalState] = useState<GlobalState>({

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

  return (<React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>)
}

