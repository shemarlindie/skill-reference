export interface Skill {
  id: number
  project_count: number
  date_created: Date,
  date_updated: Date,
  name: string,
  description: string,
  icon?: string,
  visible: boolean,
  created_by?: number,
  modified_by?: number,
  projects: number[]
}
