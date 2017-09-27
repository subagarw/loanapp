import { Component, OnInit } from '@angular/core'
import { SsnService } from 'app/ssn/ssn.service';

@Component({
    selector: 'adm-ssn',
    templateUrl: './ssn.component.html',
    styleUrls: ['./ssn.component.css']
})
export class SsnComponent
{

    showData: boolean = false;
    showdetails: boolean = false;
    errorFound: boolean = false;
    searchstatestring: string;
    searchssn: string;
    obj: any ;
    jso: any ;
    str: any ;
    split: any[];
    errorMessage: string;
    constructor(private _ssnService : SsnService)
    {    }
    showsearchfor(): void
    {
        this.showData=true;
        this.searchstatestring = 'Search For:'
        this.errorFound=false;
    }
    hidesearchfor(): void
    {
        this.showData=false;
    }
    reset(): void
    {
        this.showdetails=false;
        this.showData=false;
        this.searchssn=null;
    }
    search(): void
    {
        this.searchstatestring = 'You Searched For:'
        this.showData=true;
        this.showdetails=true;
        
        this._ssnService.getCustomer(this.searchssn).subscribe(
            products => {
                this.jso = products;
                this.jso = JSON.parse(this.jso._body);
                if(this.jso.LOANAPP0OperationResponse.ca_response_message != 'OPERATION UNKNOWN')
                {
                this.obj = this.jso;
                console.log(this.obj);
                this.str = this.obj.LOANAPP0OperationResponse.ca_response_message;
                console.log(this.obj.LOANAPP0OperationResponse.ca_response_message);
                this.split = this.str.split('+');
                }
                else
                {
                    this.obj=null;
                    this.showdetails=false;
                    this.showData=false;
                    this.errorFound=true;
                    throw Error;
                }
                },
                error => this.errorMessage = <any>error);
                
    }
}