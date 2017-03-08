import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <button (click) = "videoStart()"> Start Video</button>
  <video #hardware></video>
  `,
})
export class AppComponent  { name = 'Angular'; 
@ViewChild('hardware') cameraHardware :any;

constructor(){

}


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

}
