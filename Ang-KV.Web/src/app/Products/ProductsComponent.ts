import { Component } from '@angular/core';

@Component({
    selector: "products",
    template: `<span><button (click)='onclick()'>click</button></span>`
})
export class ProductsComponent
{
    onclick(): void {
        alert('onclick from ProductsComponent');
    }
}