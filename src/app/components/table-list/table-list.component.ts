import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMovieView } from 'src/app/model/movie';
import { WishlistService } from 'src/app/state/movie-state';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  @Input() title = 'TiTle';
  @Input() isMainTable = true;
  @Input() subtitle: string = '';
  @Input() tableTitles: any[] = [];
  @Input() tableInfo: any[] = [];
  @Input() addButton: string = '';
  @Input() columnButton: string = '';
  @Input() redirectBtn: string = '';
  @Input() redirectRow: string = '';

  @Output() onColumnButtonClicked = new EventEmitter();
  @Output() onNoColumnButtonClicked = new EventEmitter();

  public tableInfoValues = [];

  constructor(private router: Router, private listService: WishlistService) { }

  ngOnInit() {
  }

  public getRowValues(row: any): string[] {
    return Object.values(row);
  }

  public goToPage(): void {
    this.router.navigate([this.redirectBtn]);
  }

  public goToUserInfo(inforRow: IMovieView): void {
    this.router.navigate(['/movie-details/'+ inforRow.id]);
  }

  public columnButtonClicked(infoRow: IMovieView){
    this.onColumnButtonClicked.next(infoRow);
  }

  public noColumnButtonClicked(infoRow: IMovieView){
    this.onNoColumnButtonClicked.next(infoRow);
  }

  public isSaved(movie: IMovieView): boolean{
    return this.listService.getList().filter(x => x.id === movie.id).length > 0;
  }
}
