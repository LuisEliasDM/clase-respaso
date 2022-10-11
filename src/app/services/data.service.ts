import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public session$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
  public localStorage$: Observable<any>;

  constructor() {
    this.localStorage$ = this.session$.pipe(
      tap( (session: any) => {
        localStorage.setItem('session', JSON.stringify(session))
      })
    )

    this.localStorage$.subscribe();
  }


}
