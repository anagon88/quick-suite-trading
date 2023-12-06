import { Component } from '@angular/core';
import { IMovieView } from '../model/movie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../service/movie-service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  public movie: IMovieView| undefined;

  constructor(private route: ActivatedRoute, private dataService: MovieService) {}

  ngOnInit(): void {
    var id = this.route.snapshot.params['id'];
    this.dataService.getData().subscribe((result) => {
      this.movie = result.find(x => x.id == id);
    });
  }

  public addtoWatchlist(): void {
    
  }
}
