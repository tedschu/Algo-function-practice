const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return "unknown ticket id";
  } else if (tickets[ticketId] === null) {
    return "not sold";
  } else return `sold to ${tickets[ticketId]}`;

  //return tickets[ticketId];
}

console.log(ticketStatus(tickets, "RE90VAW7"));
// => 'unknown ticket id'

console.log(ticketStatus(tickets, "0H2AZ123"));
// => 'not sold'

console.log(ticketStatus(tickets, "23LA9T41"));
// => 'sold to Verena Nardi'
