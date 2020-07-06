class SenhaController{

  constructor(){

    let $ = document.querySelector.bind(document);

    this._nome = $("#nome");
    this._quantidade = $("#caracteres");
    this._mM = $("#mM");
    this._num = $("#numeros");
    this._sym = $("#symbols")
    this._salvar = $("#salvar")

    this._campoSenha = $("#senhaGerada");

    this._Senha = new Senha(this._nome);
  }

  _geraLogica(){

    
    let logica = SenhaHelper.checaAtivo(this._mM.checked) + SenhaHelper.checaAtivo(this._num.checked) + SenhaHelper.checaAtivo(this._sym.checked);
    return logica;
  }

  criaSenha(){
    let senha = this._Senha.geraSenha(this._geraLogica(), this._quantidade.value);
    this._campoSenha.innerHTML = senha;
  }

  _copiar(){

    this._campoSenha.select();
    document.execCommand("copy");
    alert("Senha copiada!");
  }

}
