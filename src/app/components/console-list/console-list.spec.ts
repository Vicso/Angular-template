import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleList } from './console-list';

describe('ConsoleList', () => {
  let component: ConsoleList;
  let fixture: ComponentFixture<ConsoleList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
