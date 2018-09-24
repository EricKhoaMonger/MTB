import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material'
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { DataTranfererService } from '../../../../services/data-tranferer.service';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  dataSource: MatTableDataSource<User>
  displayedColumns: string[] = []


  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(
    private userService: UserService,
    private dataTransferer: DataTranfererService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {

  }

  ngOnInit() {
    this.userService.getUsersList().subscribe(
      users => this.loadData(users)
    )

    this.breakpointObserver
      .observe(['(min-width: 576px)'])
      .subscribe(
        (state: BreakpointState) => {
          if (state.matches) {    
            this.displayedColumns = ['TaiKhoan', 'HoTen', 'Email', 'Action']
          } else { 
            this.displayedColumns = ['HoTen', 'Action']        
          }
        }
      )
  }



  loadData(array: Array<any>) {
    this.dataSource = new MatTableDataSource(array)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  seeUserDetail(user: User) {
    this.dataTransferer.transferUserInfo(user)
    this.router.navigate([this.router.url + '/' + user.TaiKhoan])
  }


}
