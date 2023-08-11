export function persianNumeralToNumber(persianNumeral: string): number {
  const persianNumerals = '۰۱۲۳۴۵۶۷۸۹';
  const latinNumerals = '0123456789';

  let result = '';
  for (let i = 0; i < persianNumeral.length; i++) {
    const char = persianNumeral[i];
    const index = persianNumerals.indexOf(char);
    if (index !== -1) {
      result += latinNumerals[index];
    } else {
      result += char;
    }
  }

  return parseInt(result, 10);
}
