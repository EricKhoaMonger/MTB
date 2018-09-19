import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../../models/user';
import { WOW } from 'wowjs'
import { DataTranfererService } from '../../../services/data-tranferer.service';
import * as moment from 'moment';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit {
  @ViewChild('thoughtForm') tf;
  @ViewChild('btnTriggerModal') btnTriggerModal : ElementRef;

  userThoughtsArr: Array<any> = [];
  profilePic: string;
  localUser: User;

  constructor(
    private starTransferer: DataTranfererService,
    private alerts:AlertsService
  ) {
  }

  detele(val: number) {
    for (let i = 0; i < this.userThoughtsArr.length; i++) {
      if (val == i) {
        this.userThoughtsArr.splice(i, 1)
      }
    }
    localStorage.setItem('thoughtList', JSON.stringify(this.userThoughtsArr))
  }

  ngOnInit() {
    let wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated'
    });
    wow.init();

    this.localUser = JSON.parse(localStorage.getItem('currentUser'));
    this.profilePic = 'https://www.nztcc.org/themes/kos/images/avatar.png';

    this.userThoughtsArr = (JSON.parse(localStorage.getItem('thoughtList')) !== null) ? JSON.parse(localStorage.getItem('thoughtList')) : [];
  }


  PostThought(data: any) {
    console.log(data)
    this.tf = data;
    let userThought = {
      userName: this.localUser.HoTen,
      userId:this.localUser.TaiKhoan,
      thought: this.tf.value.thoughts,
      rates: null,
      date: moment().format('LLL'),
      needEditting:false
    }
    this.starTransferer.userStars$.subscribe(
      (stars => {
        userThought.rates = stars

        if (!this.tf.valid && !this.tf.submitted) {
          return
        } else {
          this.userThoughtsArr.unshift(userThought);
          localStorage.setItem('thoughtList', JSON.stringify(this.userThoughtsArr))

          this.tf.valid = false;
          this.tf.submitted = false
        }
      })
    )
  }

  editReview(review: any,index:any) {    
    let currentReview = this.userThoughtsArr.find(item => item === review);
    currentReview.needEditting = !currentReview.needEditting;
  }

  cancelEdit(review:any) {
    let currentReview = this.userThoughtsArr.find(item => item === review);
    currentReview.needEditting = false;
  }

  confirmEdit(review:any, updatedThought:string){
    let oldReview = this.userThoughtsArr.find(item => item === review);        
    oldReview.thought = updatedThought;
    oldReview.needEditting = false;

    localStorage.setItem('thoughtList', JSON.stringify(this.userThoughtsArr))
  }
}

