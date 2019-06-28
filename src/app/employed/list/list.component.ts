import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: any;
  constructor() { 
    this.list = [
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
      {name:"Brayan", lastname: "Corredor", birthdate: "2001-19-02", pay: 5000000},
    ]
  }

  ngOnInit() {
  }

}
