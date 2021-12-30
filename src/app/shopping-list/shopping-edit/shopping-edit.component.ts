import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  handleSubmit($event){
    $event.preventDefault();
    const ingredientName :string = this.nameInput.nativeElement.value;
    const ingredientAmount: number = Number(this.amountInput.nativeElement.value);
    const ingredient = new Ingredient(ingredientName,ingredientAmount);
    this.shoppingListService.addIngredient(ingredient);
  }

}
