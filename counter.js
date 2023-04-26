let counter = 0;

const increment = () => {
  console.log(counter);

  counter += 1;

}

setInterval(increment, 2000);

