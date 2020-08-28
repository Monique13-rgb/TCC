import { ValidationErrors, AbstractControl } from '@angular/forms';

export class CustomValidators {

    public static number(control: AbstractControl): ValidationErrors | null {

        if (!control.value) {
            return null;
        }

        const valorString = control.value as string;

        if (valorString.length === 0) {
            return null;
        }

        const valores = valorString.split(',');

        if (valores.length > 2 || valores.some(x => x.length === 0 || isNaN(Number(x)))) {
            return { number: true };
        }

        return null;

    }

}
