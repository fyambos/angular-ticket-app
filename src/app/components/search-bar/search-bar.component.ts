import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskState } from 'src/app/model/task.model';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  TaskState = TaskState;
  searchTerm = '';
  currentState = 'ALL';
  @Input() showDeleteIcon = false;
  @Output() search = new EventEmitter<string | undefined>();
  @Output() add = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() state = new EventEmitter<string>();
  
  constructor(public readonly languageService: LanguageService) {}

  submitSearch = () => {
    this.search.emit(this.searchTerm);
  }

  switchSate = (state: string) => {
    this.currentState = state;
    this.state.emit(state);
  }

  addNewTask = () => {
    this.add.emit();
  }
}
