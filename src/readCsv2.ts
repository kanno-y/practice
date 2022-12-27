type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
  uhyo,26,1
  John Smith,17,0
  Mary Sue, 14, 1
`;

export const users: User[] = [];

const lines = data.split("\n");
console.log("lines", lines);
for (const line of lines) {
  if (line === "") {
    continue;
  }
  console.log("line", line);
  const [name, ageString, premiumUserString] = line.split(",");
  const age = Number(ageString);
  const premiumUser = premiumUserString === "1";

  users.push({
    name,
    age,
    premiumUser,
  });
}

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザー`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません`);
  }
}
