import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/observable/of';

@Injectable()
export class RandomService{
    random:Subject<number> = new Subject<number>();
    getRandom(num:number):Observable<any>{
        console.log('getRandom', num, this.random.observers);
        this.random.next(num);
        
        return this.random;
    }

}