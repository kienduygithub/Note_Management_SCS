import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../components/header/header.component";
import { SidebarMenuComponent } from "../../components/sidebar-menu/sidebar-menu.component";

@Component({
    standalone: true,
    selector: 'app-layout',
    templateUrl: './layout.html',
    styleUrl: './layout.css',
    imports: [
        RouterOutlet,
        HeaderComponent,
        SidebarMenuComponent
    ]
})

export class LayoutWrapper {

}