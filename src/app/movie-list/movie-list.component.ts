import { Component } from '@angular/core';
import { IMovieView } from '../model/movie';
import { MovieService } from '../service/movie-service';
import { WishlistService } from '../state/movie-state';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  public tableTitles = ["Id", "Title", "Description", "Rating", "Duration", "Genre", "Released Date", "Trailer Link"];
  public tableInfo: IMovieView[] = [];

  constructor(private dataService: MovieService, public listService: WishlistService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    // Use the injected service here
    this.dataService.getData().subscribe((result) => {
      this.tableInfo = result;
    });
  }

  public btnColumnClicked(infoRow: IMovieView): void {
    this.listService.addItem(infoRow);
  }

  public btnNoColumnClicked(infoRow: IMovieView): void {
    this.listService.removeItem(infoRow);
  }
}
