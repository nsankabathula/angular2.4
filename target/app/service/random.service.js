"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/observable/of");
var RandomService = (function () {
    function RandomService() {
        this.random = new Subject_1.Subject();
    }
    RandomService.prototype.getRandom = function (num) {
        console.log('getRandom', num, this.random.observers);
        this.random.next(num);
        return this.random.asObservable();
    };
    return RandomService;
}());
RandomService = __decorate([
    core_1.Injectable()
], RandomService);
exports.RandomService = RandomService;
//# sourceMappingURL=random.service.js.map