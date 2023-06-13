import { TestBed } from '@angular/core/testing';
import { ServiceService } from './service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ServiceService', () => {
  let service: ServiceService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      
      providers:[ServiceService]
    });
    service = TestBed.inject(ServiceService);
    // dataService = TestBed.inject(DataService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // afterEach(() => {
  //   httpMock.verify();
  // });
  // it('should send a POST request to assign a task', () => {
  //   // Arrange
  //   const testData = { /* test data */ };
  //   const expectedUrl = 'http://localhost:8080/tasks/assignTask';

  //   // Act
  //   service.assignTask(testData).subscribe();

  //   // Assert
  //   const req = httpMock.expectOne(expectedUrl);  
  //   expect(req.request.method).toEqual('POST');
  //   expect(req.request.body).toEqual(testData);
  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send a POST request to assign a task', () => {
    // Arrange
    const testData = { /* test data */ };
    const expectedUrl = 'http://localhost:8080/tasks/assignTask';
    let response: any;

    // Act
    service.assignTask(testData).subscribe(
      res => {
        response = res;
      }
    );

    // Assert
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(testData);
    req.flush({ /* mock response data */ });
    expect(response).toEqual({ /* expected response data */ });
  });

  
  it('should send a POST request to assign a task', () => {
    // Arrange
    const testData = { /* test data */ };
    const expectedUrl = 'http://localhost:8080/tasks/assignTaskSets';
    let response: any;

    // Act
    service.assignTaskSets(testData).subscribe(
      res => {
        response = res;
      }
    );

    // Assert
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(testData);
    req.flush({ /* mock response data */ });
    expect(response).toEqual({ /* expected response data */ });
  });

  
});
