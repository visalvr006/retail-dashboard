import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.css'
})
export class ImageContainerComponent {
@Input() imagePath!: string;
}
