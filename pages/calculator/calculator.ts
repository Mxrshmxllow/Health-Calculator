import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
  styleUrls:['calculator.css']
})
export class CalculatorPage {
  feet: number;
  inches: number;
  robinson: number;
  miller: number;
  hamwi: number;
  devine: number;
  gender: string;
  message: string;

  constructor(public navCtrl: NavController) {

  }
calculateIBW(){
  this.robinson = parseFloat(this.robinson.toFixed(2))
  this.miller = parseFloat(this.miller.toFixed(2))
  this.hamwi = parseFloat(this.hamwi.toFixed(2))
  this.devine = parseFloat(this.devine.toFixed(2))

  if (this.feet = 5, this.gender ="m"){
    this.robinson = 52 + (1.9*this.inches)
    this.miller = 56.2 + (1.41*this.inches)
    this.hamwi = 48 + (2.7*this.inches)
    this.devine = 50 + (2.3*this.inches)
  }
  else if (this.feet = 5, this.gender ="f"){
    this.robinson = 49 + (1.7*this.inches)
    this.miller = 53.1 + (1.36*this.inches)
    this.hamwi = 45.5 + (2.2*this.inches)
    this.devine = 45.5 + (2.3*this.inches)
  }

  this.message = "Robinson (1983): " + this.robinson + "\nMiller (1983): " + this.miller + "\nHamwi (1964): " + this.hamwi + "Devine (1974): " + this.devine;


  }
}


