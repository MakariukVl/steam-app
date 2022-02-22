import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@core/app-routing.module';
import { LabelComponent } from './components/label/label.component';
import { FieldTextComponent } from './components/field-text/field-text.component';
import { ButtonComponent } from './components/button/button.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { RangeFieldComponent } from './components/range-field/range-field.component';
import { RangeLabeledFieldComponent } from './components/range-labeled-field/range-labeled-field.component';
import { BlockFilterComponent } from './components/block-filter/block-filter.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { FormDataDrivenComponent } from './components/form-data-driven/form-data-driven.component';
import { FieldTextLabeledComponent } from './components/field-text-labeled/field-text-labeled.component';
import { RangeSettersComponent } from './components/range-setters/range-setters.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [  
    LabelComponent, FieldTextComponent, ButtonComponent, NavigationComponent, FormSearchComponent, CheckboxFieldComponent, RangeFieldComponent, RangeLabeledFieldComponent, BlockFilterComponent, CardGameComponent, FormDataDrivenComponent, FieldTextLabeledComponent, RangeSettersComponent, AlertComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ButtonComponent, NavigationComponent, FormSearchComponent, CheckboxFieldComponent, RangeLabeledFieldComponent, BlockFilterComponent, CardGameComponent, FormDataDrivenComponent, FieldTextLabeledComponent
  ]
})
export class SharedModule { }
