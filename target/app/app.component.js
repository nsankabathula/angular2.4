"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent.prototype.videoStart = function () {
        var video = this.cameraHardware.nativeElement;
        var nav = navigator;
        //console.log('nav', nav);
        nav.getUserMedia = (nav.getUserMedia || nav.webkitGetUserMedia || nav.mozGetUserMedia || nav.msGetUserMedia);
        console.log('nav', nav);
        if (nav.getUserMedia) {
            try {
                nav.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                });
            }
            catch (e) {
                console.error("videoStart error", e);
            }
        }
        else {
            alert('Browser does not support navigator.getUserMedia.');
        }
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('hardware'),
    __metadata("design:type", Object)
], AppComponent.prototype, "cameraHardware", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello {{name}}</h1>\n  <button (click) = \"videoStart()\"> Start Video</button>\n  <video #hardware></video>\n  ",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map