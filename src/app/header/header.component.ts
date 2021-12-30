import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector : 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output() menuSelected = new EventEmitter<{menu:string}>();
  ngOnInit(): void {
  }

  onSelectMenu(option){
    this.menuSelected.emit({menu:option})
  }


}
