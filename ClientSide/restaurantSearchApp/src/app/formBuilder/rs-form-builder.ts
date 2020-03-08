import { FormBuilder, Validators } from '@angular/forms';

export class RsFormBuilder {
    private static fb: FormBuilder = new FormBuilder();
    public static getUserLoginFormGroup() {
        return RsFormBuilder.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    public static getUserCreateFormGroup() {
        return RsFormBuilder.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });

    }

    public static getCreateRestaurantFormGroup(){
        return RsFormBuilder.fb.group({
            restaurantCode: ['', Validators.required],
            name: ['', Validators.required],
            city: ['', Validators.required],
            country: ['', Validators.required],
            description: ['', Validators.required],
            geoLocation: [{}]
        });
    }
}
