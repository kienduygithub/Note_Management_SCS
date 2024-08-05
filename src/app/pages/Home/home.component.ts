import { Component, inject, TemplateRef, ViewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NoteListComponent } from "../../components/note-list/note-list.component";
import { FormsModule } from "@angular/forms";
import { ModalCreateComponent } from "../../components/modal-create/modal-create.component";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    standalone: true,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        FormsModule,
        RouterModule,
        NoteListComponent,
        ModalCreateComponent
    ]
})

export class HomePage {
    checkedLabel: string = '';


    constructor() {

    }

    modalService = inject(NgbModal)

    OnChangeLabels(e: any) {
        console.log(e.target.value);
    }

}