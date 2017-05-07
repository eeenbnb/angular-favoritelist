import { Component ,Input} from '@angular/core';

@Component({
  selector: 'human-info',
  template:`
  <div class="animated bounce" [class.bounce]="animate" (mouseenter)="over()" (mouseleave)="out()">
    <div class="card animated bounceInUp" [style.animation-delay]="getSeq()">
      <div class="card-image">
        <img [src]="info['pic']? info['pic']:'assets/no_image.png'">
        <span class="card-title">{{info["name"]}}</span>
        <a *ngIf="info['url']" class="btn-floating halfway-fab waves-effect waves-light blue" [href]="info['url']" target="_brank"><i class="material-icons">link</i></a>
      </div>
      <div class="card-content">
        <p>{{info["into"]}}</p>
      </div>
   </div>
 </div>
 `,
  styles: [``],
  inputs:["info","seq"]
})
export class HumanInfoComponent{
  @Input() info:string[];
  @Input() seq:number;
  animate:boolean = false;

  constructor(){

  }

  over(){
    this.animate = true;
  }
  out(){
    this.animate = false;
  }
  getSeq(){
    return String(this.seq *100) + "ms";
  }
}
