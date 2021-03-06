import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open') isOpen = false;

  @HostListener('click')
  onclick(){
    this.isOpen = !this.isOpen;

  }
  constructor(private elRef: ElementRef,private renderer: Renderer2) {

  }
  ngOnInit(): void {
  }
}
