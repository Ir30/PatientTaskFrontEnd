import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  viewAllTasks = ()=>{
    return this.http.get("http://localhost:8080/tasks/viewAllTasks");
  }

  viewAllTaskSets = ()=>{
    return this.http.get("http://localhost:8080/tasks/ViewAllTaskSets");
  }

  getPatientTaskById = (id:number)=>{
    return this.http.get("http://localhost:8080/tasks/getPatientTaskById/"+id)
  }

  assignTask = (data:any) =>{
    return this.http.post("http://localhost:8080/tasks/assignTask",data)
  }

  assignTaskSets = (data:any) =>{
    return this.http.post("http://localhost:8080/tasks/assignTaskSets",data)
  }

  getPatientDetiles = (id:number)=>{
    return this.http.get("http://localhost:8080/patient/findPatientById/"+id)
  }
}
