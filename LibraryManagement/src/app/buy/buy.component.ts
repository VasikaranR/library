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

  selectYear:string='';
  intYear:number=0;

  selectMonth:string='';
  intMonth:number=0;

  selectDate:string='';
  intDate:number=0;

  dateValue:number=0;
  monthValue:number=0;
  yearValue:number=0;
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
    this.dateValue= new Date().getDate();
    this.monthValue=new Date().getMonth();
    this.monthValue=this.monthValue+1;
    this.yearValue=new Date().getFullYear();
    this.selectYear=this.date1.slice(0,4);
    this.intYear=parseInt(this.selectYear);
    this.selectMonth=this.date1.slice(5,7);
    this.intMonth=parseInt(this.selectMonth);
    this.selectDate=this.date1.slice(8,10);
    this.intDate=parseInt(this.selectDate);
    // console.log("MonthValue : "+this.monthValue);

    if(this.yearValue<=this.intYear)
    {
      console.log("year : "+this.intYear);
      if(this.monthValue<=this.intMonth)
      {
        console.log("month : "+this.intMonth);
        if(this.dateValue<=this.intDate)
        {
          console.log("Date : "+this.intDate)
        }
   
      }
   
    }
 

    return true
  }

}
