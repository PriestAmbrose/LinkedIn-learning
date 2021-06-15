(function () {
  "use strict";

  // Dealing a regular hand of cribbage, assuming two players
  var cribbageHandSize = 6;

  /**
   * React component for the cards
   *
   * Props: suit, rank
   */
  function Card(props) {
    var color = props.suit === "h" || props.suit === "d" ? "red" : "black";
    var pip = getPip(props.suit);

    return (
      <div className={`card ${color}`}>
        <div className="rank">{props.rank}</div>
        <div className="suit">{pip}</div>
      </div>
    );
  }

  /**
   * React component for the table, root component
   *
   * Props: n/a
   */
  function Table(props) {
    // When the component first loads, get an initial hand so we don't start blank
    const firstHand = [];

    // State for the currently dealt hand
    const [hand, setHand] = React.useState(firstHand);

    // State for the size of hand we want to deal
    const [handSize, setHandSize] = React.useState(cribbageHandSize);

    // Handles clicks of the Shuffle button
    function redeal(evt) {
      evt.preventDefault();

      const newHand = shuffleAndDeal(cribbageHandSize);

      setHand(newHand);
    }

    // Handles the change event for hand size selector
    function changeHandSize(evt) {
      setHandSize(parseInt(evt.target.value, 10));
    }

    // Get all the card components representing the hand in state
    const cards =
      hand.length > 0 ? (
        hand.map(function (card) {
          return (
            <Card
              key={`${card.rank}${card.suit}`}
              rank={card.rank}
              suit={card.suit}
            />
          );
        })
      ) : (
        <div className="empty">(No cards dealt yet)</div>
      );

    // Render the table
    return (
      <div className="table">
        <div className="cards">{cards}</div>

        <div className="actions">
          <button onClick={redeal} title="Shuffle the cards, deal a fresh hand">
            Shuffle &amp; deal
          </button>

          <label>
            How many:
            <select value={handSize} onChange={changeHandSize}>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
            </select>
          </label>
        </div>
      </div>
    );
  }

  // Render the Table on screen
  ReactDOM.render(<Table />, document.getElementById("root"));

  /*******************
   * Helper functions
   *******************/

  /**
   * Returns an array of objects representing a deck of cards
   *
   * Each object is a card with `rank` and `suit` properties
   */
  function getDeck() {
    var ranks = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    var suits = ["h", "s", "d", "c"];

    var deck = [];

    for (var r = 0; r < ranks.length; r++) {
      for (var s = 0; s < suits.length; s++) {
        var card = {
          rank: ranks[r],
          suit: suits[s],
        };

        deck.push(card);
      }
    }

    return deck;
  }

  /**
   * Gets the HTML or character data to show on the card for the suit
   * because we might want to swap these out for icons or images
   */
  function getPip(suit) {
    switch (suit) {
      case "h":
        return "♥";
      case "d":
        return "♦";
      case "c":
        return "♣";
      case "s":
      default:
        return "♠";
    }
  }

  /**
   * React component for the cards
   *
   * Props: suit, rank
   */
  function shuffleAndDeal(handSize) {
    handSize = parseInt(handSize, 10);

    var deck = getDeck();

    deck = shuffle(deck);

    return deck.slice(handSize);
  }

  /**
   * Utilities borrowed from lodash
   */

  function copyArray(source, array) {
    let index = -1;
    const length = source.length;

    array || (array = new Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  function shuffle(array) {
    const length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    let index = -1;
    const lastIndex = length - 1;
    const result = copyArray(array);
    while (++index < length) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
      const value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    return result;
  }
})();
