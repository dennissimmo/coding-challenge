import {Home, HomesComponent} from "./homes.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HomesService} from "./homes.service";
import {of} from "rxjs";

class HomesServiceMock {
  getHomes$() {
    return of([
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
    ]);
  }
}

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomesComponent],
      providers: [
        {
          provide:HomesService, useClass: HomesServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show homes', () => {
    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length === 3).toBeTruthy();
  });

  it('should show home info', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
    expect(home.querySelector('[data-test="location"]').innerText).toEqual('Ukraine');
  });
})
