import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.sass']
})
export class TextAreaComponent implements OnInit {
  text: String = '';
  routesArray: string[]=[];
  dataArray: string[]=[];
  objectWithDataAndRoutes: any[] = [];

  constructor() { }


  createArrayFromCopyText(text: any): any {
    console.clear()
      let completeText: string[] = text.split('\n').filter( (x: string) => x != "");


      for (let i = 0; i < completeText.length; i++){
        let eachString: string = completeText[i].replace('\t', '|');

        if (text.includes('\t')){
          completeText[i] = eachString;
        }
      }
      for (let i = 0; i < completeText.length; i++){
        let eachString: string = completeText[i].replace('\t', '|');
        if (text.includes('\t')){
          completeText[i] = eachString;
        }
      }
      for (let i = 0; i < completeText.length; i++){
        let eachString: string = completeText[i].replace('\t', '|');
        if (text.includes('\t')){
          completeText[i] = eachString;
        }
      }
      for (let i = 0; i < completeText.length; i++){
        let eachString: string = completeText[i].replace('\t', '|');
        if (text.includes('\t')){
          completeText[i] = eachString;
        }
      }
      for (let i = 0; i < completeText.length; i++){
        let eachString: string = completeText[i].replace('\t', '|');
        if (text.includes('\t')){
          completeText[i] = eachString;
        }
      }



      let completeTextOriginal: string[] = text;

      let rutaArray: any[] = []
      let dataArray: string[] = []
      let objeto ={
        route: '' ,
        typeData: ''
      };

      let count = 0;
      for(let text of completeText){
          let ruta =  text.split('|').filter(x => x.includes('.')) ;
          let typeData =  text.split('|')
            .filter(x =>
              x.trim() == 'String' ||
              x.trim() == 'string' ||
              x.trim() == 'Object' ||
              x.trim() == 'object' ||
              x.trim() == 'Array' ||
              x.trim() == 'array' ||
              x.trim() == 'Date' ||
              x.trim() == 'date' ||
              x.trim() == 'Decimal' ||
              x.trim() == 'decimal' ||
              x.trim() == 'Int' ||
              x.trim() == 'int' ||
              x.trim() == 'Integer' ||
              x.trim() == 'integer' ||
              x.trim() == 'Boolean'||
              x.trim() == 'boolean'

              ) ;

          if(ruta.join().includes('.')){
            rutaArray.push(ruta.join().trim())
          }

          if(typeof(typeData.join()) == 'string'){
            dataArray.push(typeData.join().trimEnd().trimEnd())
          }
          count++;
          console.log(ruta.join())


          // console.log("revisar",text.split('|'))
      }
      this.routesArray = rutaArray;
      this.dataArray = dataArray.filter(x => x != '')
      if (this.routesArray.length != this.dataArray.length){
          alert('hay ')
      }

      // this.creandoArrayDeObjetos(this.routesArray);
      console.log(this.routesArray);
      console.log('dataArray', this.dataArray);
      console.log('dataArray', this.dataArray.filter(x => dataArray.indexOf(x) === dataArray.lastIndexOf(x)));

      this.groupInEachObject();
  }


  groupInEachObject(): void{


    if(this.routesArray.length == this.dataArray.length){


      let count = 0;
      for(let route of this.routesArray){
        let object = {
          route: '',
          data: ''
        }

        object.route = route;
        object.data = this.dataArray[count];
        this.objectWithDataAndRoutes.push(object);
        count++
      }
      console.log('objectWithDataAndRoutes', this.objectWithDataAndRoutes)


    }else{
      console.error(`hay ${this.routesArray.length} rutas y ${this.dataArray.length}, esto se debe a que los datos deben venir con otros tipos de caracteres, por favor reviselos`);
    }

  }

  createJson(){

  }
  ngOnInit(): void {



    this.createArrayFromCopyText(this.text)
  }

}
