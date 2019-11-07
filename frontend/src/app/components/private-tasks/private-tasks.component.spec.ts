import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTasksComponent } from './private-tasks.component';

describe('PrivateTasksComponent', () => {
  let component: PrivateTasksComponent;
  let fixture: ComponentFixture<PrivateTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
