import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from './../../services/api';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  nome: string = "";
  cpf: string = "";
  email: string = "";
  senha: string = "";
  nivel: string = "";
  id: string = "";
  constructor(
    private router:Router,
    private provider: Api,
    private actRouter: ActivatedRoute
    
    ) { }

  ngOnInit() {
    // ACT ROUTER SERVE PARA RECEBER E PASSAR PARAMETROS ENTRE PÁGINAS
    this.actRouter.params.subscribe((data:any)=>{

    });
  }
  Usuarios(){
    this.router.navigate(['usuarios'])
  }

  cadastrar(){
    return new Promise(resolve =>{
      this.provider.dadosApi(dados, 'usuarios/inserir.php')
    });
  }

  editar(){
    
  }

}
