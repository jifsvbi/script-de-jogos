 //Função para modificar a recompensa da gema
   function modificarGemReward(originalRecompensa) {
    const multiplicador = 5; // Altere este valor para ajustar o multiplicador
    const increasedReward = originalRecompensa * multiplicador;
    return increasedReward;
  }
  
 // Supondo que a função de recompensa original seja assim (substitua pela função real, se conhecida)
   function ganhejoias(estrelasganhas) {
    const baseRecompensa = 250; // Gemas por estrela
    const totalRecompensa = baseRecompensa * estrelasganhas;
    return totalRecompensa;
  }
  
 // Modifique a recompensa usando a função
 const ganhoujoias = modificarGemReward(ganhejoias(3)); // Ajuste as estrelas ganhas conforme necessário
  
  console.log("Gems earned:250", ganhoujoias);
  