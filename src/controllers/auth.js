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
const router_1 = __importDefault(require("@koa/router"));
const auth_1 = require("../services/auth/auth");
const router = new router_1.default();
router.post('/register', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = ctx.request.body;
    yield auth_1.register(name, email, password);
    ctx.status = 201;
}));
router.post('/login', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('asd');
    const { email, password } = ctx.request.body;
    const user = yield auth_1.login(email, password);
    ctx.body = user;
    ctx.status = 200;
}));
exports.default = router.routes();
