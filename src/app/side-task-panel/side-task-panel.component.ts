import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../service.service';
import { single } from 'rxjs';

@Component({
  selector: 'app-side-task-panel',
  templateUrl: './side-task-panel.component.html',
  styleUrls: ['./side-task-panel.component.css']
})
export class SideTaskPanelComponent {
  constructor(private api:ServiceService){}

  ngOnInit(): void{
    this.api.viewAllTasks().subscribe(
      (response:any)=>{
        this.taskData=response.tasksList
        this.updatedTime=new Date()
      }
    )

    this.api.viewAllTaskSets().subscribe(
      (response:any)=>{
        this.taskSetsData=response.taskSetsList
      }
    )
  }

  taskData:any=[]
  updatedTime:any=null
  taskSetsData:any=[]

  // reciving function from parent Component.......
  @Output("onClickChildAssign") 
  onClickChildAssign:EventEmitter<any>=new EventEmitter();


// function for assigning single task ............

  assignTask(taskId:any){
    const now = new Date();
    let data:any={
      "patientId":5,
      "taskId":taskId,
      "dateTime":now
    }
    this.api.assignTask(data).subscribe(
      (response:any) =>{
        this.onClickChildAssign.emit();
        if(response.status=="success"){
          alert(response.status)
        }else{
          alert(response.status)
        }
      }
    )
    
  }

  // function for assigning task sets..............
  assignTaskSets(taskSetId:any){
    const now = new Date();
    let data:any={
      "patientId":5,
      "taskSetsId":taskSetId,
      "dateTime":now
    }
      this.api.assignTaskSets(data).subscribe(
      (response:any)=>{  
        this.onClickChildAssign.emit();
        alert(response.status)
      }
    )
    
  }



}
