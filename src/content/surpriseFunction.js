const BLanguage = { a: 'aba', e: 'ebe', i: 'ibi', o: 'obo', u: 'ubu' };
const BLanguageTwoVowels = {
  ebeaba: 'eabea',
  oboobo: 'ooboo',
  ebeibi: 'eibei',
  oboubu: 'oubou',
  ebeebe: 'eebee',
  ibiebe: 'iebie',
};
const allLongVowels = Object.keys(BLanguageTwoVowels).join('|');
const regexp = new RegExp(allLongVowels, 'gi');

export function surpriseFunction(textElements) {
  textElements.forEach((element) => {
    if (element.innerText)
      element.innerText = element.innerText
        .replace(/[aeiou]/g, (m) => BLanguage[m])
        .replace(regexp, (m) => BLanguageTwoVowels[m]);
  });
}
