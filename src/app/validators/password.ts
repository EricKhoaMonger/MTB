import { AbstractControl } from '@angular/forms';

export class Password {

    static CheckMatching(input: AbstractControl) {
        let pwd = input.get('MatKhau');
        let cpwd = input.get('MatKhau2');

        if(pwd.value == "" && cpwd.value == "") {
            return null;
        }

        if (cpwd.value !== pwd.value) {
            cpwd.setErrors({ notMatch: true });
            
        } else {
            return null
        }
    }
}
