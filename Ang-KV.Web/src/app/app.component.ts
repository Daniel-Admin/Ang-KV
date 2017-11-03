import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}} World</h1> <br><hr><home></home><br><hr>
<products></products>`,
})
export class AppComponent  { name = 'Angular'; }
