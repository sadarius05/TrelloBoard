import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/inside/board/board.component';
import { WorkspaceComponent } from './components/inside/workspace/workspace.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

import { GravatarModule } from 'ngx-gravatar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    WorkspaceComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GravatarModule,
    NgxSpinnerModule,
    FormsModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
