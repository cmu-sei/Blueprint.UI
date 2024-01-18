// Copyright 2024 Carnegie Mellon University. All Rights Reserved.
// Released under a MIT (SEI)-style license. See LICENSE.md in the
// project root for license information.

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PlayerApplicationListComponent } from './player-application-list.component';

describe('PlayerApplicationListComponent', () => {
  let component: PlayerApplicationListComponent;
  let fixture: ComponentFixture<PlayerApplicationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerApplicationListComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

