import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public dis = false

  public green = "text-danger"

  public hasErrors = true;
  public toggleDiv = true;

  public displayToggle = true;
  
  public special = true;
  
  public styleBinding = "orange"
  
  public greeting = ""

  public inputText = ""

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  
  public classMessages = {
    "text-danger": this.hasErrors,
    "text-success": !this.hasErrors,
    "text-special": this.special
  }

  public toggleClasses = {
    "text-danger": null,
    "text-success": null
  }
  
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    var that = this;
    this.toggleDiv = false
    this.greeting = "Hey"
    this.hasErrors = false;
    this.classMessages["text-danger"] = !this.classMessages["text-danger"];
    this.classMessages["text-success"] = !this.classMessages["text-success"];
    setTimeout(function(){
      that.greeting = "";
      that.hasErrors = true
    }, 1000)
  }

  hit(event){
    console.log(event)
    this.greeting = "Check Console"
  }

  toggle(){
    this.dis = !this.dis
      this.displayToggle = !this.displayToggle;
  }

  greenToggle(){
    this.toggleClasses["text-danger"] = false;
    this.toggleClasses["text-success"] = true
  }

  redToggle(){
    this.toggleClasses["text-danger"] = true;
    this.toggleClasses["text-success"] = false
  }

  sendButton(value){
    this.inputText = value
  }

}
