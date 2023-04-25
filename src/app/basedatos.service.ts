import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class BaseDatosService {
  constructor() { }
  private apiUrl = 'http://new.mentornow.app/ws.php'; // la URL de tu servidor donde está alojada tu base de datos


  async getDatos() {
    const respuesta = await axios.get(`${this.apiUrl}`);
    return respuesta.data;
  }

  async insertarDatos(datos: any) {
    const respuesta = await axios.post(`${this.apiUrl}/datos`, datos);
    return respuesta.data;
  }

  async actualizarDatos(id: number, datos: any) {
    const respuesta = await axios.put(`${this.apiUrl}/datos/${id}`, datos);
    return respuesta.data;
  }

  async eliminarDatos(id: number) {
    const respuesta = await axios.delete(`${this.apiUrl}/datos/${id}`);
    return respuesta.data;
  }


}
