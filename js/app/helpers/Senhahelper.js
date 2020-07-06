class SenhaHelper{


  constructor(){

    throw new Error('Essa classe não pode ser instanciada');
  }

  static geraCharBank(logica){

    // logica: 00 = Só abc..., 10 = abc...ABC..., 11 = abc...ABC...123..., 01 = abc...123...

    let num = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", 
    "w", "y", "z"];

    let NUM = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X",
    "W", "Y", "Z"];
    
    let numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    let symb = ["!", "@", "#", "$", "%","&", "*", "-", "+", "=", ";", "?", ".", ",", "(", ")", "{", "}", "'", "[", "]"];
    
    if(logica == '000'){

      return num;
    }
    
    if(logica == '100'){

      return num.concat(NUM);
    }
    
    if(logica == '010'){

      return num.concat(numb);
    }
    
    if(logica == '001'){

      return num.concat(symb);
    }
    
    if(logica == '111'){

      return num.concat(symb, NUM, numb);
    }
    
    if(logica == '110'){

      return num.concat(NUM, numb);
    }
    
    if(logica == '011'){

      return num.concat(numb, symb);
    }
    if(logica == '101'){

      return num.concat(symb, NUM);
    }

  }
  
  static geraCaracteres(CharBank){
    
    return CharBank[Math.floor(Math.random() * CharBank.length)]
  }

  static checaAtivo(x){

    if(x == true){
      
      return "1"
    }
    else{

      return "0"
    }
  }

}