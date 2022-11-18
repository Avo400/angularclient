import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonUser3Service } from '../mon-user3.service';
import { MonUser3 } from '../MonUser3';
import { NgForm }  from '@angular/forms';


@Component({
  selector: 'app-mon-user3-form',
  templateUrl: './mon-user3-form.component.html',
  styleUrls: ['./mon-user3-form.component.css']


})
export class MonUser3FormComponent  {

  user: MonUser3;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private monUser3Service: MonUser3Service) {
    this.user = new MonUser3();
  }

  onSubmit() {
    this.monUser3Service.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
