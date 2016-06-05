var from0to19 = ["zero", "one", "two", "three", "four",
                "five", "six", "seven", "eight", "nine",
                "ten", "eleven", "twelve", "thirteen", "fourteen",
                "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

var from20to90 = ["twenty", "thirty", "fourty", "fifty",
                  "sixty", "seventy", "eighty", "ninety"]

var minusPrefix = "minus "

function numberInEnglish(number) {
  if (number < 0) return minusPrefix + numberInEnglish(-number)
  if (number >= 20) return from20to90[number / 10 - 2]
  return from0to19[number]
}
