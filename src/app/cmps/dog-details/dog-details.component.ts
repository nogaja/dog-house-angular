import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Location } from '@angular/common'

import { Item } from 'src/app/models/item';
import { LoadItem } from 'src/app/store/actions/item.actions';
import { State } from 'src/app/store/store';

@Component({
  selector: 'dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss'],

})
export class DogDetailsComponent implements OnInit {
  item$: Observable<Item | null>;
  item: Item
  itemToDisplay: Item
  subsciption: Subscription
  storeSubscription : Subscription


  constructor(private store: Store<State>, 
    private route: ActivatedRoute,
    private location: Location) {
    this.item$ = this.store.select('itemState').pipe(pluck('item'))

  }  



  async ngOnInit(): Promise<void> {
    this.subsciption = this.route.data.subscribe(data => {
      this.item = data.item
      // this.item$.subscribe()
      this.store.dispatch(new LoadItem(this.item.id))
          this.storeSubscription = this.item$.subscribe((item) => {
            this.itemToDisplay = item
          })
    })

  }

  
  onBack() {
    this.location.back()
  }

}

