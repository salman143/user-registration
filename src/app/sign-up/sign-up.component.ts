  import { Component, OnInit } from '@angular/core';
  import { UserService } from '../shared/user.service';
  import { User } from '../models/user';
  import { Router, ActivatedRoute } from '@angular/router';


  @Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
  })
  export class SignUpComponent implements OnInit {
   
    user:User = {
      FirstName:"",
      UserName: '',
      Email:'',
      Password:''
    };
   
    
    emailPattern ='^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

    constructor(
      private router: Router, 
      private route: ActivatedRoute,
      private _userservice : UserService) { 
     
    }

    
     
    save(users){
      this._userservice.create(users);
      this.router.navigate(['/list-user']);
      
  }

    ngOnInit() {
     
    }

    
  }
