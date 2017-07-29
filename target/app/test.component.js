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
var random_service_1 = require("./service/random.service");
var TestComponet = (function () {
    function TestComponet(svc) {
        this.svc = svc;
        this.name = "Child";
        this.random = 1;
    }
    TestComponet.prototype.ngOnInit = function () {
        console.log('child ngOnInit');
        //this.increment();
    };
    TestComponet.prototype.incrementClick = function (event) {
        console.log('incrementClick', event);
        this.increment(this.random);
    };
    TestComponet.prototype.increment = function (num) {
        var _this = this;
        num = (num) ? num : this.random;
        var source = this.svc.getRandom(this.random + num);
        source.subscribe(function (result) {
            console.log('increment', result);
            _this.random = result;
        }, function (error) { }, function () {
            console.log('increment - complete');
        });
    };
    return TestComponet;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TestComponet.prototype, "random", void 0);
TestComponet = __decorate([
    core_1.Component({
        selector: 'test-comp',
        template: "\n  \n  <h2> {{name}} : {{random}}</h2>\n  <button (click) =\"incrementClick($event)\"> Increment</button>\n  \n  ",
    }),
    __metadata("design:paramtypes", [random_service_1.RandomService])
], TestComponet);
exports.TestComponet = TestComponet;
//# sourceMappingURL=test.component.js.map