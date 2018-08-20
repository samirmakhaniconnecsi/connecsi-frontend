import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService, ) { }

  ngOnInit() {

  }
  login() {
    this.bsModalRef = this.modalService.show(LoginComponent, /*{class: 'modal-lg'}*/);
  }

}
