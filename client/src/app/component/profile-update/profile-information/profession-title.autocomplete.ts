import * as $ from 'jquery';
import 'select2';
export class ProfessionTitleAutocomplete {
  constructor(private id: string){
    
    $(id).select2({
      ajax: {
         url: "https://suggest.naukri.com/suggest/autosuggest?appId=103&vertical=&category=top,rs&limit=15&sourceId=3000&version=1.0.2&_=1497529025008",
        datatype: 'json',
        delay: 250,
        data: function(params: any){
          return {
            query: params.term
          };
        },
        processResults: function(data:any, params: any){
            console.log(data);
          return {
            results:
              data.resultList.top.map(function(item) {
                return {
                  id: item.id,
                  text: item.displayTextEn
                };
              }
            )};
          },
        cache: true  
      },
      placeHolder: 'Search...',
      minimumInputLength: 2 
    })
  }
}