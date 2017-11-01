import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../shared/todo-service';
import { TodoItemPage } from '../todo-item/todo-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	selectedItem: any;
	items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: TodoService, public modalController: ModalController) {


  	this.selectedItem = navParams.get('item');

    this.items = todoService.getAll();
  	
  }

  public showTodoDetails(todo){
    this.modalController.create(
      TodoItemPage,
      { todo: todo }
    ).present();
  }

}
