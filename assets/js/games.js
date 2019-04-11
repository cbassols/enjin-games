/*
  Template to add a game

  {
    name: "",
    img: "assets/img/games/xxxxx/xxxxx.png",
    website: "",
    steam: "",
    twitter: "",
    facebook: "",
    telegram: "",
    discord: "",
    youtube: "",
    instagram: "",
    reddit: "",
    medium: "",
  },
*/

var games = [
  {
    name: "War of Crypto",
    img: "assets/img/games/WarOfCrypto/WarOfCrypto.png",
    website: "https://www.warofcrypto.io",
    twitter: "https://twitter.com/WarOfCrypto",
    telegram: "https://t.me/warofcrypto",
    discord: "https://discord.gg/4rPtuvf",
    youtube: "https://www.youtube.com/channel/UCbUso17976KCLVRFDSA3FJw",
    instagram: "https://www.instagram.com/warofcrypto/",
    reddit: "https://www.reddit.com/r/WarOfCrypto/",
    medium: "https://medium.com/war-of-crypto",
  },
  {
    name: "9Lives Arena",
    img: "assets/img/games/9Lives/9Lives.png",
    website: "https://www.9livesarena.com/",
    twitter: "https://twitter.com/9livesarena",
    facebook: "https://www.facebook.com/9Livesarena/",
    telegram: "https://t.me/NineLivesArena",
    discord: "https://discord.gg/weqNqKJ",
    youtube: "https://www.youtube.com/channel/UCkUCWHkOlMY7oEeZVp3Zz4w",
    instagram: "https://www.instagram.com/9livesarena/",
    medium: "https://medium.com/9lives-arena",
  },
  {
    name: "CryptoFights",
    img: "assets/img/games/CryptoFights/CryptoFights.png",
    website: "https://cryptofights.io/",
    twitter: "https://twitter.com/cryptofights",
    facebook: "https://www.facebook.com/cryptofights/",
    telegram: "https://t.me/cryptofightsgroup",
    discord: "https://discord.gg/EJrMsHW",
    youtube: "https://www.youtube.com/c/cryptofights",
    medium: "https://medium.com/cryptofights",
  },
  {
    name: "Age of Rust",
    img: "assets/img/games/AgeOfRust/AgeOfRust.png",
    website: "https://www.ageofrust.games/",
    twitter: "https://twitter.com/SpacePirate_io",
    telegram: "https://t.me/AgeOfRust",
    discord: "https://discord.gg/njjuTGD",
    youtube: "https://www.youtube.com/channel/UCQmnraFrnA3yG0reOckLf9A",
    reddit: "https://www.reddit.com/r/SpacePirateGame/",
    medium: "https://medium.com/age-of-rust-game",
  },
  {
    name: "Forest Knight",
    img: "assets/img/games/ForestKnight/ForestKnight.png",
    website: "https://www.forestknight.io/",
    twitter: "https://www.twitter.com/games_chrono",
    facebook: "https://www.facebook.com/chronogamesofficial/",
    telegram: "https://t.me/Forestknight",
    discord: "https://discord.gg/2awyWYG",
    youtube: "https://www.youtube.com/channel/UC1w_--ydj35pOgFxiVS1zYQ",
    instagram: "https://www.instagram.com/chronogames",
    medium: "https://medium.com/forest-knight",
  },
  {
    name: "Bitcoin Hodler",
    img: "assets/img/games/BitcoinHodler/BitcoinHodler.png",
    website: "https://www.bitcoin-hodler.info/",
    twitter: "https://twitter.com/BitcoinHodlers",
    telegram: "http://t.me/Bitcoin_Hodler",
    instagram: "https://instagram.com/bitcoinhodlers",
    medium: "https://medium.com/@BitcoinHodlers",
  },
  {
    name: "Cats in Mechs",
    img: "assets/img/games/CatsInMechs/CatsInMechs.png",
    website: "https://www.cats-in-mechs.com/",
    twitter: "https://twitter.com/catsinmechs",
    facebook: "http://www.facebook.com/catsinmechs",
    telegram: "https://t.me/catsinmechs",
    youtube: "https://www.youtube.com/channel/UCPYE9gipJcYfMNCNgCXgBkA",
  },
  {
    name: "ReBounce",
    img: "assets/img/games/ReBounce/ReBounce.png",
    twitter: "https://twitter.com/titanflight",
    facebook: "https://www.facebook.com/titanflightstudios/",
    telegram: "https://t.me/TitanFlight",
    youtube: "https://www.youtube.com/channel/UCNTHN9Baszf-esZm729i83Q",
    medium: "https://medium.com/titan-flight-studios",
  },
  {
    name: "HEX World",
    img: "assets/img/games/HEXWorld/HEXWorld.png",
    website: "https://hex.world/",
    twitter: "https://twitter.com/XworldHe",
    discord: "https://discordapp.com/invite/uhprSN3",
    reddit: "https://www.reddit.com/r/HEXworld/",
  },
  {
    name: "AlterVerse",
    img: "assets/img/games/Alterverse/Alterverse.png",
    website: "https://www.alterverse.com/",
    twitter: "https://twitter.com/AlterVerseGame",
    telegram: "https://t.me/alterverse",
    discord: "https://discord.gg/yf7bCzz",
    youtube: "https://www.youtube.com/user/AlterVerseGame",
    medium: "https://medium.com/alterverse",
  },
  {
    name: "Dyverse",
    img: "assets/img/games/Dyverse/Dyverse.png",
    website: "https://dyver.se/",
    twitter: "https://twitter.com/DyverseOfficial",
    facebook: "https://www.facebook.com/DyverseOfficial",
    telegram: "https://t.me/Dyverse",
    discord: "https://discordapp.com/invite/wg5Mq2b",
    reddit: "https://www.reddit.com/r/DyverseOfficial",
    medium: "https://medium.com/@dyverse",
  },
  {
    name: "MagicEspejo ",
    img: "assets/img/games/MagicEspejo/MagicEspejo.png",
    website: "https://magicespejo.com/",
    twitter: "https://twitter.com/beanyfriends",
    facebook: "http://fb.com/magicespejo",
    telegram: "https://t.me/magicespejo",
    instagram: "https://www.instagram.com/magicespejo",
  },
  {
    name: "Containment Corps",
    img: "assets/img/games/ContainmentCorps/ContainmentCorps.png",
    website: "https://containmentcorps.com/",
    steam: "https://store.steampowered.com/app/693830/Containment_Corps/",
    twitter: "https://twitter.com/containmentcorp",
    telegram: "https://t.me/ContainmentCorp",
    medium: "https://medium.com/@nimbusinteractive",
  },
  {
    name: "The Six Dragons",
    img: "assets/img/games/TheSixDragons/TheSixDragons.png",
    website: "http://www.thesixdragons.com/",
    steam: "https://store.steampowered.com/app/749950/The_Six_Dragons/",
    twitter: "https://twitter.com/thesixdragons",
    telegram: "https://t.me/thesixdragons",
    youtube: "https://www.youtube.com/channel/UCkQpo94Ch7fTUmhSp1i1Prg",
    instagram: "http://www.instagram.com/thesixdragonsrpg",
  },
  {
    name: "Shield of Shalwend",
    img: "assets/img/games/ShieldOfShalwend/ShieldOfShalwend.png",
    website: "https://enigma-games.com",
    steam: "",
    twitter: "https://twitter.com/enigmanews",
    facebook: "https://www.facebook.com/EnigmaGames",
    telegram: "https://t.me/enigmagamesinc",
    discord: "https://discord.gg/KsxQNXp",
    youtube: "https://www.youtube.com/user/EnigmaGamesInc",
  },
  {
    name: "Forgotten Artifacts",
    img: "assets/img/games/ForgottenArtifacts/ForgottenArtifacts.png",
    website: "https://forgottenartifacts.io/",
    twitter: "https://twitter.com/ForgottenArtif",
    telegram: "https://t.me/forgottenartifacts",
    discord: "https://discord.gg/szenuMv",
  },
  {
    name: "Kingdom Karnage",
    img: "assets/img/games/KingdomKarnage/KingdomKarnage.png",
    website: "https://kepithorstudios.com/",
    twitter: "https://twitter.com/KepithorStudios",
    facebook: "https://www.facebook.com/Kepithor-Studios-499761503876226",
    telegram: "https://t.me/KingdomKarnage",
  },
  {
    name: "A Turret's Life",
    img: "assets/img/games/ATurretsLife/ATurretsLife.png",
    website: "http://www.aturretslife.com/",
    twitter: "https://twitter.com/KristetraS",
    facebook: "https://www.facebook.com/Kristetra-Studios-766598053687784/",
    telegram: "https://t.me/aturretslife",
    youtube: "https://www.youtube.com/channel/UC32hCWkpRUit-o0e1PHLmSg",
    instagram: "https://www.instagram.com/kristetrastudios/",
  },
  {
    name: "Nestables",
    img: "assets/img/games/Nestables/Nestables.png",
    website: "https://twitter.com/nestablesgame",
    twitter: "https://twitter.com/nestablesgame",
    telegram: "https://t.me/nestablesoffical",
    medium: "https://medium.com/@tribalgaming",
  },
]

