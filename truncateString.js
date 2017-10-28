function truncateString(str, num) {
  // Clear out that junk in your trunk
  var dots = "...";

  if (num <= 3) {
    return str.slice(0, num).concat(dots);
  } else if (num >= str.length) {
    return str;
  } else {
    return str.slice(0, num - 3).concat(dots);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
