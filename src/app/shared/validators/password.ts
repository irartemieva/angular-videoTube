import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"


export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regexp = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
    const invalidPass = regexp.test(control.value);
    return invalidPass ? {invalidPass: {value: control.value}} : null;
  }
}