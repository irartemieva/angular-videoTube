import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ICard, initialCard } from 'src/app/admin/models/custom-card.model';
import { createCustomCards } from '../../store/actions';
import { imageLinkValidator, videoLinkValidator } from 'src/app/shared/validators/invalidLinks';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  card: ICard = initialCard;
  //cards = this.store.select('cards');

  titleCtrl = this.fb.control('', 
  [
    Validators.required, 
    Validators.minLength(3),
    Validators.maxLength(20)
  ]);
  descriptionCtrl = this.fb.control('',
  [
    Validators.maxLength(255)
  ]);
  imageCtrl = this.fb.control('',
  [
    Validators.required,
    imageLinkValidator()
  ]);
  videoCtrl = this.fb.control('',
  [
    Validators.required,
    videoLinkValidator()
  ]);

  cardForm = this.fb.group({
    title: this.titleCtrl,
    description: this.descriptionCtrl,
    image: this.imageCtrl,
    video: this.videoCtrl
  });

  constructor(
    private store: Store<{cards: ICard[]}>,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.card = {
      title: '',
      description: '',
      img: '',
      video: ''
    }
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.cardForm.value);
    //this.cards.push([this.card]);
    //let customCards = this.cards;
    this.store.dispatch(createCustomCards({customCards: [this.cardForm.value]}));
    //console.log('card', this.card);
    // this.card = {
    //   title: '',
    //   description: '',
    //   img: '',
    //   video: ''
    // }

    const redirectUrl = '/videos';

    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    }

    this.router.navigate([redirectUrl], navigationExtras);
  }

}
