import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../shared/todo-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	selectedItem: any;
	items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: TodoService) {


  	this.selectedItem = navParams.get('item');

    this.items = todoService.getAll();
  	
  }

}
