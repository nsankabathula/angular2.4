import { Component, ViewChild, Input } from '@angular/core';
import {RandomService} from './service/random.service';

@Component({
  selector: 'test-comp',
  template: `
  
  <h2> {{name}} : {{random}}</h2>
  <button (click) ="incrementClick($event)"> Increment</button>
  
  `,
})
export class TestComponet  { 
    name:string = "Child";
    @Input()
    random:number = 1;

    constructor(private svc: RandomService){

    }   
    
    ngOnInit(){
        console.log('child ngOnInit');
        //this.increment();
  
    }   
    incrementClick(event:any){
        console.log('incrementClick', event);
        this.increment(this.random);
    }
    increment(num?:number){
        num = (num)? num:this.random;
        const source = this.svc.getRandom(this.random +num);
        source.subscribe(
            (result:any)=>{
                console.log('increment', result);
                this.random =  result
            },
            (error:any)=>{},
            ()=>{
                console.log('increment - complete')
            }
        );
        
    }
}