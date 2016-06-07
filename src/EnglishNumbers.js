var from0to19 = ["zero", "one", "two", "three", "four",
                "five", "six", "seven", "eight", "nine",
                "ten", "eleven", "twelve", "thirteen", "fourteen",
                "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

var from20to90 = ["twenty", "thirty", "forty", "fifty",
                  "sixty", "seventy", "eighty", "ninety"]

var minusPrefix = "minus "

function numberInEnglish(number) {
  if (number < 0) return minusPrefix + numberInEnglish(-number)
  if (number >= 1000000) return numberOfBase(number, 1000000, " million")
  if (number >= 1000) return numberOfBase(number, 1000, " thousand")
  if (number >= 100) return numberOfBase(number, 100, " hundred")
  if (number >= 20) return numberOfBase(number, 10, "", "-", tensConverter)
  return from0to19[number]
}

function numberOfBase(number, base, baseInEnglish, divider, digitConverter) {
  digitConverter = digitConverter || numberInEnglish
  divider = divider || " "

  var lastDigits = number % base
  var firstDigits = Math.floor(number / base)
  var firstDigitsInEnglish = digitConverter(firstDigits) + baseInEnglish

  if (lastDigits == 0) {
    return firstDigitsInEnglish
  }

  return firstDigitsInEnglish + divider + numberInEnglish(lastDigits)
}

function tensConverter(digit) {
  return from20to90[digit - 2]
}
