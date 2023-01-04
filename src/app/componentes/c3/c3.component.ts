import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {
  listaTareas:any[]=[]
  mensaje!:string;
  validacion!:boolean;
  guardarTarea(nomTarea:HTMLInputElement,desc:HTMLTextAreaElement){
    if(nomTarea.value=="" || desc.value==""){
      this.validacion=false;
      this.mensaje="Escribe el nombre y la descripcion";
      return
    }
    this.listaTareas.push({"nombre": nomTarea.value,"descripcion":desc.value })
    nomTarea.value="";
    desc.value="";
    console.log(this.listaTareas);
  }
}
