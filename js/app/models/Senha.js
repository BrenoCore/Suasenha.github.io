class Senha{
  
  constructor(nome, senha='') {
    
    this.nome = nome;
    this._senhaGerada = senha;
  }

  geraSenha(logica, quantidade){

    let senhaGerada = '';
    let charBank = SenhaHelper.geraCharBank(logica);
    
    
    for(let i=1;i <= quantidade;i++){
      
      
      senhaGerada += SenhaHelper.geraCaracteres(charBank);
      
      if(i == quantidade){
        return senhaGerada;
      }
    }

  }

  set _setarSenha(senha){

    this._senhaGerada = senha;
  }

  get senha(){

    return this._senhaGerada;
  }
}