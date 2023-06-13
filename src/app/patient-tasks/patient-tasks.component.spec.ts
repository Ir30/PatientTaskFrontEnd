import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { PatientTasksComponent } from './patient-tasks.component';
import { By } from '@angular/platform-browser';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServiceService } from '../service.service';
import { of } from 'rxjs';
import { Component } from '@angular/core';







describe('PatientTasksComponent', () => {
  let component: PatientTasksComponent;
  let fixture: ComponentFixture<PatientTasksComponent>;
  let apiService: ServiceService;

  beforeEach(async () => {
   

    await TestBed.configureTestingModule({
      declarations: [ PatientTasksComponent,NavbarComponent],
      imports:[HttpClientTestingModule,HttpClientModule]

    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiService = TestBed.inject(ServiceService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  // it('should fetch patient task data by ID and update patientTaskData', () => {
  //   // Arrange
  //   const service = TestBed.inject(ServiceService);
  //   const mockedApiResponse = { /* mock response object */ };
  //   spyOn(service, 'getPatientTaskById').and.returnValue(of(mockedApiResponse));
  //   const expectedPatientTaskData = mockedApiResponse;

  //   // Act
  //   component.onClickChildAssign();

  //   // Assert
  //   expect(service.getPatientTaskById).toHaveBeenCalledWith(5);
  //   expect(component.patientTaskData).toEqual(expectedPatientTaskData);
  // });


  it('should fetch patient task and patient details on component initialization', () => {
    // Mock the ApiService
    const mockApiService = jasmine.createSpyObj('ApiService', ['getPatientTaskById', 'getPatientDetiles']);
    const mockPatientTaskData = { id: 1, name: 'Patient Task 1' };
    const mockPatientData = { id: 1, name: 'Patient 1' };
  
    // Set up the component
    const component = new PatientTasksComponent(mockApiService);
  
    // Set up the mock responses
    mockApiService.getPatientTaskById.and.returnValue(of(mockPatientTaskData));
    mockApiService.getPatientDetiles.and.returnValue(of(mockPatientData));
  
    // Call ngOnInit()
    component.ngOnInit();
  
    // Expect the ApiService methods to have been called with the correct parameters
    expect(mockApiService.getPatientTaskById).toHaveBeenCalledWith(5);
    expect(mockApiService.getPatientDetiles).toHaveBeenCalledWith(5);
  
    // Expect the component properties to have been set with the correct values
    expect(component.patientTaskData).toEqual(mockPatientTaskData);
    expect(component.patientData).toEqual(mockPatientData);
  });
  
  
  
  it('should toggle valueFlag between true and false', () => {
    // Set up the component
    const mockApiService = jasmine.createSpyObj('ApiService', ['getPatientTaskById', 'getPatientDetiles']);

    const component = new PatientTasksComponent(mockApiService);
    component.valueFlag = true;
  
    // Call onClickTable() once
    component.onClickTable();
  
    // Expect valueFlag to be false
    expect(component.valueFlag).toBe(false);
  
    // Call onClickTable() again
    component.onClickTable();
  
    // Expect valueFlag to be true
    expect(component.valueFlag).toBe(true);
  });
  
  it('should toggle flagvalue between true and false', () => {

    const mockApiService = jasmine.createSpyObj('ApiService', ['getPatientTaskById', 'getPatientDetiles']);

    // Set up the component
    const component = new PatientTasksComponent(mockApiService);
    component.flagvalue = true;
  
    // Call onClicKRightBar() once
    component.onClicKRightBar();
  
    // Expect flagvalue to be false
    expect(component.flagvalue).toBe(false);
  
    // Call onClicKRightBar() again
    component.onClicKRightBar();
  
    // Expect flagvalue to be true
    expect(component.flagvalue).toBe(true);
  });
  
  
 
});
