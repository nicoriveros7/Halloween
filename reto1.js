function createMagicPotion(potions, target) {
  result = undefined;

  for (let i = 0; i < potions.length; i++) {
    for (let j = i + 1; j < potions.length; j++) {
      if (potions[i] + potions[j] === target) {
        if (!result || j < result[1]) {
          result = [i, j];
        }
      }
    }
  }

  return result;
}
