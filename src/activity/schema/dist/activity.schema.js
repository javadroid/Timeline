"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ActivitySchema = exports.Activity = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var Activity = /** @class */ (function () {
    function Activity() {
    }
    __decorate([
        mongoose_1.Prop()
    ], Activity.prototype, "name");
    __decorate([
        mongoose_1.Prop()
    ], Activity.prototype, "project");
    __decorate([
        mongoose_1.Prop()
    ], Activity.prototype, "description");
    __decorate([
        mongoose_1.Prop()
    ], Activity.prototype, "duration");
    __decorate([
        mongoose_1.Prop()
    ], Activity.prototype, "startDate");
    __decorate([
        mongoose_1.Prop()
    ], Activity.prototype, "endDate");
    __decorate([
        mongoose_1.Prop()
    ], Activity.prototype, "progress");
    Activity = __decorate([
        mongoose_1.Schema()
    ], Activity);
    return Activity;
}());
exports.Activity = Activity;
exports.ActivitySchema = mongoose_1.SchemaFactory.createForClass(Activity);
