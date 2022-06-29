var quoteList = ["Plant Trees", "Reduce the Usage of Cars", "Save Energy", "Grow Foods", "Raise Awareness"];

var myBtn = document.getElementById("myBtn");
var quote = document.getElementById("quote");
var count = 0;

myBtn.addEventListener("click", displayQuote);

function displayQuote(){ quote.innerHTML = quoteList[count]; count = count+1; if (count == quoteList.length){ count = 0 }
}

