import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { filter, map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.auth.currentUser.pipe(
      filter((val) => val !== null),
      take(1),
      map((isAuthenticated: any) => {
        console.log('isAuthenticated :', isAuthenticated);

        if (isAuthenticated) {
          return true;
        } else {
          return this.router.createUrlTree(['/']);
        }
      })
    );
  }
}
