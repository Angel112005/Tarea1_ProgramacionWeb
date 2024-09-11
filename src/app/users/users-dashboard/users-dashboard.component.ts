// import { Component } from '@angular/core';
// import { UserService } from '../services/user.service';
// import { IUser } from '../modelo/iuser';

// @Component({
//   selector: 'app-users-dashboard',
//   templateUrl: './users-dashboard.component.html',
//   styleUrl: './users-dashboard.component.css'
// })
// export class UsersDashboardComponent {

//   users_list: IUser[] = []

//   selected_user:IUser = {
//     id: 1,
//     name: "Usuario 1",
//     username: "user_1",
//     phone: "19997355272",
//     website: "akjhbsasays"
//   }

//   message: string = "Mi tabla de personal"

//   constructor(private _service: UserService){

//     this._service.getAll().subscribe(
//       response => this.users_list = response
//     )

//    }

//    seleccionar_usuario(user: IUser): void{
//     this.selected_user = user;
//    }

//    eventoRecibido(message: string){
//     this.message = message
//    }

// }



import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {

  users_list: IUser[] = [];
  nextId: number = 11; // Inicializamos con el siguiente ID disponible

  selected_user: IUser = {
    id: 0, // Inicializamos en 0 para indicar que es un nuevo usuario
    name: "",
    username: "",
    phone: "",
    website: ""
  }

  message: string = "TABLA DE USUARIOS";

  constructor(private _service: UserService) {
    this._service.getAll().subscribe(
      response => this.users_list = response
    )
  }

  seleccionar_usuario(user: IUser): void {
    this.selected_user = user;
  }

  agregarUsuario(user: IUser) {
    user.id = this.nextId++;
    this.users_list.push({ ...user }); 
  }

  eventoRecibido(message: string) {
    this.message = message;
  }

}
