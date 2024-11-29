import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

interface ReportParams {
  year: number;
  country: string;
}

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
})
export class ReportComponent {
  private ar = inject(ActivatedRoute);
  params$ = this.ar.params.pipe(
    map((p) => {
      return {
        year: p['year'] as number,
        country: p['country'] as string,
      } as ReportParams;
    })
  );
}
