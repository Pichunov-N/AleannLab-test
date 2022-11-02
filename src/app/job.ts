export interface Jobs {
    name: string,
    address: string,
}


// <div *ngFor="let item of jobList$ | async">
// <p>{{ item.address }}</p>
// </div>