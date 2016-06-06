var from0to19 = ["zero", "one", "two", "three", "four",
                "five", "six", "seven", "eight", "nine",
                "ten", "eleven", "twelve", "thirteen", "fourteen",
                "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

var from20to90 = ["twenty", "thirty", "forty", "fifty",
                  "sixty", "seventy", "eighty", "ninety"]

var minusPrefix = "minus "

function numberInEnglish(number) {
  if (number < 0) return minusPrefix + numberInEnglish(-number)
  if (number >= 100) return numberFrom100InEnglish(number)
  if (number >= 20) return numberFrom20To90InEnglish(number)
  return from0to19[number]
}

function numberFrom100InEnglish(number) {
  var lastTwoDigits = number % 100
  var firstDigit = Math.floor(number / 100)
  var firstDigitInEnglish = numberInEnglish(firstDigit)
  var hundreds = firstDigitInEnglish + " hundred"

  if (lastTwoDigits == 0) {
    return hundreds
  }

  return hundreds + " " + numberInEnglish(lastTwoDigits)
}

function numberFrom20To90InEnglish(number) {
  var lastDigit = number % 10
  var firstDigit = Math.floor(number / 10)
  var firstDigitInEnglish = from20to90[firstDigit - 2]

  if (lastDigit == 0) {
    return firstDigitInEnglish
  }

  return firstDigitInEnglish + "-" + numberInEnglish(lastDigit)
}
