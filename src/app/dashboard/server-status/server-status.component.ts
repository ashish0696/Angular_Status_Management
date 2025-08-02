import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {


    currentStatus : 'online' | 'offline' | 'unknown' = 'offline';

    private destroyRef = inject(DestroyRef);

    // private interval?: ReturnType<typeof setInterval>;

    constructor() {
     
    }

    ngOnInit() {
      // Initial status check can be done here if needed
     const interval = setInterval(() => {
        const rnd = Math.random();
        if (rnd < 0.5) {
          this.currentStatus = 'offline';
        } else if (rnd < 0.9) {
          this.currentStatus = 'online';
        } else {
          this.currentStatus = 'unknown';
        }
      }, 5000);
      // Cleanup the interval when the component is destroyed
      this.destroyRef.onDestroy(() => {
        clearInterval(interval);
      });
    }

    ngAfterViewInit() {
      // This lifecycle hook can be used for any post-initialization logic
      console.log('ServerStatusComponent initialized with status:', this.currentStatus);
    }
    // ngOnDestroy() {
    //   // Cleanup logic can be added here if needed
    //   console.log('ServerStatusComponent is being destroyed');
    //   clearTimeout(this.interval);
    // }

}
