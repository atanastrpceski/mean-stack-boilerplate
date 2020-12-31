import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../angular-material.module";

import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PostSocketService } from './post-socket.service';

const socketIoConfig: SocketIoConfig = {
  url: 'http://localhost:3000', options: {}
};

@NgModule({
  declarations: [
    PostCreateComponent,
    PostListComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    SocketIoModule.forRoot(socketIoConfig)
  ],
  providers: [
    PostSocketService
  ]
})
export class PostsModule {

}
