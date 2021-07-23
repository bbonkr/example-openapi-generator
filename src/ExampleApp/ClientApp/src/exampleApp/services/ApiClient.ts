import axios, { AxiosError, AxiosInstance } from 'axios';
import { EchoApi, ApiResponseModel } from '../../api/api';
import { Configuration } from '../../api/configuration';

export class ApiClient {
    constructor() {
        const configuration: Configuration = new Configuration({});
        const axiosInstance = this.getAxiosInstance();
        axiosInstance.interceptors.response.use(
            (res) => res,
            (err) => {
                if (axios.isAxiosError(err)) {
                    const axiosErr = err as AxiosError<ApiResponseModel>;

                    throw axiosErr.response;
                }
                throw err;
            },
        );
        this.echo = new EchoApi(configuration, '', axiosInstance);
    }

    public readonly echo: EchoApi;

    private getAxiosInstance(): AxiosInstance {
        const instance = axios.create();

        return instance;
    }
}
