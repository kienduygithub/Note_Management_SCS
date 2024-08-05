import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrl: './sidebar-menu.component.css',
    imports: [
        RouterModule
    ]
})

export class SidebarMenuComponent {

}