var quotes = [
    'Don\'t worry about what anybody else is going to do. The best way topredict the future is to invent it.  -- Alan Kay',
    'Premature optimization is the root of all evil (or at least most of it)in programming.  -- Donald Knuth',
    'Lisp has jokingly been called "the most intelligent way to misuse acomputer". I think that description is a great compliment because ittransmits the full flavor of liberation: it has assisted a number of ourmost gifted fellow humans in thinking previously impossible thoughts.  -- Edsger Dijkstra, CACM, 15:10',
    'Keep away from people who try to belittle your ambitions. Small peoplealways do that, but the really great make you feel that you, too, canbecome great.  -- Mark Twain',
    'What Paul does, and does very well, is to take ideas and concepts thatare beautiful in the abstract, and brings them down to a real worldlevel. That\'s a rare talent to find in writing these days.   -- Jeff "hemos" Bates, Director, OSDN; Co-evolver, Slashdot'
    ]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}