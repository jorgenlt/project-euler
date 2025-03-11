import { readFile } from "fs/promises";
import alphabet from "../utils/alphabetLowercase.js";

const parseInput = (input) => {
  return input.split(",").map(Number);
};

const decrypt = (codes, key) => {
  const result = [];
  for (let i = 0; i < codes.length; i++) {
    // XOR with key[i mod 3]
    const asciiKey = key[i % 3].charCodeAt(0);
    result.push(String.fromCharCode(codes[i] ^ asciiKey));
  }
  return result.join("");
};

const solveProblem = (input) => {
  const codes = parseInput(input);

  for (let i = 0; i < alphabet.length; i++) {
    const char1 = alphabet[i];
    for (let j = 0; j < alphabet.length; j++) {
      const char2 = alphabet[j];
      for (let k = 0; k < alphabet.length; k++) {
        const char3 = alphabet[k];
        const key = char1 + char2 + char3;

        const decrypted = decrypt(codes, key);

        if (/diameter/.test(decrypted)) {
          const asciiSum = decrypted
            .split("")
            .reduce((sum, char) => sum + char.charCodeAt(0), 0);

          return asciiSum;
        }
      }
    }
  }
};

const main = async () => {
  try {
    const input = (await readFile("input.txt", "utf-8")).trim();
    console.log(solveProblem(input));
  } catch (err) {
    console.error(err);
  }
};

main();
