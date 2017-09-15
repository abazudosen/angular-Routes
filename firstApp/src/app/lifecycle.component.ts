import { Component, 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, 
  OnDestroy, 
  Input,
  ViewChild
 } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{inbound}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit, AfterViewInit, OnDestroy {
  @Input() inbound = '1000';

  @ViewChild('boundParagraph') boundParagraph: HTMLElement;  


  constructor() { }

  ngOnChanges(){
    this.log('ngOnChanges');
  }
  ngOnInit() {
    this.log('ngngOnInit');
  }
  ngDoCheck(){
    this.log('DoCheck');
  }
  ngAfterContentInit(){
    this.log('AfterContentInit');
  }
  ngAfterContentChecked(){
    this.log('AfterContentChecked');
  }
  ngAfterViewInit(){
    this.log('AfterViewInit');
    console.log(this.boundParagraph);
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    this.log('OnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
