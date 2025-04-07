while (true) {
  let personagem = ["", "", ""];
  let viloes = ["", "", ""];

  let forcaperso = 0;
  let forcaviloes = 0;

  for (let i = 0; i < 3; i++) {
    let escolhapers = prompt("Digite o nome do seu personagem " + (i + 1) + ":");
    personagem[i] = escolhapers;
    forcaperso += Math.floor(Math.random() * 10) + 1;
  }

  for (let i = 0; i < 3; i++) {
    let indicevilao = Math.floor(Math.random() * 10);
    let possiveisescolhas = ["Darth Vader", "Magneto", "Rasputin", "Venom", "Dique Vigarista", "Tripa Seca", "Conquista", "Ommi Man", "Luthor", "Traralero Tralala"];
    viloes[i] = possiveisescolhas[indicevilao];
    forcaviloes += Math.floor(Math.random() * 10) + 1;
  }

  let mensagem = "Vilões sorteados: " + viloes.join(", ") + "\n";

  if (forcaperso > forcaviloes) {
    mensagem += "Você saiu Vitorioso!!\nForça do seu time: " + forcaperso + "\nForça dos vilões: " + forcaviloes;
  } else if (forcaperso < forcaviloes) {
    mensagem += "Você saiu Derrotado. :(\nForça do seu time: " + forcaperso + "\nForça dos vilões: " + forcaviloes;
  } else {
    mensagem += "EMPATE!!\nForça dos dois times: " + forcaperso;
  }

  alert(mensagem);

  let jogarNovamente = confirm("Deseja jogar novamente?");
  if (!jogarNovamente) {
    break;
  }
}
