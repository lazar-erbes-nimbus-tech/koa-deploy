"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const auth_1 = __importDefault(require("./auth"));
const combinedRouter = new router_1.default();
combinedRouter.use('/users', auth_1.default);
exports.default = combinedRouter;
