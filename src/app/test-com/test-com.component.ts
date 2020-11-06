import { Component } from '@angular/core';

// import { products } from '../products';

@Component({
  selector: 'app-test-com',
  templateUrl: './test-com.component.html',
  styleUrls: ['./test-com.component.css']
})
export class TestComponent {
  // products = products;

  share() {
    window.alert('The product has been shared!');
  }
}