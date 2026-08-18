import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPanel } from './setting-panel';

describe('SettingPanel', () => {
  let component: SettingPanel;
  let fixture: ComponentFixture<SettingPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
