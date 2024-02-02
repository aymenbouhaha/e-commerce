import { Component } from '@angular/core';
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  protected readonly HttpParams = HttpParams;
}
