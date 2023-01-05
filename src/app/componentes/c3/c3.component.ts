import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {
  listaTareas:any[]=[];
  mensaje!:string;
  validacion!:boolean;
  @Output() onEnviarTarea= new EventEmitter();
  guardarTarea(nomTarea:HTMLInputElement,desc:HTMLTextAreaElement){
    //validacion
    if(nomTarea.value=="" || desc.value==""){
      this.validacion=false;
      this.mensaje="Escribe el nombre y la descripcion";
      return
    }
    //guardar
    this.listaTareas.push({"nombre": nomTarea.value,"descripcion":desc.value })
    this.onEnviarTarea.emit(this.listaTareas);
    nomTarea.value="";
    desc.value="";

  }
}
