function battleHorde(zombies, humans) {
  zombies = zombies.split("").map(Number);
  humans = humans.split("").map(Number);

  let poderh = 0;
  let poderz = 0;
  let respuesta = "x";

  for (let i = 0; i < zombies.length; i++) {
    if (zombies[i] + poderz > humans[i] + poderh) {
      poderz = zombies[i] + poderz - (humans[i] + poderh);
      poderh = 0;
    } else if (zombies[i] + poderz < humans[i] + poderh) {
      poderh = humans[i] + poderh - (zombies[i] + poderz);
      poderz = 0;
    } else {
      poderh = 0;
      poderz = 0;
    }
  }

  if (poderh > poderz) {
    respuesta = poderh + "h";
  } else if (poderz > poderh) {
    respuesta = poderz + "z";
  }

  return respuesta;
}

console.log(battleHorde("444", "282"));
