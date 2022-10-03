import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector:'[scroll-down]'
})

export class scrollDownDirective {
  constructor(private el:ElementRef){}

  @HostListener('window:scroll',['$event'])
  onWindowScroll(){
    let element = document.querySelector('.navbar') as HTMLElement;
    if(window.pageYOffset > element.clientHeight){
      element.classList.add('scrolled');
    } else{
      element.classList.remove('scrolled');
    }
  }

}
