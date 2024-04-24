import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasdetComponent } from './receita.component';

describe('ReceitaComponent', () => {
  let component: ReceitasdetComponent;
  let fixture: ComponentFixture<ReceitasdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitasdetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitasdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
