"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectSchema = exports.Project = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var Project = /** @class */ (function () {
    function Project() {
    }
    __decorate([
        mongoose_1.Prop()
    ], Project.prototype, "name");
    __decorate([
        mongoose_1.Prop()
    ], Project.prototype, "description");
    __decorate([
        mongoose_1.Prop()
    ], Project.prototype, "duration");
    __decorate([
        mongoose_1.Prop()
    ], Project.prototype, "stateDate");
    __decorate([
        mongoose_1.Prop()
    ], Project.prototype, "endDate");
    __decorate([
        mongoose_1.Prop()
    ], Project.prototype, "cost");
    Project = __decorate([
        mongoose_1.Schema()
    ], Project);
    return Project;
}());
exports.Project = Project;
exports.ProjectSchema = mongoose_1.SchemaFactory.createForClass(Project);
