export class Contact {
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    address: string;
    twitter: string;
    id?: string;
    username?: string;
    userId?: string

    constructor(firstname: string, lastname: string, email: string, phone: string, address: string, twitter: string,id?: string, username?: string, userId?: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobile = phone;
        this.address = address;
        this.twitter = twitter;
        this.id = id;
        this.username = username;
        this.userId = userId;
    }
}