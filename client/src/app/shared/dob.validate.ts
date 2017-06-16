import { FormGroup } from '@angular/forms';


//check if date-of-birth is validate else return error
export function dobValidate(group: FormGroup) {
  const dob = group.value;

    if(dob.month === "4" || dob.month === "6" || dob.month === "9" || dob.month === "11")
    {
        return (dob.day <31) ? null : { invalid : true}
    }
    else if(dob.month === "2")
    {
        if(dob.year % 4 == 0)
        {
            return (dob.day < 30) ? null : { invalid : true}
        }
        else
        {
            return (dob.day < 29) ? null : { invalid : true}
        }
    }
   if(dob){
       
      let ageDifference = new Date(new Date().getTime() - new Date(dob.year,dob.month, dob.day).getTime());
     return ((ageDifference.getFullYear()-1970) >= 18) ? null :{invalid : true};
   }
    
}