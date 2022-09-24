import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userForm : FormGroup;
  listData:any;

  
  constructor(private fb:FormBuilder){
    this.listData=[];
    this.userForm=this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      dob:['',Validators.required],
      gender:['',Validators.required],
      address:['',Validators.required],
      contact:['',
      [Validators.required,
      Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]]
    })
  
  }
  public addItem():void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  reset(){
    this.userForm.reset();
  }

  removeItem(element: any){
    this.listData.forEach((value: any,index: any)=>{
      if(value==element)
      this.listData.splice(index,1);
    }); 
  }
  get fname() {
    return this.userForm.get('fname');
  }
  get lname() {
    return this.userForm.get('lname');
  }
  get email() {
    return this.userForm.get('email');
  }
  get gender() {
    return this.userForm.get('gender');
  }
  get address() {
    return this.userForm.get('address');
  }
  get contact() {
    return this.userForm.get('contact');
  }
  ngOnInit(){    
  }
}
