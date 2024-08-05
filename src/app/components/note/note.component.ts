import { Component, DoCheck, HostListener, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    standalone: true,
    selector: 'note-item',
    templateUrl: './note.component.html',
    styleUrl: './note.component.css',
    imports: []
})

export class NoteComponent implements OnChanges {
    @Input()
    _note!: Note;

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }
}

interface Note {
    title: string,
    short_desc: string,
    time_ago: string
}