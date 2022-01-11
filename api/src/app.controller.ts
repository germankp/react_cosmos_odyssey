import { Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { Axios, AxiosResponse } from 'axios';

type JsonData = { [key: string]: JsonData | boolean | number | string };
@Controller()
export class AppController {
  constructor(
    @Inject(HttpService)
    private readonly httpService: HttpService,
  ) {}

  @Get('travels')
  getTravels() {
    return this.httpService
      .get('https://cosmos-odyssey.azurewebsites.net/api/v1.0/TravelPrices')
      .pipe(map((response) => response.data));
  }
}
