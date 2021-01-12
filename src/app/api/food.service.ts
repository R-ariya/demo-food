import { Configuration } from 'protractor/node_modules/yargs/build/lib/yargs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  protected basePath = '/food';
  constructor(protected httpClient: HttpClient, @Optional() configuration: Configuration) {

  }

}
