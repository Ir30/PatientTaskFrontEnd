import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTaskPanelComponent } from './side-task-panel.component';
import { ServiceService } from '../service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { throwError } from 'rxjs';


describe('SideTaskPanelComponent', () => {
  let component: SideTaskPanelComponent;
  let fixture: ComponentFixture<SideTaskPanelComponent>;
  let apiService:ServiceService;
  let assignTaskSpy: jasmine.Spy;

  


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideTaskPanelComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTaskPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiService = TestBed.inject(ServiceService);
    component = new SideTaskPanelComponent(apiService);
    assignTaskSpy = spyOn(apiService, 'assignTask').and.returnValue(of({ status: 'success' }));

  });



  it('should call apiService.assignTask with the correct data', () => {
    const taskId = 123;
    const now = new Date();
    const expectedData = {
      patientId: 5,
      taskId: taskId,
      dateTime: now
    };
    component.assignTask(taskId);
    expect(assignTaskSpy).toHaveBeenCalledWith(expectedData);
  });

  it('should alert the response status if it is not "success"', () => {
    const taskId = 123;
    assignTaskSpy.and.returnValue(of({ status: 'error' }));
    spyOn(window, 'alert');
    component.assignTask(taskId);
    expect(window.alert).toHaveBeenCalledWith('error');
  });
  it('should emit onClickChildAssign event when apiService.assignTask returns success', () => {
    const taskId = 123;
    spyOn(component.onClickChildAssign, 'emit');
    component.assignTask(taskId);
    expect(component.onClickChildAssign.emit).toHaveBeenCalled();
  });


  // Assign task set testing

  it('should call apiService.assignTaskSets with correct data', () => {
    const now = new Date();
    const data = {
      patientId: 5,
      taskSetsId: 1,
      dateTime: now
    };
    const response = { status: 'success' };

    spyOn(apiService, 'assignTaskSets').and.returnValue(of(response));

    component.assignTaskSets(1);

    expect(apiService.assignTaskSets).toHaveBeenCalledWith(data);
  });

  it('should emit onClickChildAssign event', () => {
    const now = new Date();
    const data = {
      patientId: 5,
      taskSetsId: 1,
      dateTime: now
    };
    const response = { status: 'success' };

    spyOn(apiService, 'assignTaskSets').and.returnValue(of(response));
    spyOn(component.onClickChildAssign, 'emit');

    component.assignTaskSets(1);

    expect(component.onClickChildAssign.emit).toHaveBeenCalled();
  });



  it('should fetch tasks and task sets on component initialization', () => {
    // Mock the ApiService
    const mockApiService = jasmine.createSpyObj('ApiService', ['viewAllTasks', 'viewAllTaskSets']);
    const mockTasksList = [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }];
    const mockTaskSetsList = [{ id: 1, name: 'Task Set 1' }, { id: 2, name: 'Task Set 2' }];
  
    // Set up the component
    const component = new SideTaskPanelComponent(mockApiService);
  
    // Set up the mock responses
    mockApiService.viewAllTasks.and.returnValue(of({ tasksList: mockTasksList }));
    mockApiService.viewAllTaskSets.and.returnValue(of({ taskSetsList: mockTaskSetsList }));
  
    // Call ngOnInit()
    component.ngOnInit();
  
    // Expect the ApiService methods to have been called
    expect(mockApiService.viewAllTasks).toHaveBeenCalled();
    expect(mockApiService.viewAllTaskSets).toHaveBeenCalled();
  
    // Expect the component properties to have been set with the correct values
    expect(component.taskData).toEqual(mockTasksList);
    expect(component.taskSetsData).toEqual(mockTaskSetsList);
  });
  
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
