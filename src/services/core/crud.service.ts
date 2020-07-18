import HttpService from './http/http.service';
import {container} from "@/utils/inversify.config";
import {IHttpResponse} from "@/interfaces/response/IHttpResponse";
import {IPaginateResponse} from "@/interfaces/response/IPaginateResponse";


export class CrudServices<Titem, Tinput, Tupdate> {
    protected readonly httpService: HttpService;
    constructor(protected readonly serviceUrl: string) {
        this.httpService = container.get<HttpService>(HttpService);
    }
    async getAll(skip: number, limit: number): Promise<IHttpResponse<IPaginateResponse<Titem>>> {
        const response = await this.httpService.get<IPaginateResponse<Titem>>(this.serviceUrl, {
            params: { skip, limit }
        });
        return response;
    }
    async getOne(id: string): Promise<IHttpResponse<Titem>> {
        return await this.httpService.get<Titem>(`${this.serviceUrl}/${id}`);
    }
    async create(input: Tinput): Promise<IHttpResponse<Titem>> {
        return await this.httpService.post<Tinput, Titem>(this.serviceUrl, input);
    }
    async update(id: string, input: Tupdate): Promise<IHttpResponse<Titem>> {
        return await this.httpService.put<Tupdate, Titem>(`${this.serviceUrl}/${id}`, input);
    }
    async delete(id: string): Promise<IHttpResponse<Titem>> {
        return await this.httpService.delete<any, Titem>(this.serviceUrl);
    }
}
