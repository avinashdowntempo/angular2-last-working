System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.contacts = [{ firstName: "Avinash", lastName: "jeyasankar",
                            phone: "0137 1350 928", email: "avinash.jeyasankar@cesltd.com" },
                        { firstName: "Andal", lastName: "Avinash",
                            phone: "0137 1350 928", email: "avinash.jeyasankar@cesltd.com" },
                        { firstName: "Sushil", lastName: "Kutty",
                            phone: "0137 1350 928", email: "avinash.jeyasankar@cesltd.com" },
                        { firstName: "Naveen", lastName: "Kumar",
                            phone: "0137 1350 928", email: "avinash.jeyasankar@cesltd.com" }];
                    this.selectedContact = {};
                }
                AppComponent.prototype.onSelect = function (contact) {
                    this.selectedContact = contact;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<ul>\n\t\t<li *ngFor=\"#contact of contacts\" (click)=\"onSelect(contact)\" [class.clicked]=\"showDetail === true\">{{contact.firstName}}{{contact.lastName}}\n\t\t</li>\n\t\t</ul>\t\n\t\t<input [(ngModel)]=\"selectedContact.firstName\" type=\"text\">\n\t\t<div>Phone Number:{{selectedContact.phone}} <br>\n\t\tE-mail:{{selectedContact.email}}\n\t\t</div>\n    ",
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQUE7b0JBQ08sYUFBUSxHQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxZQUFZOzRCQUM1RCxLQUFLLEVBQUMsZUFBZSxFQUFDLEtBQUssRUFBQywrQkFBK0IsRUFBQzt3QkFDNUQsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBQyxTQUFTOzRCQUN0QyxLQUFLLEVBQUMsZUFBZSxFQUFDLEtBQUssRUFBQywrQkFBK0IsRUFBQzt3QkFDNUQsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxPQUFPOzRCQUNyQyxLQUFLLEVBQUMsZUFBZSxFQUFDLEtBQUssRUFBQywrQkFBK0IsRUFBQzt3QkFDNUQsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxPQUFPOzRCQUNyQyxLQUFLLEVBQUMsZUFBZSxFQUFDLEtBQUssRUFBQywrQkFBK0IsRUFBQyxDQUFDLENBQUM7b0JBRXZELG9CQUFlLEdBQUMsRUFBRSxDQUFDO2dCQUkxQixDQUFDO2dCQUhELCtCQUFRLEdBQVIsVUFBUyxPQUFPO29CQUNoQixJQUFJLENBQUMsZUFBZSxHQUFDLE9BQU8sQ0FBQztnQkFDN0IsQ0FBQztnQkEzQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLGdYQVNUO3dCQUNKLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO3FCQUNqQyxDQUFDOztnQ0FBQTtnQkFlRixtQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsdUNBY0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cdFx0PHVsPlxyXG5cdFx0PGxpICpuZ0Zvcj1cIiNjb250YWN0IG9mIGNvbnRhY3RzXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGNvbnRhY3QpXCIgW2NsYXNzLmNsaWNrZWRdPVwic2hvd0RldGFpbCA9PT0gdHJ1ZVwiPnt7Y29udGFjdC5maXJzdE5hbWV9fXt7Y29udGFjdC5sYXN0TmFtZX19XHJcblx0XHQ8L2xpPlxyXG5cdFx0PC91bD5cdFxyXG5cdFx0PGlucHV0IFsobmdNb2RlbCldPVwic2VsZWN0ZWRDb250YWN0LmZpcnN0TmFtZVwiIHR5cGU9XCJ0ZXh0XCI+XHJcblx0XHQ8ZGl2PlBob25lIE51bWJlcjp7e3NlbGVjdGVkQ29udGFjdC5waG9uZX19IDxicj5cclxuXHRcdEUtbWFpbDp7e3NlbGVjdGVkQ29udGFjdC5lbWFpbH19XHJcblx0XHQ8L2Rpdj5cclxuICAgIGAsXHJcblx0c3R5bGVVcmxzOiBbXCIuLi9zcmMvY3NzL2FwcC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbnB1YmxpYyBjb250YWN0cz1be2ZpcnN0TmFtZTpcIkF2aW5hc2hcIiwgbGFzdE5hbWU6XCJqZXlhc2Fua2FyXCIsXHJcbnBob25lOlwiMDEzNyAxMzUwIDkyOFwiLGVtYWlsOlwiYXZpbmFzaC5qZXlhc2Fua2FyQGNlc2x0ZC5jb21cIn0sXHJcbntmaXJzdE5hbWU6XCJBbmRhbFwiLCBsYXN0TmFtZTpcIkF2aW5hc2hcIixcclxucGhvbmU6XCIwMTM3IDEzNTAgOTI4XCIsZW1haWw6XCJhdmluYXNoLmpleWFzYW5rYXJAY2VzbHRkLmNvbVwifSxcclxue2ZpcnN0TmFtZTpcIlN1c2hpbFwiLCBsYXN0TmFtZTpcIkt1dHR5XCIsXHJcbnBob25lOlwiMDEzNyAxMzUwIDkyOFwiLGVtYWlsOlwiYXZpbmFzaC5qZXlhc2Fua2FyQGNlc2x0ZC5jb21cIn0sXHJcbntmaXJzdE5hbWU6XCJOYXZlZW5cIiwgbGFzdE5hbWU6XCJLdW1hclwiLFxyXG5waG9uZTpcIjAxMzcgMTM1MCA5MjhcIixlbWFpbDpcImF2aW5hc2guamV5YXNhbmthckBjZXNsdGQuY29tXCJ9XTtcclxuXHJcbnB1YmxpYyBzZWxlY3RlZENvbnRhY3Q9e307XHJcbm9uU2VsZWN0KGNvbnRhY3Qpe1xyXG50aGlzLnNlbGVjdGVkQ29udGFjdD1jb250YWN0O1xyXG59XHJcbn0iXX0=
