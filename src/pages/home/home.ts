import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	selectedItem: any;
	items: Array<{title: string, note: string, icon: string}>;
	icons: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  	this.icons = [
  		'flask', 'wifi', 'beer', 'football', 'bluetooth', 'boat'
  	];
  	this.selectedItem = navParams.get('item');
  	this.items = [];
  	for (let i = 1; i <= 10; i++){
  		this.items.push(
	  		{
	  			title: 'Item' + i,
	  			note: 'This is item #' + i,
	  			icon: this.icons[i - 1]
	  		}
  		);
  	}
  }

}
