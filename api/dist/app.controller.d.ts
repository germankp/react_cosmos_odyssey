import { HttpService } from '@nestjs/axios';
export declare class AppController {
    private readonly httpService;
    constructor(httpService: HttpService);
    getTravels(): import("rxjs").Observable<any>;
}
