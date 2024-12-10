"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAsyncErrors = void 0;
const handleAsyncErrors = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
exports.handleAsyncErrors = handleAsyncErrors;
