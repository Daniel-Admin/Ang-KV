import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} World</h1> <br><hr><home></home>`,
})
export class AppComponent  { name = 'Angular'; }
