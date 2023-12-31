export const goodThemes = [
  { theme: "Space Exploration" },
  { theme: "Medieval Fantasy" },
  { theme: "Post-Apocalyptic Survival" },
  { theme: "Cyberpunk Future" },
  { theme: "Pirate Adventure" },
  { theme: "Wild West" },
  { theme: "Superhero Saga" },
  { theme: "Mystery and Detective" },
  { theme: "Horror and Gothic" },
  { theme: "Romantic Drama" },
  { theme: "Historical Epic" },
  { theme: "Mythology and Legends" },
  { theme: "Underwater World" },
  { theme: "Time Travel" },
  { theme: "Zombie Apocalypse" },
  { theme: "Steampunk Era" },
  { theme: "Alien Invasion" },
  { theme: "High School Drama" },
  { theme: "Spy and Espionage" },
  { theme: "Virtual Reality" },
  { theme: "Ancient Civilizations" },
  { theme: "Magical Realism" },
  { theme: "Dystopian Society" },
  { theme: "Parallel Universes" },
  { theme: "Viking Lore" },
  { theme: "Tropical Paradise" },
  { theme: "Desert Adventure" },
  { theme: "Urban Life" },
  { theme: "Fairy Tale Fantasy" },
  { theme: "Political Intrigue" },
  { theme: "War and Military" },
  { theme: "Science Fiction" },
  { theme: "Lovecraftian Horror" },
  { theme: "Heist and Crime" },
  { theme: "Ninja and Samurai" },
  { theme: "Environmental Conservation" },
  { theme: "Deep Space" },
  { theme: "Prehistoric Times" },
  { theme: "Ancient Egypt" },
  { theme: "Renaissance Era" },
  { theme: "Alternate History" },
  { theme: "Utopian World" },
  { theme: "Artificial Intelligence" },
  { theme: "Road Trip Adventure" },
  { theme: "Winter Wonderland" },
  { theme: "Circus and Carnival" },
  { theme: "Island Survival" },
  { theme: "Jungle Expedition" },
  { theme: "Kingdoms and Empires" },
  { theme: "Martial Arts" },
  { theme: "Culinary Exploration" },
  { theme: "Music and Dance" },
  { theme: "Sports and Competition" },
  { theme: "Supernatural and Paranormal" },
  { theme: "Stealth and Secret Agents" },
  { theme: "Medical Drama" },
  { theme: "Educational and Learning" },
  { theme: "Religious and Spiritual" },
  { theme: "Coming of Age" },
  { theme: "Family and Relationships" },
  { theme: "Disaster and Survival" },
  { theme: "Psychological Thriller" },
  { theme: "Corporate World" },
  { theme: "Animal Kingdom" },
  { theme: "Arctic Exploration" },
  { theme: "Holiday Festivities" },
  { theme: "Rebellion and Revolution" },
  { theme: "Ancient Greece and Rome" },
  { theme: "Fashion and Glamour" },
  { theme: "Treasure Hunting" },
  { theme: "Comedy and Humor" },
  { theme: "Satire and Parody" },
  { theme: "Eastern Cultures" },
  { theme: "Western Cultures" },
  { theme: "Urban Fantasy" },
  { theme: "Suburban Life" },
  { theme: "Futuristic Utopia" },
  { theme: "Ancient Asia" },
  { theme: "Galactic Empire" },
  { theme: "Wilderness Survival" },
  { theme: "Teen Adventure" },
  { theme: "Ethical Dilemmas" },
  { theme: "Cabin in the Woods" },
  { theme: "Casino and Gambling" },
  { theme: "Courtroom Drama" },
  { theme: "Detective Noir" },
  { theme: "Pandemic Outbreak" },
];

export const badThemes = [
  { theme: "Dancing Vegetables" },
  { theme: "Alien Accountants" },
  { theme: "Time-Traveling Toilets" },
  { theme: "Zombie Politicians" },
  { theme: "Killer Flying Tacos" },
  { theme: "Pirate Penguins" },
  { theme: "Ninja Hamsters" },
  { theme: "Vampire Dentists" },
  { theme: "Cowboy Clowns" },
  { theme: "Singing Fish" },
  { theme: "Mutant Spaghetti Monsters" },
  { theme: "Robot Chefs in Space" },
  { theme: "Invisible Unicorns" },
  { theme: "Ghostly Gardeners" },
  { theme: "Laser-Wielding Llamas" },
  { theme: "Superhero Snails" },
  { theme: "Disco Werewolves" },
  { theme: "Giant Talking Sandwiches" },
  { theme: "Mermaid Astronauts" },
  { theme: "Bumbling Time Travelers" },
  { theme: "Spying Houseplants" },
  { theme: "Karate Cats" },
  { theme: "Rapping Robots" },
  { theme: "Underwater Cowboys" },
  { theme: "Flying Frogs" },
  { theme: "Talking Tornadoes" },
  { theme: "Breakdancing Bears" },
  { theme: "Intergalactic Garden Gnomes" },
  { theme: "Wrestling Wizards" },
  { theme: "Soccer-Playing Sharks" },
  { theme: "Clumsy Cyborgs" },
  { theme: "Giant Ant Picnic Attack" },
  { theme: "Moon Cheese Mining" },
  { theme: "Haunted Pizza Parlors" },
  { theme: "Dinosaur Detectives" },
  { theme: "Caveman Future World" },
  { theme: "Magical Microwave Adventures" },
  { theme: "Time-Looping Teachers" },
  { theme: "Balloon Animal Safari" },
  { theme: "Jellybean Kingdoms" },
  { theme: "Talking Traffic Cones" },
  { theme: "Baking Battle Royale" },
  { theme: "Alien Abduction Insurance Salesman" },
  { theme: "Mismatched Sock Rebellion" },
  { theme: "Space Pirate Radio Station" },
  { theme: "Gargantuan Goldfish Takeover" },
  { theme: "Snoring Contests" },
  { theme: "Hypnotized Hippos" },
  { theme: "Kung Fu Kangaroos" },
  { theme: "Banana Peel Slapstick" },
  { theme: "Yodeling Yetis" },
  { theme: "Quirky Quantum Physicists" },
  { theme: "Zany Zoo Escapes" },
  { theme: "Circus on Mars" },
  { theme: "Gladiator Garden Snails" },
  { theme: "Chocolate Rain World" },
  { theme: "Opera-Singing Ostriches" },
  { theme: "Toothbrush Time Travelers" },
  { theme: "Rebellious Refrigerators" },
  { theme: "Whimsical Whales in Wigs" },
  { theme: "Mystical Pizza Prophecies" },
  { theme: "Lost Luggage Limbo" },
  { theme: "Bizarre Bread Baking Bonanza" },
  { theme: "Mole People Revolution" },
  { theme: "Chatty Chair Chronicles" },
  { theme: "Party-Planning Penguins" },
];

export const getRandomTheme = () => {
  const combineThemes = Math.random() < 0.5;

  if (combineThemes) {
    const goodTheme = goodThemes[Math.floor(Math.random() * goodThemes.length)];
    const badTheme = badThemes[Math.floor(Math.random() * badThemes.length)];

    return `${goodTheme.theme} and ${badTheme.theme}`;
  } else {
    const allThemes = [...goodThemes, ...badThemes];
    const theme = allThemes[Math.floor(Math.random() * allThemes.length)].theme;

    return theme;
  }
};
