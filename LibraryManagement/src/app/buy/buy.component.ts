import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  bookName:string=''
  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService) { }
  // id: number = 0;
  date1:string='';
  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   if (this.id != null) {
    //     this.formvalid.get('Id')?.setValue(params['id']);
    //     const data = this.userService.getUsersByID(this.id);
    //     if (data) {
    //       this.formvalid.setValue(data);
    //     }
    //   }
    // });
  }

  dateValidate(){
    console.log(this.date1);
    console.log(new Date().getDate())
    return true
  }

}
