import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function imageLinkValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regexp = /(https?:\/\/.*\.(?:png|jpg))/;
    const validImageLink = regexp.test(control.value);

    return !validImageLink ? {invalidImageLink: {value: control.value}} : null;
  }
}

export function videoLinkValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regexp = /(https?:\/\/(www.youtube.com))/;
    const validVideoLink = regexp.test(control.value);

    return !validVideoLink ? {invalidVideoLink: {value: control.value}} : null;
  }
}