var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { connection } from '../database/database.js';
export function returnAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, connection.query('SELECT * FROM List;')];
        });
    });
}
export function insertOne(newItem) {
    return __awaiter(this, void 0, void 0, function () {
        var item, unidade, descrição;
        return __generator(this, function (_a) {
            item = newItem.item, unidade = newItem.unidade, descrição = newItem.descrição;
            return [2 /*return*/, connection.query("\n        INSERT INTO\n            List (item, unidade, descri\u00E7\u00E3o)\n        VALUES\n        ($1, $2, $3);", [item, unidade, descrição])];
        });
    });
}
export function updateItem(itemData, itemId) {
    return __awaiter(this, void 0, void 0, function () {
        var item, unidade, descrição;
        return __generator(this, function (_a) {
            item = itemData.item, unidade = itemData.unidade, descrição = itemData.descrição;
            if (item.length !== 0) {
                connection.query("UPDATE List SET item=$1 WHERE id = $2;", [item, itemId]);
            }
            ;
            if (unidade !== 0) {
                connection.query("UPDATE List SET unidade=$1 WHERE id = $2;", [unidade, itemId]);
            }
            if (descrição.length !== 0) {
                connection.query("UPDATE List SET descri\u00E7\u00E3o=$1 WHERE id = $2;", [descrição, itemId]);
            }
            return [2 /*return*/];
        });
    });
}
export function existingItem(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, connection.query('SELECT * FROM List WHERE id = ($1);', [id])];
        });
    });
}
export function deleteItem(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, connection.query('DELETE * FROM List WHERE id = ($1);', [id])];
        });
    });
}
export function deleteList() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, connection.query('DELETE * FROM List')];
        });
    });
}
export function countList() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, connection.query('SELECT COUNT(*) FROM List;')];
        });
    });
}
