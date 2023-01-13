"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateProductDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateProductDto = /** @class */ (function () {
    function CreateProductDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: 'The reference of the Product',
            example: '89039-658'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateProductDto.prototype, "ref");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: 'The description of the Product',
            example: 'Disposable / tube centrifuge 50 ml'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateProductDto.prototype, "libelle");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: 'The type of the Product',
            example: 'Disposable / tube centrifuge 50 ml'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateProductDto.prototype, "type");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: 'The quantite of the Product',
            example: '772'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumber)()
    ], CreateProductDto.prototype, "quantite");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: 'The limit we start send alert the lack of product',
            example: '234'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumber)()
    ], CreateProductDto.prototype, "seuil");
    __decorate([
        (0, swagger_1.ApiProperty)({
            description: 'The expiration date of product',
            example: '10/01/2028'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsDate)()
    ], CreateProductDto.prototype, "date_exp");
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ "message": "Seems like something went wrong! please try again" })
    ], CreateProductDto.prototype, "user");
    return CreateProductDto;
}());
exports.CreateProductDto = CreateProductDto;
