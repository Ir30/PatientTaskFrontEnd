import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-patient-tasks',
  templateUrl: './patient-tasks.component.html',
  styleUrls: ['./patient-tasks.component.css']
})
export class PatientTasksComponent {
  
  
  constructor(private api:ServiceService){
  
  }

  // loading initial data
  
  ngOnInit(): void{
      this.api.getPatientTaskById(5).subscribe(
        (response:any)=>{
          this.patientTaskData=response
          console.log(this.patientTaskData)
        }
      )
      this.api.getPatientDetiles(5).subscribe(
        (response:any)=>{
          // console.log(response)
          this.patientData = response
        }
      )
    }
    


  
  updatedTime:any=null;
  patientData:any={};
  patientTaskData:any=[];
  valueFlag:boolean=false;
  flagvalue:boolean=false;



  onClickChildAssign=()=>{
    this.api.getPatientTaskById(5).subscribe(
      (response:any)=>{
        this.patientTaskData=response
      }
    )
  }

  

// function for hiding and displaying the task table
  onClickTable(){
    if(this.valueFlag){
      this.valueFlag=false;
    }else{
      this.valueFlag=true
    }
  }
// function for hiding and displaying the right side bar

  onClicKRightBar(){
    if(this.flagvalue){
      this.flagvalue=false;
    }else{
      this.flagvalue=true
    }
  }

}
