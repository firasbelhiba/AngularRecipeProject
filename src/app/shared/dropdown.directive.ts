import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective implements OnInit {

    constructor(private Elref: ElementRef, private renderer: Renderer2) { }
    @HostBinding('class.open') isOpen = false;
    ngOnInit() {

    }
    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}