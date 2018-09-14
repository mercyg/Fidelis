import {  Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})


export class CountryPipe implements PipeTransform {
    transform(items: any[], countryText: string): any[]{
        if(!items) return [];
        if(!countryText) return items;

        countryText = countryText.toString().toLowerCase();
          
        return items.filter( it => {
            return it.toString().toLowerCase().includes(countryText)
        })
    } 
}