import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController, IonicModule } from '@ionic/angular';



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

  constructor(public navCtrl: NavController) { }

  onSubmit() {
    // Lógica para enviar el formulario
    console.log('Email: ' + this.email);
    console.log('Password: ' + this.password);

    // Redirigir al usuario a la página de inicio
    //this.navCtrl.navigateRoot('/home');
  }
}
