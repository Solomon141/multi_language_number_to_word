exports.isHundred = (number) => {
  if (number === 100) {
    return "One Hundred";
  } else {
    return "Other than Hundred";
  }
};

exports.sayhi = (name) => {
  return "hi " + name;
};

function convertNumberToWord(numberVal) {
  const powers = ["Thousand ", "Million ", "Billion "];
  const ones = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
    "Twenty",
  ];
  const tens = [
    "Ten",
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  let wordValue = "";

  if (numberVal === 0) return "zero";
  if (numberVal < 0) {
    wordValue = "NEGATIVE ";
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
      wordValue += ones[Math.floor(part / 100) - 1] + " Hundred ";
      part %= 100;
    }

    if (part >= 20) {
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

exports.NumberToWord = (theoriginalnumber) => {
  let newText = "";
  function isFloat(n) {
    return n === +n && n !== (n | 0);
  }
  if (isFloat(theoriginalnumber)) {
    let strnum = theoriginalnumber.toString();
    let dotindex = strnum.indexOf(".");

    let firstHalf = strnum.substring(0, dotindex);
    let secondHalf = strnum.substring(dotindex + 1);
    newText = convertNumberToWord(firstHalf);
    newText =
      newText + " Birr and " + convertNumberToWord(secondHalf) + " Cents Only";
  } else {
    newText = convertNumberToWord(theoriginalnumber) + " Birr Only";
  }

  return newText;
};

function AmconvertNumberToWord(numberVal) {
  const powers = ["ሺ ", "ሚልየን ", "ቢልየን "];
  const ones = [
    "አንድ",
    "ሁለት",
    "ሶስት",
    "አራት",
    "አምስት",
    "ስድስት",
    "ሰባት",
    "ስምንት",
    "ዘጠኝ",
    "አስር",
  ];
  const tens = ["አስር", "ሀያ", "ሰላሳ", "አርባ", "ሀምሳ", "ስልሳ", "ሰባ", "ሰማንያ", "ዘጠና"];

  let wordValue = "";

  if (numberVal === 0) return "zero";
  if (numberVal < 0) {
    wordValue = "NEGATIVE ";
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

exports.AmNumberToWord = (theoriginalnumber) => {
  let AmnewText = "";
  function isFloat(n) {
    return n === +n && n !== (n | 0);
  }
  if (isFloat(theoriginalnumber)) {
    let strnum = theoriginalnumber.toString();
    let dotindex = strnum.indexOf(".");

    let firstHalf = strnum.substring(0, dotindex);
    let secondHalf = strnum.substring(dotindex + 1);
    AmnewText = AmconvertNumberToWord(firstHalf);
    AmnewText =
      AmnewText + " ብር ከ " + AmconvertNumberToWord(secondHalf) + " ሳንቲም ብቻ";
  } else {
    AmnewText = AmconvertNumberToWord(theoriginalnumber) + " ብር ብቻ";
  }

  return AmnewText;
};
