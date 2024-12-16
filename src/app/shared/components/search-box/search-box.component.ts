import { Component, EventEmitter,ElementRef, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

@Input()
public placeholder:string = "Search By"

@Output()
public onValue:EventEmitter<string> = new EventEmitter();

@ViewChild("txtInput")
public textBoxInput!: ElementRef<HTMLInputElement>


emitValue(){
  const inputBoxValue =this.textBoxInput.nativeElement.value
  this.onValue.emit(inputBoxValue)
}

}
