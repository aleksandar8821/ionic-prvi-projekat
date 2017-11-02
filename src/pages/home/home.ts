import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { TodoService } from '../../shared/todo-service';
// import { TodoItemPage } from '../todo-item/todo-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	selectedItem: any;
	items: any;
  urgentItems: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: TodoService, public modalController: ModalController, public alertController: AlertController) {

    this.reminder();

  	this.selectedItem = navParams.get('item');

    todoService.getAll().then((todos) => {

    todos.forEach((todo) => {
      if ( (new Date(todo.date + ' ' + todo.time).getTime() > new Date().getTime()) && (new Date(todo.date + ' ' + todo.time).getTime() < new Date().getTime() + 1800000)){
        this.urgentItems.push(todo);
        // console.log(todo);
      }
    });

      this.items = todos;
      console.log(this.urgentItems);
    });
  	
  }

  // public showTodoDetails(todo){
  //   this.modalController.create(
  //     TodoItemPage,
  //     { todo: todo }
  //   ).present();
  // }

  // public todoString(){
  //   this.urgentItems.forEach();
  // }

  public reminder(){
    this.alertController.create({
      title: 'Success',
      subTitle: 'Uskoro treba da uradite sledece:',
      message: this.urgentItems[0].title,
      buttons: ['Dismiss']
    }).present();
  }

}
