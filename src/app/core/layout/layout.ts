import { Component } from '@angular/core';
import { Menus } from "../menus/menus";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout',
  imports: [Menus, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
