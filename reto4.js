function findTheKiller(whisper, suspects) {
  whisper = whisper.toLowerCase();

  let matches = [];

  for (let suspect of suspects) {
    let lowerSuspect = suspect.toLowerCase();

    if (
      whisper[whisper.length - 1] === "$" &&
      lowerSuspect.length !== whisper.length - 1
    ) {
      continue;
    } else if (
      lowerSuspect.length <
      whisper.length - (whisper[whisper.length - 1] === "$" ? 1 : 0)
    ) {
      continue;
    }

    let matchesPattern = true;
    for (let i = 0; i < whisper.length; i++) {
      if (whisper[i] === "$") break; // Terminamos si llegamos al $
      if (whisper[i] !== "~" && whisper[i] !== lowerSuspect[i]) {
        matchesPattern = false;
        break;
      }
    }

    if (matchesPattern) {
      matches.push(suspect);
    }
  }

  if (matches.length === 1) {
    return matches[0];
  } else if (matches.length > 1) {
    return matches.join(",");
  } else {
    return "";
  }
}
