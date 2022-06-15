import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  minDate:any="";
  
  getDate(){
    
  }
  bookName:string=''
  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService) { }
  // id: number = 0;
  date1:string='';
  date3:Date= new Date;
 

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
    this.dateValidate();
   
  }

  dateValidate(){
    var date:any= new Date();
     
    var toDate:any=date.getDate();
    if(toDate < 10){
     toDate ="0"+ toDate;
    }
    var month=date.getMonth()+1;
    if(month < 10){
     month = '0'+month;
    }
    var year =date.getFullYear();
    this.minDate= year+"-"+month+"-"+toDate;
    console.log(this.minDate);
    // console.log(this.date1);
    // console.log(this.date3);
//     console.log(this.getDate());
//     this.dateValue= new Date().getDate();
//     this.monthValue=new Date().getMonth();
//     this.monthValue=this.monthValue+1;
//     this.yearValue=new Date().getFullYear();
//     this.selectYear=this.date1.slice(0,4);
//     this.intYear=parseInt(this.selectYear);
//     this.selectMonth=this.date1.slice(5,7);
//     this.intMonth=parseInt(this.selectMonth);
//     this.selectDate=this.date1.slice(8,10);
//     this.intDate=parseInt(this.selectDate);
//     // console.log("MonthValue : "+this.monthValue);

//     if(this.yearValue<=this.intYear)
//     {
//       console.log("year : "+this.intYear);
//       if(this.monthValue<=this.intMonth)
//       {
//         console.log("month : "+this.intMonth);
//         // if(this.intYear>=)
//          if(this.dateValue<=this.intDate)
//         {
//           console.log("Date : "+this.intDate)
//           return true;
//         }
//         else{
//           return false;
//         }
//       }
//       else{
//         return false
//       }
      
//     }
//     else{
//       return false
//     }
 }
    

 }

