import ProfessorTemplate from "../Game/ProfessorTemplate";
import { getProfFromID } from '../Game/Professors/IDs';
import Courses, { prerequisiteMap } from '../Game/Courses';
import Course from '../Game/Course';
import { Dispatch, SetStateAction } from "react";

export default interface GlobalState{
  levelsUnlocked: string[];
  charactersUnlocked: ProfessorTemplate[];
}

export interface GlobalStateSerialized {
  levelsUnlocked: string[];
  charactersUnlocked: number[]; // class names of professors
}

export function getStateFromSerialized(ser: GlobalStateSerialized): GlobalState {
  console.log(ser.levelsUnlocked);
  return {
    levelsUnlocked: ser.levelsUnlocked,
    charactersUnlocked: ser.charactersUnlocked.map((id)=>getProfFromID(id))
  }
}

export function getSerializedFromState(state: GlobalState): GlobalStateSerialized {
  return {
    levelsUnlocked: state.levelsUnlocked,
    charactersUnlocked: state.charactersUnlocked.map((prof)=>prof.id)
  }
}

export function updateGlobalStateOnWin(beatenCourse: string, globalState: GlobalState): GlobalState {
  let newState: GlobalState = {
    levelsUnlocked: [],
    charactersUnlocked: structuredClone(globalState.charactersUnlocked),
  }
  for (const courseName of Array.from(prerequisiteMap.keys())){
    if (!courseName) {
      console.log("Invalid course name");
      continue;
    };

    let hasAll = true;

    let prereqs = prerequisiteMap.get(courseName);
    if (!prereqs) {
      console.log("prereqs are invalid");
      continue;
    }

    for (const prereq of prereqs) {
      console.log("BEATEN COURSE: " + beatenCourse);
      console.log("PREREQ: " + prereq);
      if (globalState.levelsUnlocked.includes(prereq) && prereq !== beatenCourse) {
        console.log(`can't unlock ${courseName} because you lack ${prereq}`);
        hasAll = false;
      }
    }

    if (!hasAll) {
      console.log("doesn't have all");
      continue;
    }

    let course: Course|undefined = Courses.get(courseName);
    if (!course) {
      console.log("can't find course");
      continue;
    }

    let profs: ProfessorTemplate[] = course.getProfessors();

    newState.charactersUnlocked.push(...profs);
    newState.levelsUnlocked.push(courseName);
  }
  return newState;
}
