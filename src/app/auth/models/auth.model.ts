export class AuthModel {
    accessToken: string;
    set(auth: any) {
        this.accessToken = auth.access_token;
    }
}