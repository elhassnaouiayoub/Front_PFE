import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMovieCardComponent } from './profile-movie-card.component';

describe('ProfileMovieCardComponent', () => {
  let component: ProfileMovieCardComponent;
  let fixture: ComponentFixture<ProfileMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMovieCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
