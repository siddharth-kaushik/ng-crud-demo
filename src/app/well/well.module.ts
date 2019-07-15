import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@material/material.module';

import { ActionTitleComponent } from './components/action-title/action-title.component';
import { AddWellComponent } from './components/add-well/add-well.component';
import { DeleteWellComponent } from './components/delete-well/delete-well.component';
import { EditWellComponent } from './components/edit-well/edit-well.component';
import { WellDetailsComponent } from './components/well-details/well-details.component';
import { WellFormComponent } from './components/well-form/well-form.component';
import { WellHistoryItemComponent } from './components/well-history-item/well-history-item.component';
import { WellHistoryComponent } from './components/well-history/well-history.component';
import { WellListItemComponent } from './components/well-list-item/well-list-item.component';
import { WellListComponent } from './components/well-list/well-list.component';
import { WellStatusComponent } from './components/well-status/well-status.component';
import { WellTextComponent } from './components/well-text/well-text.component';
import { WellTimestampComponent } from './components/well-timestamp/well-timestamp.component';

const COMPONENTS = [
  WellListComponent,
  WellListItemComponent,
  WellDetailsComponent,
  WellStatusComponent,
  WellTextComponent,
  WellHistoryComponent,
  ActionTitleComponent,
  WellTimestampComponent,
  WellHistoryItemComponent,
  WellFormComponent
];

@NgModule({
  declarations: [
    COMPONENTS,
    AddWellComponent,
    EditWellComponent,
    DeleteWellComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  exports: [COMPONENTS],
  entryComponents: [AddWellComponent, EditWellComponent, DeleteWellComponent]
})
export class WellModule {}
