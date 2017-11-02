import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template:`<h1>Home Component</h1><br><h4>{{name}}</h4><img [src]='imagePath'/>`
})
export class HomeComponent
{
    name = 'Kar';
    imagePath: string = "http://www.stylisheve.com/wp-content/uploads/2012/01/Hairstyles-for-over-50-men_10.jpg";
}