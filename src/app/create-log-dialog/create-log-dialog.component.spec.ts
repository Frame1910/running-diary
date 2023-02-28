import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLogDialogComponent } from './create-log-dialog.component';

describe('CreateLogDialogComponent', () => {
  let component: CreateLogDialogComponent;
  let fixture: ComponentFixture<CreateLogDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLogDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
