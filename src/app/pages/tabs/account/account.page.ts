import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  orders: any[] = [];
  isLoading: boolean = false;
  model: any={
    icon:'arrow-round-down',
    title: 'nenhum pedido encontrado'
  };

  constructor() { }

  ngOnInit() {
    this.orders= [
      {
        name: 'Dom Henrique',
        address: 'Guarapuava, PR',
        price: '200.00',
        status: 'entregue',
        foods:[
          'pizza x2 ',
          'buger x2'
        ],
        date: 'janeiro 24, 2024'
      },
      {
        name: 'Dom Henrique 3',
        address: 'Guarapuava, PR',
        price: '80.00',
        status: 'entregue',
        foods:[
          'pizza x1 ',
          'refrigerante x2'
        ],
        date: 'janeiro 24, 2024'
      }
    ]
  }

}
