import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
		<ul>
		<li *ngFor="#contact of contacts" (click)="onSelect(contact)" [class.clicked]="showDetail === true">{{contact.firstName}}{{contact.lastName}}
		</li>
		</ul>	
		<input [(ngModel)]="selectedContact.firstName" type="text">
		<div>Phone Number:{{selectedContact.phone}} <br>
		E-mail:{{selectedContact.email}}
		</div>
    `,
	styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
public contacts=[{firstName:"Avinash", lastName:"jeyasankar",
phone:"0137 1350 928",email:"avinash.jeyasankar@cesltd.com"},
{firstName:"Andal", lastName:"Avinash",
phone:"0137 1350 928",email:"avinash.jeyasankar@cesltd.com"},
{firstName:"Sushil", lastName:"Kutty",
phone:"0137 1350 928",email:"avinash.jeyasankar@cesltd.com"},
{firstName:"Naveen", lastName:"Kumar",
phone:"0137 1350 928",email:"avinash.jeyasankar@cesltd.com"}];

public selectedContact={};
onSelect(contact){
this.selectedContact=contact;
}
}