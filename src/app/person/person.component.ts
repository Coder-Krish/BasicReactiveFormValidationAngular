import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  public addPerson:Person = new Person();
  public personList:Array<Person> = new Array<Person>();

  constructor() { }

  ngOnInit(): void {
  }

  Add(){
  if(this.addPerson.personForm.invalid){
    return;
  }

  Object.assign(this.addPerson,this.addPerson.personForm.value);

  this.personList.push(this.addPerson);
  this.addPerson = new Person();
  this.addPerson.personForm.reset();
   
  }

  //This function only views the selected row in the form
  View(row:Person){
    this.addPerson.personForm.patchValue({
      FirstName:row.FirstName,
      LastName:row.LastName,
      Address:row.Address,
      PhoneNumber:row.PhoneNumber
    });
  }

}
