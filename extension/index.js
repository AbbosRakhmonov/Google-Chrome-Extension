const fs = require("fs");

let data = fs.readFileSync("test.txt", "utf8");
// split with ++++ and remove empty strings
let lines = data.split("++++").filter(Boolean);

const questions = [];
for (let i = 0; i < lines.length; i++) {
  const eachQuestion = lines[i].split("====");
  const title = eachQuestion.shift().trim();
  const answer = eachQuestion
    .map((item) => item.trim())
    .filter((item) => item.startsWith("#"))
    .map((item) => item.replaceAll("#", ""))[0];
  questions.push({
    title,
    answer: answer.trim()
  });
}

fs.writeFileSync("questions.json", JSON.stringify(questions, null, 2));
