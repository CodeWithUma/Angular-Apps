import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  @Input()
  account!: { name: string; status: string };
  @Input()
  id!: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();
  number: any;
  statusUpdated: any;

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountComponent
  ) {}

  ngOnInit(): void {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
  updateStatus(id: number, status: string) {
    throw new Error('Method not implemented.');
  }
}
