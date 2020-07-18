var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import HttpService from './http/http.service';
import { container } from '../../utils/inversify.config';
export class CrudServices {
    constructor(serviceUrl) {
        this.serviceUrl = serviceUrl;
        this.httpService = container.get(HttpService);
    }
    getAll(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.httpService.get(this.serviceUrl, {
                params: { skip, limit }
            });
            return response;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpService.get(`${this.serviceUrl}/${id}`);
        });
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpService.post(this.serviceUrl, input);
        });
    }
    update(id, input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpService.put(`${this.serviceUrl}/${id}`, input);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpService.delete(this.serviceUrl);
        });
    }
}
//# sourceMappingURL=crud.service.js.map