import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedDataAccessUserComponent } from './shared-data-access-user.component';

describe('SharedDataAccessUserComponent', () => {
  let component: SharedDataAccessUserComponent;
  let fixture: ComponentFixture<SharedDataAccessUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedDataAccessUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedDataAccessUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
