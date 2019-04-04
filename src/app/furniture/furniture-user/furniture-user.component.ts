import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Furniture } from 'src/app/models/Furniture';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {
  userFurniture$: Observable<Array<Furniture>>;

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.userFurniture$ = this.furnitureService.getForUser();
  }

  deleteFurniture(id: string) {
    this.furnitureService.delete(id).subscribe(() => {
      this.userFurniture$ = this.furnitureService.getForUser();
    });
  }

}
