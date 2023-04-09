import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { skills } from './skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private http: HttpClient) { }
  getSkills() {
    return this.http.get<skills[]>('/assets/data/skills.json');
  }
}
