import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-news-cat',
  templateUrl: './news-cat.component.html',
  styleUrls: ['./news-cat.component.scss']
})
export class NewsCatComponent implements OnInit {
  categoryStatus: string = 'break';
  newsList:Object;

  constructor() { }

  ngOnInit() {
    let type = 'break';
    let list = [
      { TieuDe: "Marvel mua lại DC", HinhAnh: 'https://i.ytimg.com/vi/qR0s2Cc0zBU/maxresdefault.jpg', NgayPost: '22/2/2018' },
      { TieuDe: "Ferdinand", HinhAnh: 'http://www.joblo.com/newsimages1/joblo-cast-this.jpg', NgayPost: '23/2/2018' },
      { TieuDe: "Trùm Hương Cảng", HinhAnh: 'https://i.ytimg.com/vi/NgcU9nSDMoY/maxresdefault.jpg', NgayPost: '24/2/2018' },
      { TieuDe: "Khuyến Mãi 1", HinhAnh: 'https://media.vietteltelecom.vn/upload/ckfinder/images/3112.png', NgayPost: '22/2/2018' },
      { TieuDe: "Khuyến Mãi 2", HinhAnh: 'https://topshare.s3.amazonaws.com/production/posts/pictures/000/000/145/original/kichi-kichi-khuyen-mai.jpg?1502809882', NgayPost: '26/2/2018' },
      { TieuDe: "Khuyến Mãi 3", HinhAnh: 'http://giaydantuong365.com/uploads/user/2/khuyenmaigiay/khuyen-mai-giay-dan-tuong-dep-gia-re-cuc-soc.jpg', NgayPost: '27/2/2018' },
      { TieuDe: "Sự Kiện KFC", HinhAnh: 'http://billnguyen.com/wp-content/uploads/2014/04/Event-Showcase1-2.jpg', NgayPost: '28/2/2018' },
      { TieuDe: "Sự Kiện Lotte", HinhAnh: 'https://static.ybox.vn/2018/3/7/6196b406-2228-11e8-b466-56c566ee3692.png', NgayPost: '22/2/2018' },
      { TieuDe: "Sự Kiện Texas", HinhAnh: 'http://cafefcdn.com/thumb_w/650/2017/2061185419-kien-nhan-1501344528133.jpg', NgayPost: '21/2/2018' }
    ];
    let obj = {
      NewsType:type,
      NewsList:list
    };
    this.newsList = obj;
  }
  showBreaks() {
    this.categoryStatus = 'break';

    let type = this.categoryStatus;
    let list = [
      { TieuDe: "Marvel mua lại DC", HinhAnh: 'https://i.ytimg.com/vi/qR0s2Cc0zBU/maxresdefault.jpg', NgayPost: '22/2/2018' },
      { TieuDe: "Ferdinand", HinhAnh: 'http://www.joblo.com/newsimages1/joblo-cast-this.jpg', NgayPost: '23/2/2018' },
      { TieuDe: "Trùm Hương Cảng", HinhAnh: 'https://i.ytimg.com/vi/NgcU9nSDMoY/maxresdefault.jpg', NgayPost: '24/2/2018' },
      { TieuDe: "Khuyến Mãi 1", HinhAnh: 'https://media.vietteltelecom.vn/upload/ckfinder/images/3112.png', NgayPost: '22/2/2018' },
      { TieuDe: "Khuyến Mãi 2", HinhAnh: 'https://topshare.s3.amazonaws.com/production/posts/pictures/000/000/145/original/kichi-kichi-khuyen-mai.jpg?1502809882', NgayPost: '26/2/2018' },
      { TieuDe: "Khuyến Mãi 3", HinhAnh: 'http://giaydantuong365.com/uploads/user/2/khuyenmaigiay/khuyen-mai-giay-dan-tuong-dep-gia-re-cuc-soc.jpg', NgayPost: '27/2/2018' },
      { TieuDe: "Sự Kiện KFC", HinhAnh: 'http://billnguyen.com/wp-content/uploads/2014/04/Event-Showcase1-2.jpg', NgayPost: '28/2/2018' },
      { TieuDe: "Sự Kiện Lotte", HinhAnh: 'https://static.ybox.vn/2018/3/7/6196b406-2228-11e8-b466-56c566ee3692.png', NgayPost: '22/2/2018' },
      { TieuDe: "Sự Kiện Texas", HinhAnh: 'http://cafefcdn.com/thumb_w/650/2017/2061185419-kien-nhan-1501344528133.jpg', NgayPost: '21/2/2018' }
    ];
    let obj = {
      NewsType:type,
      NewsList:list
    };

    this.newsList = obj;
  }
  showReviews() {
    this.categoryStatus = 'review';

    let type = this.categoryStatus;
    let list = [
      { TieuDe: "Khuyến Mãi 1", HinhAnh: 'https://media.vietteltelecom.vn/upload/ckfinder/images/3112.png', NgayPost: '22/2/2018' },
      { TieuDe: "Khuyến Mãi 2", HinhAnh: 'https://topshare.s3.amazonaws.com/production/posts/pictures/000/000/145/original/kichi-kichi-khuyen-mai.jpg?1502809882', NgayPost: '26/2/2018' },
      { TieuDe: "Khuyến Mãi 3", HinhAnh: 'http://giaydantuong365.com/uploads/user/2/khuyenmaigiay/khuyen-mai-giay-dan-tuong-dep-gia-re-cuc-soc.jpg', NgayPost: '27/2/2018' },
      { TieuDe: "Sự Kiện KFC", HinhAnh: 'http://billnguyen.com/wp-content/uploads/2014/04/Event-Showcase1-2.jpg', NgayPost: '28/2/2018' },
      { TieuDe: "Sự Kiện Lotte", HinhAnh: 'https://static.ybox.vn/2018/3/7/6196b406-2228-11e8-b466-56c566ee3692.png', NgayPost: '22/2/2018' },
      { TieuDe: "Sự Kiện Texas", HinhAnh: 'http://cafefcdn.com/thumb_w/650/2017/2061185419-kien-nhan-1501344528133.jpg', NgayPost: '21/2/2018' },
      { TieuDe: "Marvel mua lại DC", HinhAnh: 'https://i.ytimg.com/vi/qR0s2Cc0zBU/maxresdefault.jpg', NgayPost: '22/2/2018' },
      { TieuDe: "Ferdinand", HinhAnh: 'http://www.joblo.com/newsimages1/joblo-cast-this.jpg', NgayPost: '23/2/2018' },
      { TieuDe: "Trùm Hương Cảng", HinhAnh: 'https://i.ytimg.com/vi/NgcU9nSDMoY/maxresdefault.jpg', NgayPost: '24/2/2018' }
    ];
    let obj = {
      NewsType:type,
      NewsList:list
    };

    this.newsList = obj;
  }
  showDiscounts() {
    this.categoryStatus = 'discount';

    let type = this.categoryStatus;
    let list = [
      { TieuDe: "Sự Kiện KFC", HinhAnh: 'http://billnguyen.com/wp-content/uploads/2014/04/Event-Showcase1-2.jpg', NgayPost: '28/2/2018' },
      { TieuDe: "Sự Kiện Lotte", HinhAnh: 'https://static.ybox.vn/2018/3/7/6196b406-2228-11e8-b466-56c566ee3692.png', NgayPost: '22/2/2018' },
      { TieuDe: "Sự Kiện Texas", HinhAnh: 'http://cafefcdn.com/thumb_w/650/2017/2061185419-kien-nhan-1501344528133.jpg', NgayPost: '21/2/2018' },
      { TieuDe: "Marvel mua lại DC", HinhAnh: 'https://i.ytimg.com/vi/qR0s2Cc0zBU/maxresdefault.jpg', NgayPost: '22/2/2018' },
      { TieuDe: "Ferdinand", HinhAnh: 'http://www.joblo.com/newsimages1/joblo-cast-this.jpg', NgayPost: '23/2/2018' },
      { TieuDe: "Trùm Hương Cảng", HinhAnh: 'https://i.ytimg.com/vi/NgcU9nSDMoY/maxresdefault.jpg', NgayPost: '24/2/2018' },
      { TieuDe: "Khuyến Mãi 1", HinhAnh: 'https://media.vietteltelecom.vn/upload/ckfinder/images/3112.png', NgayPost: '22/2/2018' },
      { TieuDe: "Khuyến Mãi 2", HinhAnh: 'https://topshare.s3.amazonaws.com/production/posts/pictures/000/000/145/original/kichi-kichi-khuyen-mai.jpg?1502809882', NgayPost: '26/2/2018' },
      { TieuDe: "Khuyến Mãi 3", HinhAnh: 'http://giaydantuong365.com/uploads/user/2/khuyenmaigiay/khuyen-mai-giay-dan-tuong-dep-gia-re-cuc-soc.jpg', NgayPost: '27/2/2018' }
    ];
    let obj = {
      NewsType:type,
      NewsList:list
    };

    this.newsList = obj;
  }
}
