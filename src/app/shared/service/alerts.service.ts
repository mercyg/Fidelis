import { Injectable } from '@angular/core';
import { Alerts } from '../../mock-alerts';
import { AlertCount } from '../../models/severity.response';
import { ClientIpCount } from '../../models/clientip.response';
import { ProtocolCount} from '../../models/protocol.response';
import { CountryCount } from '../../models/country.response'
@Injectable({
  providedIn: 'root'
})
export class AlertsService {
    alerts = Alerts
    severityData: any;
    uniqueSeverityData: string[];
    uniqueClientIp: string[];
    uniqueCountry: string[];
    clientIp: any
    clientCountry: any;
    countSeverity;
    alertCount: AlertCount[];
    clientCount: ClientIpCount [];
    protocolCount: ProtocolCount[];
    countryCount: CountryCount[];
    protocol; uniqueProtocol


  constructor() { 
    this.alertCount = [{Low: 0, Medium: 0, High: 0}];
    this.clientCount = [{'155.175.121.134': 0, '43.172.24.178': 0, '66.78.200.140': 0, '97.28.36.120': 0}]
    this.protocolCount = [{HTTP: 0 , FTP: 0, TLS: 0, SMTP: 0 }];
    this.countryCount = [{Canada: 0, Germany: 0, 'United States': 0, Australia: 0}];
  }


  getSeverityData(){
    this.severityData = this.alerts.map( data => data.Severity )
    this.alertCount['Low']= this.alerts.filter((obj) => obj.Severity === 'Low').length
    this.alertCount['Medium'] = this.alerts.filter((obj) => obj.Severity === 'Medium').length
    this.alertCount['High']= this.alerts.filter((obj) => obj.Severity === 'High').length
    return this.uniqueSeverityData = this.severityData.filter((x,i,a) => x && a.indexOf(x) === i);
  }

  getClientIp(){
    this.clientIp = this.alerts.map(data => data.ClientIP);
    this.clientCount['155.175.121.134']= this.alerts.filter((obj) => obj.ClientIP === '155.175.121.134').length;
    this.clientCount['66.78.200.140']= this.alerts.filter((obj) => obj.ClientIP === '66.78.200.140').length;
    this.clientCount['43.172.24.178']= this.alerts.filter((obj) => obj.ClientIP === '43.172.24.178').length;
    this.clientCount['97.28.36.120']= this.alerts.filter((obj) => obj.ClientIP === '97.28.36.120').length;
    return this.uniqueClientIp = this.clientIp.filter((x,i,a) => x && a.indexOf(x) === i);
  }

  getProtocol(){
      this.protocol = this.alerts.map(data => data.Protocol);
      this.protocolCount['SMTP']= this.alerts.filter((obj) => obj.Protocol === 'SMTP').length;
      this.protocolCount['HTTP']= this.alerts.filter((obj) => obj.Protocol === 'HTTP').length;
      this.protocolCount['FTP']= this.alerts.filter((obj) => obj.Protocol === 'FTP').length;
      this.protocolCount['TLS']= this.alerts.filter((obj) => obj.Protocol === 'TLS').length;
      return this.uniqueProtocol = this.protocol.filter((x,i,a) => x && a.indexOf(x) === i);
  }
  

  getClientCountry(){
      this.clientCountry = this.alerts.map(data => data.ClientCountry);
      this.countryCount['Canada']= this.alerts.filter((obj) => obj.ClientCountry === 'Canada').length;
      this.countryCount['Germany']= this.alerts.filter((obj) => obj.ClientCountry === 'Germany').length;
      this.countryCount['United States']= this.alerts.filter((obj) => obj.ClientCountry === 'United States').length;
      this.countryCount['Australia']= this.alerts.filter((obj) => obj.ClientCountry === 'Australia').length;
      return this.uniqueCountry = this.clientCountry.filter((x,i,a) => x && a.indexOf(x) === i);
  }

  getTotalCount(){

  }
}
