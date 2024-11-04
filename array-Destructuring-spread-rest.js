// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
function getFirstCard(deck) {
  const [firstCard, secondCard, ...everythingElse] = deck;

  return firstCard;
}

//console.log(getFirstCard([5, 6, 4, 2, 1]));

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
function getSecondCard(deck) {
  const [firstCard, secondCard, ...everythingElse] = deck;

  return secondCard;
}

//console.log(getSecondCard([1, 2, 3, 4, 5]));

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
function swapTopTwoCards(deck) {
  const newArray = [...deck];

  [newArray[0], newArray[1]] = [newArray[1], newArray[0]];

  return newArray;
}

//console.log(swapTopTwoCards([1, 2, 3, 4, 5]));

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
function discardTopCard(deck) {
  const [topCard, ...everythingElse] = deck;

  return [topCard, everythingElse];
}

//console.log(discardTopCard([1, 2, 3, 4, 5]));

/** @type {Card[]} **/
const FACE_CARDS = ["jack", "queen", "king"];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
function insertFaceCards(deck) {
  const [a, ...everythingElse] = deck;

  const newArray = [a, ...FACE_CARDS, ...everythingElse];

  return newArray;
}

console.log(insertFaceCards([1, 2, 3, 4]));
