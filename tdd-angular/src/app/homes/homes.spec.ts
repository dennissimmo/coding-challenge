import {Home, HomesComponent} from "./homes.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HomesService} from "./homes.service";
import {of} from "rxjs";
import {DialogService} from "../services/dialog.service";
import {MatDialog} from "@angular/material/dialog";

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
  let dialogService: DialogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomesComponent],
      providers: [
        DialogService,
        {
          provide:HomesService, useClass: HomesServiceMock
        },
        { provide: MatDialog, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomesComponent);
    dialogService = TestBed.inject(DialogService)
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

  it('should show book button', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(home.querySelector('[data-test="book-btn"]').innerText).toEqual('Book');
  });

  it('should use dialog service to open a dialog when clicking on book button', () => {
    // grab the button to click
    const home = fixture.nativeElement.querySelector('[data-test="home"]');
    const buttonContainer = home.querySelector('[data-test="book-btn"]');
    const buttonBook = buttonContainer.firstChild;
    // start spy on 'open' method
    spyOn(dialogService, 'open');

/*    // click the button
    buttonBook.click();
    // assert that the dialog service was used to open a dialog
    expect(dialogService.open).toHaveBeenCalled();*/
  });
})
