import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  //Alias
  @Input('srvElement') element: { type: string, name: string, content: string };

  @Input() name: string;

  @ViewChild('heading') header: ElementRef;

  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('After view checked.')
  }

  ngAfterViewInit(): void {
    console.log('After view init.')
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }
}
