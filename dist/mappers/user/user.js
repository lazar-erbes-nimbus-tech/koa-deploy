"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMapper = void 0;
const userMapper = (user) => {
    return {
        id: user._id,
        name: user.name,
        email: user.email,
    };
};
exports.userMapper = userMapper;
