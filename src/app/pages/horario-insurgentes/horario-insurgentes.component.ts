import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsurgentesModel } from 'src/app/models/insurgente.model';
import { InsurgentesService } from 'src/app/services/insurgentes.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-horario-insurgentes',
  templateUrl: './horario-insurgentes.component.html',
  styleUrls: ['./horario-insurgentes.component.css']
})
export class HorarioInsurgentesComponent implements OnInit {

  horarioinsurgentes: InsurgentesModel = new InsurgentesModel();
  urlS: string[];
  idUser: string;

  constructor(private insurgentesService: InsurgentesService, private router: Router) { 
  var url= window.location.toString();
  this.urlS = url.split('/');
  this.idUser = this.urlS[4];
  };
  ngOnInit(): void {
  }

}
