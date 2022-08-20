import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Person{
    public FirstName:String="";
    public LastName:String="";
    public Address:String="";
    public PhoneNumber!:number;
    public personForm!:FormGroup;

    constructor() {
    let fb = new FormBuilder();
     this.personForm = fb.group({
        FirstName:['',[Validators.required]],
        LastName:['',[Validators.required]],
        Address:['',[Validators.required]],
        PhoneNumber:['',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10,10}$')])]
     });
    }
}