import { Component,input,ViewEncapsulation,HostBinding,HostListener,inject,ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
     '(click)': 'onClick()'
  }
})
export class ControlComponent {

  // @HostBinding('class') className = 'control';
  // @HostListener('clicl')  onClick(){
  //   console.log('Control clicked:');
  //   // You can add more functionality here, like emitting an event or changing state
  // }

  label = input.required<string>();

  private el = inject(ElementRef);
   onClick(){
    console.log('Control clicked:');
    console.log(this.el);
    // You can add more functionality here, like emitting an event or changing state
  }



 
}
