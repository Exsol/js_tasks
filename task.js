var denominations = [100, 50, 20, 10, 5, 1]

function giveChange (total) {
  var piles = new Array(denominations.length).fill(0)
  var i = 0;
  while (total > 0 && i < denominations.length) {
    var denomination = denominations[i]
    var needed = Math.min(Math.floor(total / denomination), 10)
    total -= denomination * needed
    piles[i] = needed
    i++
  }
  piles.reverse();
  return piles
}

