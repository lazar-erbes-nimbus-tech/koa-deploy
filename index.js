"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const db_config_1 = require("./src/config/db.config");
const koa_body_1 = __importDefault(require("koa-body"));
const koa_router_1 = __importDefault(require("koa-router"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = new koa_1.default();
    yield db_config_1.db.connect();
    app.use(koa_body_1.default());
    const router = new koa_router_1.default();
    app.use(router.routes());
    app.use(router.allowedMethods());
    router.get('/radi', (ctx, next) => {
        console.log('hereee');
        ctx.body = "Hello world";
        ctx.status = 200;
    });
    // app.use(indexRouter.routes())
    // app.use(indexRouter.allowedMethods())
    app.listen(3000, () => {
        console.log('Server is up');
    });
}))();
