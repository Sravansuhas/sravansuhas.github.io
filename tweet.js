document.addEventListener("DOMContentLoaded", function () {
  // Get all quote elements inside the article
  const articleBody = document.getElementById("article");
  const quotes = [...articleBody.querySelectorAll("quote, blockquote")];
  let tweetableUrl = "";
  let clickToTweetBtn = null;

  // Get a url of the current page
  const currentPageUrl = window.location.href;

  quotes.forEach(function (quote) {
    // Create a tweetable url
    tweetableUrl = makeTweetableUrl(quote.innerText, currentPageUrl);

    // Create a 'click to tweet' button with appropriate attributes
    clickToTweetBtn = document.createElement("a");
    clickToTweetBtn.innerText = "Click to Tweet";

    clickToTweetBtn.setAttribute("href", tweetableUrl);
    clickToTweetBtn.onclick = onClickToTweet;

    // Add button to every blockquote
    quote.appendChild(clickToTweetBtn);
  });
});

function makeTweetableUrl(text, pageUrl) {
  const tweetableText =
    "https://twitter.com/intent/tweet?url=" +
    pageUrl +
    "&text=" +
    encodeURIComponent(text);

  return tweetableText;
}

function onClickToTweet(e) {
  e.preventDefault();

  window.open(
    e.target.getAttribute("href"),
    "twitterwindow",
    "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
  );
}
