import * as Axios from "axios";
import { injectable } from "inversify";
import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { IHttpResponse } from "@/interfaces/services/IHttpResponse";

@injectable()
export default class HttpService {
    protected static timeout: number = 60000;
    public baseUrl?: string = undefined;
    private failureCount: number = 0;
    public static accessToken: string;
    public static language: string;

    //public online(): Promise<Axios.AxiosResponse> {
    //    return this.get("api/v1/online");
    //}

    public async get<TResponse>(url: string, data?: AxiosRequestConfig): Promise<IHttpResponse<TResponse>> {
        try {
            const config = await this.getConfig(data);
            const result = await this.httpClient().get(url, config);
            this.failureCount = 0;
            return {
                success: true,
                result: result.data,
            };
        } catch (reason) {
            return {
                success: false,
                message: this.handleError(reason).message
            };
        }
    }

    public async post<TRequest, TResponse>(url: string, data: TRequest, dataConfig?: AxiosRequestConfig): Promise<IHttpResponse<TResponse>> {
        try {
            const config = await this.getConfig(dataConfig);
            const result = await this.httpClient().post(url, data, config);
            this.failureCount = 0;
            return {
                success: true,
                result: result.data,
            };
        } catch (reason) {
            return {
                success: false,
                message: this.handleError(reason).message
            };
        }
    }

    public async patch<TRequest, TResponse>(url: string, data: TRequest, dataConfig?: AxiosRequestConfig): Promise<IHttpResponse<TResponse>> {
        try {
            const config = await this.getConfig(dataConfig);
            const response = await this.httpClient().patch(url, data, config);
            this.failureCount = 0;
            return {
                success: true,
                result: response.data,
            };
        } catch (reason) {
            return {
                success: false,
                message: this.handleError(reason).message
            };
        }
    }

    public async put<TRequest, TResponse>(url: string, data: TRequest, dataConfig?: AxiosRequestConfig): Promise<IHttpResponse<TResponse>> {
        try {
            const config = await this.getConfig(dataConfig);
            const response = await this.httpClient().put(url, data, config);
            this.failureCount = 0;
            return {
                success: true,
                result: response.data,
            };
        } catch (reason) {
            return {
                success: false,
                message: this.handleError(reason).message
            };
        }
    }

    public async delete<TRequest, TResponse>(url: string, data?: TRequest, dataConfig?: AxiosRequestConfig): Promise<IHttpResponse<TResponse>> {
        try {
            const config = await this.getConfig(dataConfig);
            const response = await this.httpClient().delete(url, data ? { ...config, data } : { ...config });
            this.failureCount = 0;
            return {
                success: true,
                result: response.data,
            };
        } catch (reason) {
            return {
                success: false,
                message: this.handleError(reason).message
            };
        }
    }

    public setup(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    protected handleError(error: AxiosError) {
        let msg;
        if (error.response && error.response.status) {
            switch (error.response.status) {
                case 404:
                    msg = { message: "Not found", status: error.response.status };
                case 401:
                    msg = { message: "Access is denied", status: error.response.status };
                    // if (this.failureCount < 3) {
                    //     this.failureCount++;
                    //     authenticationService.loginSilentAsync();
                    // }
                    // break;
                case 400:
                    if (error.response.data.messages) {
                        msg = { message: error.response.data.messages[0].body };
                    } else {
                        msg = error.response.data.error && error.response.data.error === "invalid_grant"
                            ? { message: "Access is denied" }
                            : error;
                    }
                    break;
                default:
                    msg = { message: error.response.data.error ? error.response.data.error : error, status: error.response.status };
                    break;
            }
        } else {
            msg = error;
        }
        return msg;
    }

    private httpClient(): AxiosInstance {
        return Axios.default.create({
            baseURL: this.baseUrl,
            timeout: HttpService.timeout,
        });
    }

    private async getConfig(data?: AxiosRequestConfig) {
        let headers = {} as any;

        // var antiForgeryToken = this.getCookie("XSRF-TOKEN")
        // if (antiForgeryToken) {
        //     headers["X-XSRF-TOKEN"] = antiForgeryToken;
        // }

        if (HttpService.accessToken) {
            headers['Authorization'] = `Bearer ${HttpService.accessToken}`;
        }
        if (HttpService.language || localStorage.getItem('token')) {
            headers['language'] = HttpService.language || localStorage.getItem('token');
        }

        return Object.assign(data || {}, {
            headers: headers
        });
    }

    private getCookie(name: string) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
    }
}
