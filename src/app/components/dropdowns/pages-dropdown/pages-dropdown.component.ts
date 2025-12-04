import { CommonModule } from "@angular/common";
import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { createPopper } from "@popperjs/core";

@Component({
  selector: "app-pages-dropdown",
  templateUrl: "./pages-dropdown.component.html",
  imports : [RouterLink,CommonModule,FormsModule]
})
export class PagesDropdownComponent implements OnInit {
  dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;
  @Input() menus : any;


  userMenu = [{ header : "Company", menuItems : [
      { name: "Company Profile", link: "/profile" },
      { name: "Material", link: "/material" }
    ]},
    { header : "Pass", menuItems : [
      { name: "Vehicle", link: "/vehicle" },
      { name: "User", link: "/users" },
      { name: "Crew", link: "/crews" },
      { name: "Foreigner", link: "/foreigners" },
      { name: "Blacklisted", link: "/blacklisted" }
    ]},
    { header : "RFID", menuItems : [
      { name: "View", link: "/view-rfid" },
      { name: "Request RFID", link: "/request-rfid" },
      { name: "RFID Refund Request", link: "/rfid-refund" },
      { name: "Refund Details", link: "/refund-details" },
    ]},
    { header : "Cargo", menuItems : [
      { name: "Cargo Pass", link: "/cargo-pass" }
    ]},
    { header : "Wallet", menuItems : [
      { name: "View Transactions", link: "/wallet-transactions" },
      { name: "Add Topup", link: "/top-up" },
    ]},
    { header : "Reports", menuItems : [
      { name: "RFID Pass Details", link: "/rfid-pass-details" },
      { name: "Material Details", link: "/material-details" },
      { name: "Expired Material Details", link: "/expired-material" },
      { name: "Material Movement Report", link: "/material-movement" },
      { name: "Berth Attendance Report", link: "/berth-attendance" },
      { name: "RFID Pass Request", link: "/rfid-pass-request" },
      { name: "Cargo In Out Movement Report", link: "/cargo-in-out-movement" },
      { name: "Monthly Return RFID Cards Report", link: "/monthly-return-rfid-cards" },
      { name: "Monthly Purchased RFID Cards Report", link: "/monthly-purchased-rfid-cards" },
      { name: "Monthly Activation Report", link: "/monthly-pass-activation" },
      { name: "Daily Pass Activation Report", link: "/daily-pass-activation" },
    ]}
  ];
activeIndex: any;
keepDropdownOpen: any;

  ngOnInit() {
   
  }
  toggleDropdown(event:any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
      this.createPoppper();
    }
  }
  createPoppper() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-start",
      }
    );
  }
}
