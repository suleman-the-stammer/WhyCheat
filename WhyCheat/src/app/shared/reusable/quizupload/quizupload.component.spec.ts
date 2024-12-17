import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizuploadComponent } from './quizupload.component';

describe('QuizuploadComponent', () => {
  let component: QuizuploadComponent;
  let fixture: ComponentFixture<QuizuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizuploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
