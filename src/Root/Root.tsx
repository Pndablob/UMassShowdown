import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import BattleScreen from '../BattleScreen/BattleScreen';
import LevelSelect from '../LevelSelect/LevelSelect';
import TeamSelect from '../TeamSelectScreen/TeamSelectScreen';
import GlobalState from '../GlobalState/GlobalState';

import Haas0 from '../Game/Professors/Haas0';
import Anderson0 from '../Game/Professors/Anderson0';

export default function Root() {
  const [globalState, setGlobalState] = useState<GlobalState>({
    levelsUnlocked: ["110"],
    charactersUnlocked: [Anderson0, Haas0],
    levelsBeaten: []
  });

  const audioRef = useRef(new Audio(`${process.env.PUBLIC_URL}/audio/CICSShowdown.wav`));

  useEffect(() => {
    audioRef.current.loop = true;

    const startAudio = () => {
      audioRef.current.play().catch((error) => {
        console.error('Autoplay was prevented:', error);
      });

      document.removeEventListener('click', startAudio);
    };

    document.addEventListener('click', startAudio);

    return () => document.removeEventListener('click', startAudio);
  }, []);

 const router = useMemo(() => {
  return createHashRouter([
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

