import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../shared/todo-service';
// import { HomePage } from '../home/home';


@Component({
  selector: 'page-todo-item',
  templateUrl: 'todo-item.html'
})
export class TodoItemPage {

  todo: any;



  constructor(public todoService: TodoService, public navCtrl: NavController, public navParams: NavParams){
      this.todo = this.navParams.get('todo');
  }

  public close(){
    this.navCtrl.pop();
  }
  // public addTodo(){
  //   this.todoService.push({
  //     title: this.title,
  //     date: this.date,
  //     time: this.time,
  //     done: false
  //   });
  //   this.showSuccessMessage();
  //   this.navCtrl.push(HomePage);
  //   // @Todo: Prikazati poruku korisniku i vratiti se na home stranu
  // }

  // public showSuccessMessage(){
  //   this.alertController.create({
  //     title: 'Success',
  //     subTitle: 'You have created new Todo!',
  //     buttons: ['Dismiss']
  //   }).present();
  // }

	// selectedItem: any;
	// items: Array<{title: string, note: string, icon: string}>;
	// icons: string[];

 //  constructor(public navCtrl: NavController, public navParams: NavParams) {


 //  	this.icons = [
 //  		'flask', 'wifi', 'beer', 'football', 'bluetooth', 'boat'
 //  	];
 //  	this.selectedItem = navParams.get('item');
 //  	this.items = [];
 //  	for (let i = 1; i <= 10; i++){
 //  		this.items.push(
	//   		{
	//   			title: 'Item' + i,
	//   			note: 'This is item #' + i,
	//   			icon: this.icons[i - 1]
	//   		}
 //  		);
 //  	}
 //  }



}
