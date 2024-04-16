export class HomeService {
    getData() {
        return Promise.resolve(['Item 1', 'Item 2', 'Item 3']);
    }
}