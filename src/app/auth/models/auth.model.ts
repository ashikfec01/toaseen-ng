export class AuthModel {
    access_token: string;
    set(auth: any) {
        this.access_token = auth.access_token;
    }
}