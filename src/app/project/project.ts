import {Skill} from "../skill/skill";

export interface Project {
  id: number
  skill_count: number
  date_created: Date,
  date_updated: Date,
  name: string,
  description: string,
  link?: string,
  visible: boolean,
  created_by?: number,
  modified_by?: number,
  skills: Skill[]
}
