/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
function pizzaPrice(pizza, ...extras) {
  const prices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
    ExtraSauce: 1,
    ExtraToppings: 2,
  };

  // extras is an array
  // Base case is when we have pizza + all extras accounted for
  // e.g. when the for loop would terminate
  if (extras.length === 0) {
    return prices[pizza];
  }

  // Solving a smaller piece of the problem: what is the cost of a single "extra"?
  // Analogous to each loop in a for loop...e.g. you have to find out the cost of each extra
  const [firstExtra, ...remainingExtras] = extras;
  const priceOfExtra = prices[firstExtra];

  // Once you have the price of the extra (what you would loop), do the recursive call with a successively smaller extras array (remainingExtras)
  return priceOfExtra + pizzaPrice(pizza, ...remainingExtras);

  //   let priceOfExtras = 0;

  //   // For loop solution
  //   for (let extra of extras) {
  //     priceOfExtras += prices[extra]
  //       }

  //   return prices[pizza] + priceOfExtras
}

console.log(pizzaPrice("Formaggio", "ExtraSauce", "ExtraToppings")); // expect 13
