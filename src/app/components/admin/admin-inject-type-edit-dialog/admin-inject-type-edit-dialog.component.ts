// Copyright 2024 Carnegie Mellon University. All Rights Reserved.
// Released under a MIT (SEI)-style license. See LICENSE.md in the
// project root for license information.

import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {
  UntypedFormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { DialogService } from 'src/app/services/dialog/dialog.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class UserErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: UntypedFormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}

const MIN_NAME_LENGTH = 3;

@Component({
  selector: 'app-admin-inject-type-edit-dialog',
  templateUrl: './admin-inject-type-edit-dialog.component.html',
  styleUrls: ['./admin-inject-type-edit-dialog.component.scss'],
})

export class AdminInjectTypeEditDialogComponent {
  @Output() editComplete = new EventEmitter<any>();
  isChanged = false;

  constructor(
    public dialogService: DialogService,
    dialogRef: MatDialogRef<AdminInjectTypeEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  errorFree() {
    return this.data.injectType.name && this.data.injectType.description;
  }

  /**
   * Closes the edit screen
   */
  handleEditComplete(saveChanges: boolean): void {
    if (!saveChanges) {
      this.editComplete.emit({ saveChanges: false, injectType: null });
    } else {
      if (this.errorFree) {
        this.editComplete.emit({
          saveChanges: saveChanges,
          injectType: this.data.injectType,
        });
      }
    }
  }

  getTeamName(teamId: string) {
    const team = this.data.teamList.find(t => t.id === teamId);
    return team.shortName + ' - ' + team.name;
  }

}
