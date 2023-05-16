import { Component, OnInit } from '@angular/core';
import { SkillService } from './skill.service';
import { skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: skill[] = []

  constructor(public skillService: SkillService) { }

  ngOnInit() {
    this.skillService.getSkills().subscribe((data) => {
      this.skills = data;
    })
  }
}
