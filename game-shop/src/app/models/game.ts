export class Game {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    get Price():number{
        return this.price;
    }
}
