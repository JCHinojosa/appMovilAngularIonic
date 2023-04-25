import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController, IonicModule } from '@ionic/angular';
import { BaseDatosService } from '../basedatos.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})

export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(public navCtrl: NavController, public BaseDatosService: BaseDatosService) { }

  onSubmit() {
    // Lógica para enviar el formulario
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);
    var respuesta = this.BaseDatosService.insertarDatos(this.email)
    // var respuesta = this.BaseDatosService.getDatos();

    async function ejecutar() {
      const valor = await respuesta;
      console.log(JSON.parse(JSON.stringify(valor)));
    }
    ejecutar();
    // Redirigir al usuario a la página de inicio
    //this.navCtrl.navigateRoot('/home');
  }
}
