const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printFocecast = (arr) => {
  let print = "";
  for (i = 0; i < arr.length; i++) {
    i < 1
      ? (print += ` ...${arr[i]}°C in ${i + 1} day`)
      : (print += ` ...${arr[i]}°C in ${i + 1} days`);
  }
  console.log(print);
};
printFocecast(arr1);
printFocecast(arr2);
