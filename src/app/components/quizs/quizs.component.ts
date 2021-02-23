import { Component, HostBinding, OnInit } from "@angular/core";

@Component({
    selector: 'app-quizs',
    templateUrl: 'quizs.component.html'
})

export class QuizsComponent implements OnInit{
    @HostBinding('class') classes = ['row','mt-3'];
    series:any[] = 
    [
        {
            title: 'One piece',
            description: 'serie de piratas',
            image: 'assets/img/one-piece.png'
        },
        {
            title: 'Haikyuu',
            description: 'serie de voleibol',
            image: 'assets/img/haikyuu.png'
        },
        {
            title: 'Attack on titan',
            description: 'serie de titanes',
            image: 'assets/img/titan.png'
        },
        {
            title: 'One piece',
            description: 'serie de piratas',
            image: 'assets/img/one-piece.png'
        },
        {
            title: 'Haikyuu',
            description: 'serie de voleibol',
            image: 'assets/img/haikyuu.png'
        },
        {
            title: 'Attack on titan',
            description: 'serie de titanes',
            image: 'assets/img/titan.png'
        }
    ]
    constructor(){}
    ngOnInit(){}
}