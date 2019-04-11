(function(){
  loadGames()
})(jQuery);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



function loadGames() {
  games = shuffle(games);
  games.forEach((game, i) => {
    const website = game.website ? `<a href="${game.website}" class="game-link"><i class="fas fa-globe"></i></a>` : '';
    const steam = game.steam ? `<a href="${game.steam}" class="game-link"><i class="fab fa-steam"></i></a>` : '';
    const twitter = game.twitter ? `<a href="${game.twitter}" class="game-link"><i class="fab fa-twitter"></i></a>` : '';
    const facebook = game.facebook ? `<a href="${game.facebook}" class="game-link"><i class="fab fa-facebook"></i></a>` : '';
    const telegram = game.telegram ? `<a href="${game.telegram}" class="game-link"><i class="fab fa-telegram-plane"></i></a>` : '';
    const discord = game.discord ? `<a href="${game.discord}" class="game-link"><i class="fab fa-discord"></i></a>` : '';
    const youtube = game.youtube ? `<a href="${game.youtube}" class="game-link"><i class="fab fa-youtube"></i></a>` : '';
    const instagram = game.instagram ? `<a href="${game.instagram}" class="game-link"><i class="fab fa-instagram"></i></a>` : '';
    const reddit = game.reddit ? `<a href="${game.reddit}" class="game-link"><i class="fab fa-reddit"></i></a>` : '';
    const medium = game.medium ? `<a href="${game.medium}" class="game-link"><i class="fab fa-medium"></i></a>` : '';

    $('#games').append(`
        <div class="col-md-4 mb-5">
          <div class="card h-100">
            <img class="card-img-top game-img" src="${game.img}" alt="">
            <!-- div class="card-body">
              <h4 class="card-title">${game.name}</h4>
              <p class="card-text">${game.description}.</p>
            </div -->
            <div class="card-footer">
              ${website}
              ${steam}
              ${twitter}
              ${facebook}
              ${telegram}
              ${discord}
              ${youtube}
              ${instagram}
              ${reddit}
              ${medium}
            </div>
          </div>
        </div>
      `)
  });


}