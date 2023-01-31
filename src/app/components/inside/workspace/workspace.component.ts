import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  boards: any[] = [];
  user = this.auth.currentUser;

  constructor(
    private auth: AuthService,
    private router: Router,
    private dataService: DataService
  ) {}

  async ngOnInit() {
    this.boards = await this.dataService.getBoards();
    console.log('this.boards :', this.boards);
    console.log(this.user);
  }

  async startBoard() {
    const data = await this.dataService.startBoard();
    console.log('data: ', data);
  }

  signOut() {
    this.auth.logout();
  }
}
