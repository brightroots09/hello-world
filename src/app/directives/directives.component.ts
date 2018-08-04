import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public displayName = false

  public displayDirective = true

  public color = null

  public colors = ["red", "green", "blue", "yellow"]

  
  @Input("parentData") public name;
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }


  hitMe(){
    this.displayDirective = !this.displayDirective
    this.displayName = !this.displayName
  }

  switchRed(){
    this.color = "red"
  }
  switchGreen(){
    this.color = "green" 
  }
  switchDefault(){
    this.color = "none"
  }

  eventEmit(){
    this.childEvent.emit("This is directives component")
  }

}
