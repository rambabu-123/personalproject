import { Component } from '@angular/core';
import { Auth } from '../auth/auth';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})

export class Landing {
 openOverlay:boolean = false;
  serviceData:any;
  userDetails:any;
  productid:string =''
  constructor(private readonly auth: Auth){
  }

  ngOnInit() {
    this.getAlluserdata();
  }
 closeOverlay(){
    this.openOverlay = false;
  }
  openpopup(id:string){
    this.productid = id
    this.openOverlay =true;
    this.getproductDetails();
  }

  getAlluserdata(){
    this.auth.getAllServices({
      success: (res: any) => {
        this.serviceData = res;
        console.log('datasucessd',this.serviceData);
    },
      loader: (loading: boolean) => {

      },
    failure: (error: any) => {
      console.log('error facing');
    }
  })
}

getproductDetails(){
    if (!this.productid) {
    console.error('Product ID is missing');
    return;
  }
  console.log('Product ID:', this.productid);
       this.auth.getServiceDetails({
        data: {
          body: this.productid
        },
        success:(res:any)=>{
          this.userDetails = res;
        },
        failure: (error: any) => {
          console.log('error facing');
        },
      })
}

  


}
