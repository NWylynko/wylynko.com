import search from './search.js';

const page = window.location.href.replace("https://wylynko.com/", "");

const pages = [
  "nick", "ella"
]

const difference = pages.map(
  function (x) {
    return search(x, page);
  }
)

var obj = {};
for (var i = 0; i < pages.length; i++) {
   obj[pages[i]] = difference[i];
}

let sorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]})

let most_likely = sorted[0]

window.location.href = "https://wylynko.com/" + most_likely