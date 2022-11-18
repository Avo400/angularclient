import { Component, OnInit } from '@angular/core';
import { MonUser3Service } from '../mon-user3.service';
import { MonUser3 } from '../MonUser3';

@Component({
  selector: 'app-mon-user3-list',
  templateUrl: './mon-user3-list.component.html',
  styleUrls: ['./mon-user3-list.component.css']
})
export class MonUser3ListComponent implements OnInit {

  users: MonUser3[] = [];

  constructor(private monUser3Service: MonUser3Service) {
  }

  ngOnInit() {
    this.monUser3Service.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
