import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardBorder]'
})
export class CardBorderDirective implements OnInit {
  //elem!: HTMLBaseElement;

  @Input() appCardBorder = '';

  constructor(private el: ElementRef) {
   }

   ngOnInit(): void {
     let resultDate = new Date(this.appCardBorder).getTime();

     let month = new Date();
     month.setDate(month.getDate() - 30);

     let week = new Date();
     week.setDate(week.getDate() - 7);

     let halfYear = new Date();
     halfYear.setMonth(halfYear.getMonth() - 6);

     if (resultDate < halfYear.getTime()) {
      this.el.nativeElement.style.borderBottom = '5px solid red';
     } else if (resultDate > week.getTime()) {
      this.el.nativeElement.style.borderBottom = '5px solid blue';
     } else {
      this.el.nativeElement.style.borderBottom = '5px solid green';
     }
   }

}
