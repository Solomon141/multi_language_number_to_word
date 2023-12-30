function TgconvertNumberToWord(numberVal) {
  const powers = ["ሺ ", "ሚልየን ", "ቢልየን "];
  const ones = [
    "ሓደ",
    "ክልተ",
    "ሶስት",
    "አራት",
    "አምስት",
    "ስድስት",
    "ሰባት",
    "ስምንት",
    "ዘጠኝ",
    "አስር",
  ];
  const tens = ["አስራ", "ሀያ", "ሰላሳ", "አርባ", "ሀምሳ", "ስልሳ", "ሰባ", "ሰማንያ", "ዘጠና"];

  let wordValue = "";

  if (numberVal === 0) return "ዜሮ";
  if (numberVal < 0) {
    wordValue = "አሉታዊ ";
    numberVal = -numberVal;
  }

  const partStack = [0, 0, 0, 0];
  let partNdx = 0;

  while (numberVal > 0) {
    partStack[partNdx++] = numberVal % 1000;
    numberVal = Math.floor(numberVal / 1000);
  }

  for (let i = 3; i >= 0; i--) {
    let part = partStack[i];

    if (part >= 100) {
      wordValue += ones[Math.floor(part / 100) - 1] + " መቶ ";
      part %= 100;
    }

    if (part > 10) {
      if (part % 10 !== 0) {
        wordValue += tens[Math.floor(part / 10) - 1] + " ";
        wordValue += ones[(part % 10) - 1] + " ";
      } else {
        wordValue += tens[Math.floor(part / 10) - 2] + " ";
      }
    } else if (part > 0) {
      wordValue += ones[part - 1] + " ";
    }

    if (part !== 0 && i > 0) wordValue += powers[i - 1];
  }

  return wordValue.trim();
}

exports.TgNumberToWord = (theoriginalnumber) => {
  let TgnewText = "";
  function isFloat(n) {
    return n === +n && n !== (n | 0);
  }
  if (isFloat(theoriginalnumber)) {
    let strnum = theoriginalnumber.toString();
    let dotindex = strnum.indexOf(".");

    let firstHalf = strnum.substring(0, dotindex);
    let secondHalf = strnum.substring(dotindex + 1);
    TgnewText = TgconvertNumberToWord(firstHalf);
    TgnewText =
      TgnewText + " ብር ከ " + TgconvertNumberToWord(secondHalf) + " ሳንቲም ብቻ";
  } else {
    TgnewText = TgconvertNumberToWord(theoriginalnumber) + " ብር ብቻ";
  }

  return TgnewText;
};
