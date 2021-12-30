import {Recipe} from "./receipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) {
  }
  private recipes: Recipe[] = [
    new Recipe("Fideos con tomate","Fideos con tomate",
      "https://p1.pxfuel.com/preview/52/761/123/spaghetti-tomato-sauces-pasta-italian-noodles-sauce.jpg",
      [new Ingredient('Tomato',2),new Ingredient('Noodles',1)])
    ,new Recipe("Pollo a la cerveza","Pollo a la cerveza","https://www.hola.com/imagenes/cocina/recetas/" +
      "20190926150225/pollo-ajillo-con-cerveza/0-727-170/pollo-ajillo-cerveza-m.jpg",
      [new Ingredient('Chicken',1),new Ingredient('Beer',1)])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }


}
