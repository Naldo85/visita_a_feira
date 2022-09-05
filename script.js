// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

let line = gets().split(" ");
let pimentoes_amarelos = parseInt(line[0]);
let pimentoes_vermelhos = parseInt(line[1]);

//TODO: Faça a soma do número de pimentões e imprima o resultado

let total = pimentoes_vermelhos + pimentoes_amarelos;

print("X =  " + total);