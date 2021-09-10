import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ListResponse} from "./list-response";
import {Project} from "./project";

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  public list(): Observable<ListResponse<Project>> {
    return this.http.get<ListResponse<Project>>(`${environment.apiUrl}/skill/projects/`)
  }

  public get(id: number): Observable<Project> {
    return this.http.get<Project>(`${environment.apiUrl}/skill/projects/${id}/`)
  }
}
