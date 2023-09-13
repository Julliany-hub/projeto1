import { Component } from '@angular/core';
import { Cardapio } from './Cardapio';
import { CardapioserviceService } from 'src/app/services/cardapioservice.service';


@Component({
  selector: 'app-cardapio',
  templateUrl:'./cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {

  constructor(private Cardapioservice: CardapioserviceService){
    this.getCardapio()
  }


  ngOnInit():void{}

  cardapios: Cardapio[] = [];

  getCardapio():void{
    this.Cardapioservice.getAll().subscribe((Cardapio) => (this.cardapios = Cardapio));
  }

}
