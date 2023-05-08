import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function imageLinkValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regexp = /(https?:\/\/.*\.(?:png|jpg))/;
    const validImageLink = regexp.test(control.value);

    return !validImageLink ? {invalidImageLink: {value: control.value}} : null;
  }
}

// export function dateValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//      const date = new Date();
//      //cont formattedDate = `${date.getDate}-${}`
//      // new Date(2023, 12, 20) - com
//   }
// }