import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ListResponse} from "../utils/models/list-response";
import {Skill} from "./skill";

@Injectable()
export class SkillService {

  constructor(private http: HttpClient) { }

  public list(
    params?: { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> }
  ): Observable<ListResponse<Skill>> {
    return this.http.get<ListResponse<Skill>>(`${environment.apiUrl}/skill/skills/`, {params: params})
  }

  public get(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${environment.apiUrl}/skill/skills/${id}/`)
  }
}
