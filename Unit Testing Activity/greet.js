function greet(name) {
  if (name == null)
    return "Hello there!";
  else if (name.size > 1)
  {
    var s = "Hello";
    for (let value of name)
      s = s+", "+value;
    return s+"!";
  }
  else if (name == name.toUpperCase())
    return "HELLO "+name+"!";
  else
    return "Hello, "+name+"!";
}
