import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

interface AboutQueryParams {
  lang?: string;
  level?: number;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private ar = inject(ActivatedRoute);
  qp$ = this.ar.queryParams.pipe(map((q) => q as AboutQueryParams));
  fr$ = this.ar.fragment;
}
