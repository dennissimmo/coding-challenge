import { TestBed } from '@angular/core/testing';

import { HomesService } from './homes.service';
import {of} from "rxjs";
import {Home} from "./homes.component";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";



describe('HomesService', () => {
  let service: HomesService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HomesService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should return the list of homes', () => {
    // Spy on and mock the HttpClient
    // Use our service to get homes
    const homesMock = [
      {
        title: 'Home 1',
        location: 'Ukraine'
      } as Home,
      {
        title: 'Home 3',
        location: 'France'
      } as Home,
      {
        title: 'Home 2',
        location: 'China'
      } as Home
    ];

    spyOn(httpClient, 'get').and.returnValues(of(homesMock));
    const spy = jasmine.createSpy('spy');
    service.getHomes$().subscribe(spy);

    // Verify that the service returned mocked data
    expect(spy).toHaveBeenCalledWith(homesMock);

    // Verify that the service called the proper HTTP endpoint
    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
