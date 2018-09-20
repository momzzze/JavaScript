import { Injectable } from "@angular/core"
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { LoginModel } from "./models/login";
import { RegisterModel } from "./models/register";



const appKey = 'kid_SyongBnNQ';
const appSecret = '4f2d51b90a7c403aacd3d478d317eecb';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;


@Injectable()
export class AuthService {
    private currentAuthtoken: string;

    constructor(private http: HttpClient) { }


    login(model: LoginModel) {
        return this.http.post(loginUrl,
            JSON.stringify(model),
            {
                headers: this.createAuthHeaders('Basic')
            });
    }

    register(model: RegisterModel) {
        return this.http.post(registerUrl,
            JSON.stringify(model),
            {
                headers: this.createAuthHeaders('Basic')
            })
    }

    logout() {
        return this.http.post(logoutUrl, {},
            {
                headers: this.createAuthHeaders('Kinvey')
            })
    }

    checkIfLogged() {
        return this.currentAuthtoken === localStorage.getItem('authtoken');
    }

    get authtoken() {
        return this.currentAuthtoken
    }
    set authtoken(value: string) {
        this.currentAuthtoken = value
    }


    private createAuthHeaders(type: string): HttpHeaders {
        if (type === 'Basic') {
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-type': 'application/json'
            })
        } else {
            return new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                'Content-type': 'application/json'
            })
        }
    }
}
