function checkForSpam(message) {
  const blacklistedWord1 = "spam";
  const blacklistedWord2 = "sale";
  const messageLowerCase = message.toLowerCase();
  const result =
    messageLowerCase.includes(blacklistedWord1) ||
    messageLowerCase.includes(blacklistedWord2);
  return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
