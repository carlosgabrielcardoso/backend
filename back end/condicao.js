// CONDIÇÃO 
/* se (condição) {
   código aqui 
   } se não {
      código aqui }
*/ 
let idade = 16 
let possuiCNH = true
if(idade >= 16 && possuiCNH == true ) {
    console.log("Você pode dirigir!")
} else {
     console.log("Ande de ônibus ou Uber!")
}

/* TABELA VERDADE:    
para operedor E:      |    operador OU:
V V = V               |    V V = V
V F = F               |    V F = V
F V = F               |    F V = V
F F = F               |    F F = F
F F = F      
