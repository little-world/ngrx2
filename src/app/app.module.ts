import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {StoreModule} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
// import {EffectsModule} from '@ngrx/effects';
// import {ToDoEffects} from './todo.effects';
import { reducers} from './todo.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([ToDoEffects, , ]),
    // StoreModule.forRoot({}, {}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
