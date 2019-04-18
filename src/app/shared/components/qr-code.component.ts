import { Component, OnInit,HostListener } from '@angular/core';
 
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-not-found',
  template: `<div class="text-center"><qr-code [value]="data" [size]="size" [level]="'H'"></qr-code></div>`
})
export class QRCodeComponent implements OnInit {
	public data = "localhost.com:4200";
	public size = 0;
	public constructor(public  router: Router) {}
	public ngOnInit() {
		this.data = localStorage.get('qrCodeData').toString();
		if(!this.data || this.data == undefined){
			this.router.navigate(['/dashboard']);
		}
		localStorage.remove('qrCodeData');

		this.onResize();
	}

	@HostListener('window:resize', ['$event'])
	public onResize() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		this.size = width > height ? height : width;
	}
}