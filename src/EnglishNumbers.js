var from0to9 = ["zero", "one", "two", "three", "four",
                "five", "six", "seven", "eight", "nine"]

function numberInEnglish(number) {
  if (number < 0) return "minus " + numberInEnglish(-number)
  return from0to9[number]
}
