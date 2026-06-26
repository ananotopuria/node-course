export function capitalize(str) {
  return str.toUpperCase();
}

export function isPalindrome(str) {
  const cleaned = str.toLowerCase().replaceAll(" ", "");
  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

export function longestWord(sentence) {
  const words = sentence.split(" ");

  let longest = words[0];

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
