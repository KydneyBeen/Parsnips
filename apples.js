//Loops: Hands-on Exercises

//Exercise 1: the fizzbuzz challenge
challenge = 0;
while (challenge < 100) {
  if (challenge % 3 == 0 && challenge % 5 == 0) console.log("fizzbuzz");
  else if (challenge % 3 == 0) console.log("fizz");
  else if (challenge % 5 == 0) console.log("buzz");
  else console.log(challenge);
  challenge++;

  }

//Exercise 2: Chess Board String
chess = "";
numberOfRows = 20;
numberOfColumns = 20;
for (rows = 0; rows < numberOfRows; rows++) {
  for (columns = 0; columns < numberOfColumns; columns++) {
    if((rows + columns) % 2 == 0) chess = chess + "#";
    else if ((rows + columns) % 2 != 0) chess = chess + " ";
  }
  chess = chess + "\n"
}
console.log(chess)