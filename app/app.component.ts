import { Component, ViewChild } from '@angular/core';
import {RandomService} from './service/random.service';

@Component({
  selector: 'my-app',
  template: `
  
  <h1>Hello {{name}} : {{num}}</h1>
  <!--<button (click) = "videoStart()"> Start Video</button>
  <video #hardware></video>-->
  <test-comp random="100"> </test-comp> 
  <br/>
  <test-comp> Child 2</test-comp>
  `,
})
export class AppComponent  { 
  name = 'Parent'; 
  num:number = 0;
//@ViewChild('hardware') cameraHardware :any;

constructor(private svc: RandomService){

}
ngOnInit(){

  this.svc.getRandom(100).subscribe(
    (result:any)=>{
      console.log('parent', result);
      this.num = result;
    }
  );
  
}
/*
videoStart(){
  let video = this.cameraHardware.nativeElement;

  var nav = <any> navigator;
  //console.log('nav', nav);
  nav.getUserMedia = (nav.getUserMedia|| nav.webkitGetUserMedia || nav.mozGetUserMedia || nav.msGetUserMedia);
  console.log('nav', nav);
  if(nav.getUserMedia){
  try{
  nav.mediaDevices.getUserMedia(
    {video:true}
  ).then(function(stream:any){
    video.src = window.URL.createObjectURL(stream);
    video.play();
  });

  } catch(e){
    console.error("videoStart error", e);
  }
  }
  else{
    alert('Browser does not support navigator.getUserMedia.')
  }

}
*/

}
