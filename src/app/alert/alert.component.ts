import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertCount } from '../models/severity.response'
import { ClientIpCount } from '../models/clientip.response'
import { ProtocolCount } from '../models/protocol.response';
import { CountryCount } from '../models/country.response';
import { Alerts } from '../mock-alerts'
import { AlertsService} from '../shared/service/alerts.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alert = Alerts;
 alertCount: AlertCount[];
 clientIpCount: ClientIpCount[];
 protocolCount: ProtocolCount[];
 countryCount: CountryCount[];
 arrayClient; arrProtocol; arrCount; severityArra
 totalCount: any = [];
 sum
constructor(public alertService: AlertsService){
  this.alertCount = alertService.alertCount
  this.clientIpCount = alertService.clientCount
  this.protocolCount = alertService.protocolCount
  this.countryCount = alertService.countryCount
}



ngOnInit() {
 this.uniqueSeverityData;
 this.uniqueClientIp;
 this.uniqueprotocol;
 this.uniqueCountry;
 this.getTotalCount()
}

getTotalCount(){
  console.log(this.alertCount)

  // for( var key in this.alertCount.shift()) {
  //  this.totalCount.push(this.alertCount[key]) 
  // }
  // for( var key in this.clientIpCount.shift()) {
  //   this.totalCount.push(this.clientIpCount[key]) 
  //  }

  //  for( var key in this.protocolCount.shift()) {
  //   this.totalCount.push(this.protocolCount[key]) 
  //  }

  //  for( var key in this.countryCount.shift()) {
  //   this.totalCount.push(this.countryCount[key]) 
  //  }

  // return this.sum =  this.totalCount.reduce((x, y) => x + y);
 
}

objectKeys(obj){
  return Object.keys(obj)
}
 
 uniqueSeverityData = this.alertService.getSeverityData();
 uniqueClientIp = this.alertService.getClientIp();
 uniqueprotocol = this.alertService.getProtocol();
 uniqueCountry = this.alertService.getClientCountry();



}


