import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class DatafeedsService {

  constructor() { }
  getMenus(): Observable<any>{
    //mimic the json response from service
    const response = {
        "data" : [
          {"name":"PROSCIUTTO & CELERIAC SALAD","description":"Our famous San Daniele prosciutto with tarragon & a tangy yoghurt & mustard dressing"},
          {"name":"PAPPA AL POMODORO SOUP","description":"Italian red pepper, tomato, garlic & bread soup topped with veggie Parmesan, basil & extra virgin olive oil"},
          {"name":"CREAMY WELSH MUSSELS","description":"Welsh rope-grown mussels cooked in cream & cider, with garlic, chives & toasted paysan"},
          {"name":"Truffle tagliatelle","description":"Our famous handmade pasta served in a luxurious, silky black truffle butter with aged Parmesan, nutmeg & more shaved black truffle."},
          {"name":"CRISPY SQUID & SMASHED AVO","description":"Crispy fried sustainable squid with ery smashed avocado for dunking"}]
    }
    return Observable.fromPromise(new Promise(function(resolve, reject){
      resolve(response);
    }));
  }
}
