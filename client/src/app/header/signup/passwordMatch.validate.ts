import { FormGroup } from '@angular/forms';

//check if password match with conform-password is validate else return error
export function comparePassword(group: FormGroup) {
  const pass = group.value;
  return (pass.password === pass.confirm_password) ? null: {
    invalid: true
  }
}