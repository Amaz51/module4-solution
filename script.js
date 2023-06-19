const names = ["John", "Jane", "Michael", "Jennifer"];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  
  if (name.charAt(0).toUpperCase() === 'J') {
    console.log(`Goodbye J${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}
