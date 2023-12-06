// list.service.ts
import { Injectable } from '@angular/core';
import { IMovieView } from '../model/movie';

@Injectable({
    providedIn: 'root',
})
export class WishlistService {
    private list: IMovieView[] = [];

    getList(): IMovieView[] {
        return this.list;
    }

    addItem(item: IMovieView): void {
        this.list.push(item);
    }

    removeItem(item: IMovieView): void {
        const index = this.list.indexOf(item);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
}
