import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component {
  @Input() listaTareaRecibida=[{"nombre":"","descripcion":""}];
  borrarTarea(i:number){
    Swal.fire({
      icon: 'warning',
      title: '¿Deseas eliminar la tarea?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Porfavor!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Tu Tarea a sido eliminada',
          'success'
        )
        this.listaTareaRecibida.splice(i,1);
      }
      return false;
    })
  
    
  }
}
