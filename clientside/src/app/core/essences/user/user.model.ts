export class User {
    id: number;
    username: string;
    password: string;
    token: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    birthDate: string;
    internalExpirience: string;
    timeZone: string;
    city: string;
    country: string;
    gender: string;
    team: string;
    company: string;
    is_active: boolean;

    constructor();
    constructor (uName?: string, uEmail?: string, uPassword?: string) {
        this.username = uName ;
        this.email = uEmail;
        this.password = uPassword || this.password;
    }

    updateUserData(uName: string, uEmail: string, uPassword: string, uIsActive?: boolean) {
        this.username = uName;
        this.email = uEmail;
        this.password = uPassword || this.password;
        this.is_active = uIsActive || false;
    }

    getUserData() {
        return {
            username: this.username,
            email: this.email,
            password: this.password,
            token: this.token
        };
    }
}
