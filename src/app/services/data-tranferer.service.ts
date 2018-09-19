import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTranfererService {

  @Output() userName = new EventEmitter();
  @Output() starNum = new EventEmitter();

  private starData = new BehaviorSubject(null);
  private userStarData = new BehaviorSubject(null);
  private usernameData = new BehaviorSubject(null);
  private scheduleInfoData = new BehaviorSubject(null);
  private costData = new BehaviorSubject(null);
  private costsData = new BehaviorSubject(null);

  username$ = this.usernameData.asObservable();
  stars$ = this.starData.asObservable();
  userStars$ = this.userStarData.asObservable();
  scheduleInfo$ = this.scheduleInfoData.asObservable();
  cost$ = this.costData.asObservable();
  costs$ = this.costsData.asObservable();

  constructor() { }

  transferStarData(stars) {
    this.starData.next(stars)
  }
  transferUserStars(stars) {
    this.userStarData.next(stars)
  }
  transferUsername(name) {
    this.usernameData.next(name)
  }
  transferScheduleInfo(schedule) {
    this.scheduleInfoData.next(schedule)
  }
  transferCost(cost, type) {
    this.costData.next({
      cost:cost,
      type:type
    })
  }
  transferCosts(costs) {
    this.costsData.next(costs)
  }
}
