import { Component, Input } from '@angular/core';
import { Job } from '../model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent
{
  @Input() card: Job = {};
}
