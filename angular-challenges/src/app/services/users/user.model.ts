export class User {
    private readonly id: number;
    name: string;
    email: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name ? data.name : '';
        this.email = data.email ? data.email : '';
    }
}
