import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SubeArchivosService } from 'src/app/services/sube-archivos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  forma: FormGroup;
  submitted = false;
  success = false;

  files: any;
  file: any;

  constructor(
    private _subeArchivosService: SubeArchivosService,
    private formBuilder: FormBuilder) {

    this.forma = this.formBuilder.group({
      // name: [''],
      // message: ['']
    });

    this.postFile();
  }

  ngOnInit() {
  }

  postFile() {
    this._subeArchivosService.postFile()
      .subscribe(
        (res: any) => {
          console.log(res);
          alert(res);
        }, (err) => {
          console.log(err);
        });
  }

  onSubmit() {
    this.submitted = true;
    if (this.forma.invalid) {
      return;
    }
    this.success = true;
  }

  convertToBase64() {
   
    // alert("ok");
  }


  //   <script> 
  //   if (window.File && window.FileReader) {
  //       console.log('Todas las características necesarias están instaladas');
  //   } else {
  //       console.warn('The File APIs are not fully supported in this browser.');
  //   }
  //   document.getElementById('archivo').addEventListener('change', eventoElementoSleccionado);
  //   function eventoElementoSleccionado(evento) {
  //       var archivo = evento.target.files[0];
  //       console.log(archivo.type);
  //       if (!archivo.type.match('excel') && !archivo.type.match('spreadsheetml')) {
  //           console.warn('Ese archivo no es del tipo indicado');
  //           return;
  //       }

  //       var reader = new FileReader;
  //       reader.onload = function(file) {
  //           var fileasdataurl = file.target.result;
  //           var comienzoBase64 = fileasdataurl.indexOf('base64,');
  //           if (comienzoBase64 < 0) {
  //               console.warn('No se encontró base64 en el resultado');
  //               return;
  //           }
  //           var comienzoArchivo = comienzoBase64 + 7; // 7 es el número de caracteres en "base64,"
  //           var resultadoBase64 = fileasdataurl.substring(comienzoArchivo);

  //           // Cambia esto por lo que quieras hacer con el string base64
  //           console.log(resultadoBase64);
  //       }
  //       reader.readAsDataURL(archivo); // Esto carga el archivo y cuando termina llama al evento onload pasandole un argumento que contiene,
  //                                      // entre otras cosas, el archivo como base64, asi que no hace falta hacer la conversion manualmente
  //                                      // Si haría falta si se usaran los métodos readAsBinaryString(), readAsText() o readAsArrayBuffer()
  //   }
  // </script>

  }
