import { Component } from '@angular/core';

@Component({
  selector: 'lib-cart',
  standalone: true,
  imports: [],
  templateUrl: 'cart.component.html',
  styleUrl: 'cart.component.scss',
})
export class CartComponent {
  public cartItems: Array<{ sku: string; name: string; price: number }> = [
    { sku: '1', name: 'Milk', price: this._randomPrice() },
    { sku: '2', name: 'Eggs', price: this._randomPrice() },
    { sku: '3', name: 'Oranges', price: this._randomPrice() },
    { sku: '4', name: 'Flour', price: this._randomPrice() },
  ];

  private _randomPrice(): number {
    return (
      Math.floor(Math.random() * 1000) + Math.ceil(Math.random() * 100) / 100
    );
  }
}
