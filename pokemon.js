const pokemons = [];

function adicionarPokemon() {
  const nome = document.getElementById('nome').value;
  const nivel = parseInt(document.getElementById('nivel').value);
  const sexo = document.getElementById('sexo').value;
  const hpAtual = parseInt(document.getElementById('hpAtual').value);
  const hpMaximo = parseInt(document.getElementById('hpMaximo').value);

  if (nome && nivel && sexo && hpAtual && hpMaximo) {
    // Confirmação com os dados do Pokémon
    const confirmacao = confirm(`Você deseja cadastrar o Pokémon ${nome} com os seguintes dados:\n\n` +
      `Nível: ${nivel}\n` +
      `Sexo: ${sexo}\n` +
      `HP Atual: ${hpAtual}\n` +
      `HP Máximo: ${hpMaximo}`);

    if (confirmacao) {
      pokemons.push({
        nome,
        nivel,
        sexo,
        hpAtual,
        hpMaximo
      });

      const resultado = document.getElementById('resultados');
      resultado.innerHTML += `${nome} cadastrado com sucesso!<br>`;
      document.getElementById('pokemonForm').reset();
    } else {
      // Se o usuário não confirmar, pergunta se deseja editar
      const editar = confirm('Deseja editar os dados?');
      if (editar) {
        // Implementar a função de edição aqui
        // Por exemplo, abrir um modal ou repopular o formulário com os dados atuais
        alert('Funcionalidade de edição ainda não implementada.');
      }
    }
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}