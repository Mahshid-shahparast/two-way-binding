import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent implements OnChanges {
  favoriteMovie: string = 'salam';
  
  @Input() get favorite() {
    return this.favoriteMovie;
  }
  @Output() favoriteChange: EventEmitter<string> = new EventEmitter<string>();
  set favorite(movie: string) {
    this.favoriteMovie = movie;
    this.favoriteChange.emit(this.favoriteMovie);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.favoriteMovie,'sas');
 
  }
}
