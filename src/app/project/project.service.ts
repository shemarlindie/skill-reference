import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ListResponse} from "../utils/models/list-response";
import {Project} from "./project";

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  public list(
    params?: { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> }
  ): Observable<ListResponse<Project>> {
    return this.http.get<ListResponse<Project>>(`${environment.apiUrl}/skill/projects/`, {params: params})
  }

  public get(id: number): Observable<Project> {
    return this.http.get<Project>(`${environment.apiUrl}/skill/projects/${id}/`)
  }
}
