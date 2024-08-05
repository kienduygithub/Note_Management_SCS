import { CommonModule } from "@angular/common";
import { Component, inject, TemplateRef } from "@angular/core";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ModalDismissReasons, NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    standalone: true,
    selector: 'app-modal-create',
    templateUrl: './modal-create.component.html',
    styleUrl: './modal-create.component.css',
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [NgbActiveModal]
})

export class ModalCreateComponent {
    labels = labels;

    noteForm = new FormGroup({
        title: new FormControl(''),
        label: new FormControl(''),
        description: new FormControl(''),
        images: new FormArray([])
    })

    get images(): FormArray {
        return this.noteForm.get('images') as FormArray;
    }

    constructor(public activeModal: NgbActiveModal) {

    }

    modalService = inject(NgbModal);

    onSubmit(modal: any) {
        if (this.noteForm.valid) {
            alert('Add succeed');
            modal.close('Save click');
        }
    }

    onClose(modal: any) {
        modal.close('Cross click');
    }

    open(content: TemplateRef<any>) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result) => {
                console.log('Result: ' + result);
            },
            (reason) => {
                console.log('Reason: ' + this.getDismissReason(reason));
            },
        );
    }

    private getDismissReason(reason: any): string {
        switch (reason) {
            case ModalDismissReasons.ESC:
                return 'by pressing ESC';
            case ModalDismissReasons.BACKDROP_CLICK:
                return 'by clicking on a backdrop';
            default:
                return `with: ${reason}`;
        }
    }
}

const labels = [
    'Work', 'Personal', 'Study', 'Shopping', 'Health', 'Finance', 'Other'
]