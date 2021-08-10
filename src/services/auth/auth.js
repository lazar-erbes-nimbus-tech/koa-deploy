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
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../../mappers/user/user");
const user_2 = require("../../models/user/user");
const register = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt(10);
    const encryptedPw = yield bcrypt_1.default.hash(password, salt);
    return user_2.User.create({ name, email, password: encryptedPw })
        .then(user_1.userMapper);
});
exports.register = register;
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_2.User.findOne({ email: email });
    if (!user) {
        throw new Error('There is no user with this email');
    }
    const comparedPw = yield bcrypt_1.default.compare(password, user.password);
    if (!comparedPw) {
        throw new Error('Wrong password');
    }
    const jwtToken = jsonwebtoken_1.default.sign({ username: user.name }, 'secret_key');
    return {
        id: user._id,
        jwt: jwtToken,
        name: user.name,
        email: user.email,
    };
});
exports.login = login;
