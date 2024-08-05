import { Component, HostListener, OnInit } from "@angular/core";
import { NoteComponent } from "../note/note.component";
import { CommonModule } from "@angular/common";
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
    standalone: true,
    selector: 'note-list',
    templateUrl: './note-list.component.html',
    styleUrl: './note-list.component.css',
    imports: [
        NoteComponent,
        CommonModule,
        CdkDropList,
        CdkDrag
    ]
})

export class NoteListComponent implements OnInit {
    list: Note[] = [
        { title: "Read books", short_desc: "Read book is very fun", time_ago: '10 mins' },
        { title: "Read manga", short_desc: "Read manga is very fun", time_ago: '20 mins' },
        { title: "Read article", short_desc: "Read article is very fun", time_ago: '30 mins' },
        { title: "Read magazine", short_desc: "Read magazine is very fun", time_ago: '40 mins' },
        { title: "Read details car", short_desc: "Read details car is very fun", time_ago: '50 mins' },
    ];


    constructor() {
        console.log(this.list);
    }

    ngOnInit(): void {

    }

    drop(event: CdkDragDrop<Note[]>) {
        moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    }
}

interface Note {
    title: string,
    short_desc: string,
    time_ago: string
}