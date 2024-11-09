import React, { useMemo, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
//import App from './App';
//import Page2 from "./pages/Page2/Page2";
import LevelSelect from '../LevelSelect/LevelSelect';

interface GlobalState {
}

export default function Root() {
  const [globalState, setGlobalState] = useState<GlobalState>();

 const router = useMemo(() => {
  return createBrowserRouter([
    {
      path: "/",
      element: <LevelSelect globalState={globalState} setGlobalState={setGlobalState}/>,
    },
    ])
  }, [globalState, setGlobalState]);

  return (<React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>)
}

