var from0to19 = ["zero", "one", "two", "three", "four",
                "five", "six", "seven", "eight", "nine",
                "ten", "eleven", "twelve", "thirteen", "fourteen",
                "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

var minusPrefix = "minus "

function numberInEnglish(number) {
  if (number < 0) return minusPrefix + numberInEnglish(-number)
  return from0to19[number]
}
