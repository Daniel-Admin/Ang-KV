import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template:`<h1>Home Component</h1><br><h4>{{name}}</h4>`
})
export class HomeComponent
{
    name = 'Kar';
}