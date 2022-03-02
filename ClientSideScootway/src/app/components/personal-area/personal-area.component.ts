import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';
import { Storage } from 'src/app/class/storage';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
//import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent {
  @Output() storageId: EventEmitter<number> = new EventEmitter();
  myControl = new FormControl();
  storageList: Storage[];
  filteredOptions: Observable<Storage[]>;
  constructor(public storageService: StorageService) {
    // storageService.GetAllStorages().subscribe((storage) => {
    //   this.storageList = JSON.parse(storage.toString());
    // });
    //TODO
    this.storageList = JSON.parse(storageService.s);
    //END TODO
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): Storage[] {
    const filterValue = value;
    return this.storageList?.filter(storage => storage.Name?.indexOf(filterValue) === 0);
  }
  OptionSelected(event: MatAutocompleteSelectedEvent) {

    this.storageId.emit(event.option.value.Id);
  }
  DisplayWith(s: Storage) {
    return s.Name;
  }

}
