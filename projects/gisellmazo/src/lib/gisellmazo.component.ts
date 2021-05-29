import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gm-gisellmazo',
  template: `
    <div class="form">
    <label for="">Ingresa tu artista favorito:</label>
    <input type="text" placeholder="Artista Favorito"/>
    <label for="">Escoge tu genero musical favorito:</label>
    <select>
      <option value="pop">Pop</option>
      <option value="rnb">RnB</option>
      <option value="clasica">Clásica</option>
      <option value="urbana">Urbana</option>
      <option value="rock">Rock</option>
    </select>

    <input type="button" class="button" value="Botón Gisell" />
    </div>
  `,
  styles: [
    `
      .form{
        display:flex;
        flex-direction: column;
        width: 300px;
      }

      label{
        color:purple;
        font-weight: bold;
        margin: 20px;
      }

      input{
        width: 300px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid purple;
        }

      select{
        border-radius: 10px;
        height: 30px;
        border: 1px solid purple;
      }  
      .button {
        background-color: purple;
        border: none;
        color: white;
        cursor: pointer;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        padding: 15px 32px;
        width: 200px;
        margin: 30px;
        height: 45px
      }
    `,
  ],
})
export class GisellmazoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
