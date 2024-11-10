import ProfessorTemplate from "../Game/ProfessorTemplate";
import { getProfFromID } from '../Game/Professors/IDs';
import Courses, { prerequisiteMap } from '../Game/Courses';
import Course from '../Game/Course';
import { Dispatch, SetStateAction } from "react";
import Professor from "../Game/Professor";
import Anderson0 from '../Game/Professors/Anderson0';
import Haas0 from '../Game/Professors/Haas0';

export default interface GlobalState{
  levelsUnlocked: string[];
  charactersUnlocked: ProfessorTemplate[];
  levelsBeaten: string[];
}

export interface GlobalStateSerialized {
  levelsUnlocked: string[];
  charactersUnlocked: number[]; // class names of professors
  levelsBeaten: string[];
}

export function getStateFromSerialized(ser: GlobalStateSerialized): GlobalState {
  return {
    levelsUnlocked: ser.levelsUnlocked,
    charactersUnlocked: ser.charactersUnlocked.map((id)=>getProfFromID(id)),
    levelsBeaten: ser.levelsBeaten,
  }
}

export function getSerializedFromState(state: GlobalState): GlobalStateSerialized {
  return {
    levelsUnlocked: state.levelsUnlocked,
    charactersUnlocked: state.charactersUnlocked.map((prof)=>prof.id),
    levelsBeaten: state.levelsBeaten,
  }
}

export function updateGlobalStateOnWin(beatenCourse: string, globalState: GlobalState): GlobalState {
  let newState: GlobalState = {
    levelsUnlocked: [],
    charactersUnlocked: structuredClone(globalState.charactersUnlocked),
    levelsBeaten: structuredClone(globalState.levelsBeaten),
  }
  newState.levelsBeaten.push(beatenCourse);
  newState.levelsBeaten = Array.from(new Set(newState.levelsBeaten));
  console.log("newState.levelsBeaten", newState.levelsBeaten);

  for (const courseName of Array.from(prerequisiteMap.keys())){
    console.log(`Looking at ${courseName}`);
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
      console.log(`Checking ${prereq}`);
      console.log(`BEATEN COURSE: ${beatenCourse}`);
      console.log("GlobalState", globalState);
      if (!globalState.levelsUnlocked.includes(prereq) && prereq !== beatenCourse) {
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


    newState.levelsUnlocked.push(courseName);
  }
  console.log("--------------");
  console.log("--------------");
  console.log("--------------");
  console.log("--------------");
  console.log("--------------");
  console.log("--------------");
  console.log("--------------");

  let set: Set<ProfessorTemplate> = new Set([Anderson0, Haas0]);
  for (let i = 0; i < newState.levelsBeaten.length; ++i) {
    let course: Course|undefined = Courses.get(newState.levelsBeaten[i]);
    if (!course) {
      console.log("can't find course");
      continue;
    }
    console.log(`you have course ${newState.levelsBeaten[i]} so getting professors`);
    let profs = course.getProfessors();
    console.log(profs, newState.levelsBeaten[i]);
    for (let j = 0; j < profs.length; ++j) {
      console.log(`Add ${profs[j].name}`);
      set.add(profs[j]);
    }
  }
  newState.charactersUnlocked = Array.from(set);

  return newState;
}
