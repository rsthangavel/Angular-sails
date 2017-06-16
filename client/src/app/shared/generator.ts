  export class Generator{
    _month= [];
    _day = [];
    
   generatenumber(v1,v2){
       this._day = [];
     for(let i=v1; i<=v2; i++){
        this._day.push(i);
     }
     return this._day;
    
   }
   generateMonth(){
       
       //this._range.push('January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
       this._month.push({'name': 'January', 'value':1},{'name':'Feburary', 'value':2},{'name':'March','value':3},{'name':'April','value':4},{'name':'May','value':5},{'name':'June','value':6},{'name':'July','value':7},{'name':'August','value':8},{'name':'September','value':9},{'name':'October','value':10},{'name':'November','value':11},{'name':'December','value':12});
       return this._month;
   }
  }