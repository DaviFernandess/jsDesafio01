const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




let nickNome;
let xp;
let rank = "";


rl.question('Qual é o seu nickNome? ', (respostanickNome) => {
    nickNome = respostanickNome;

    rl.question('Quanto XP conseguiu? ', (respostaxp) => {
        xp = respostaxp;

      switch (true){
        case (xp <=1000):
            rank = "Ferro "
            break;
        case (xp <= 2000):
            rank = "Bronze"
            break;
        case (xp<=5000):
            rank = "Prata"
            break;
        case (xp<= 7000):
            rank = "Ouro"
            break;
        case (xp <= 8000):
            rank = "Platina"
            break;
        case (xp <=9000):
            rank = "Ascendente"
            break;
        case (xp <=10000):
            rank = "Imortal"
            break;
        case (xp > 10001):
            rank = "Radiante"
            break;

        }  
        
          const resposta = ("Parabéns " + respostanickNome + " O seu elo conquistado foi " + rank)

            console.log(resposta)


        
    
        rl.close();
    });
});

