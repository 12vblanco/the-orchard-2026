export type MenuType = "food" | "drinks";

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  featured?: boolean;
  note?: string;
};

export type MenuCategory = {
  name: string;
  items: MenuItem[];
  note?: string;
};

export type SubMenu = {
  id: string;
  name: string;
  type: MenuType;
  categories: MenuCategory[];
  servingHours?: string;
  allergyNotice?: string;
  chipFryerNotice?: string;
  note?: string;
  maxFeaturedCards?: number;
};

export const menus: SubMenu[] = [
  // ====================================================================
  // FOOD — MAIN MENU
  // ====================================================================
  {
    id: "main",
    name: "Main Menu",
    type: "food",
    allergyNotice: "*** Please make your server aware of any allergies ***",
    chipFryerNotice:
      "*please be advised we do not have a dedicated chip fryer, cross contamination may occur*",
    servingHours: "Food Served - Noon 'til 8.30 pm",
    categories: [
      {
        name: "Starters & Lighter Bites",
        items: [
          {
            name: "Meat, Cheese and Bread selection",
            description:
              "Designed for sharing, with cured meats, assorted cheese, bread and dips",
            price: "£17.50",
            featured: true,
          },
          {
            name: "The Orchard's Soup of the Day",
            description: "With crusty bread & butter",
            price: "£6.50",
            vegetarian: true,
          },
          {
            name: "Cockburn's of Dingwall Award Winning Haggis Fritters",
            description: "With tomato chilli jam and balsamic glaze",
            price: "£10.50/£16",
          },
          {
            name: "Cockburn's Black Pudding",
            description:
              "With salad on toasted bread with a soft poached egg and hollandaise sauce",
            price: "£10.50/£16",
            featured: true,
          },
          {
            name: "Harissa Roasted Carrot and Sweet Potatoes",
            description:
              "Served with smoky tabbouleh, coriander, lemon, pomegranate and tahini dressing",
            price: "£10.50/£18",
            vegan: true,
          },
        ],
      },
      {
        name: "The Orchard's Rustic Sandwiches",
        note: "*Available till 4pm",
        items: [
          {
            name: "Flat Iron Steak Sandwich",
            description: "With mixed leaves, tomato chilli jam & mayonnaise",
            price: "£10.50",
            featured: true,
          },
          {
            name: "Sticky Soy Chicken & Coleslaw Sandwich",
            description: "With baby gem lettuce & miso mayonnaise",
            price: "£10.50",
          },
          {
            name: "Roasted Red Pepper & Feta Sandwich",
            description: "With mixed leaves & vegan mayonnaise",
            price: "£10",
            vegan: true,
          },
          {
            name: "Battered Haddock Sandwich",
            description: "With tartare sauce, pea puree & baby gem lettuce",
            price: "£10.50",
          },
          {
            name: "Brie, Bacon & Tomato Chilli Jam Sandwich",
            description: "With baby gem & mayonnaise",
            price: "£10.50",
          },
          {
            name: "*Add a bowl of soup, chips or a house salad to your sandwich",
            description: "",
            price: "£4.50",
          },
        ],
      },
      {
        name: "Mains",
        items: [
          {
            name: "Fresh Haddock & Hand cut Potato Chips",
            description:
              "Crispy beer battered (or breaded for an extra £1) with petit pois & homemade tartare sauce",
            price: "£19",
            featured: true,
          },
          {
            name: "Twice Baked Goats Cheese Soufflé",
            description: "With oven roasted cherry tomatoes",
            note: "*Add a house salad OR chips for £4.50",
            price: "£17.50",
            vegetarian: true,
          },
          {
            name: "The Orchard's Legendary Steak Pie",
            description:
              "With a puff pastry bonnet, green beans & hand cut potato chips",
            price: "£19",
          },
          {
            name: "Spring Green Risotto",
            description:
              "With mangetout, tenderstem broccoli & peas, topped with vegetarian parmesan or Feta",
            price: "£18",
            vegetarian: true,
          },
          {
            name: "Oven Baked Lamb Rump",
            description:
              "Served with sauteed baby pot, sweetcorn and mint chimichurri",
            price: "£24.50",
          },
          {
            name: "Pan-Fried Fillet of Seabass",
            description:
              "Served with tenderstem broccoli on a lemon, roasted cherry tomato & garlic linguine",
            price: "£21",
          },
          {
            name: "The Orchard's Veggie Burger",
            description:
              "Sweet potato, black eyed bean & sweetcorn burger with vegan coleslaw and sriracha mayo & baby gem on a seeded bap with hand cut chips",
            price: "£17.50",
            vegetarian: true,
          },
          {
            name: "The Orchard's Prime Scotch Beef Burger",
            description:
              "With smoked cheddar, onion relish, gherkins, mayo & baby gem on a seeded bap and with hand cut chips",
            note: "*Add bacon for £1.50",
            price: "£18",
            featured: true,
          },
          {
            name: "Sides",
            description:
              "Hand cut chips, onion rings, garlic bread, house salad, mixed olives",
            price: "£5.50",
          },
        ],
      },
    ],
  },

  // ====================================================================
  // FOOD — GLUTEN FREE
  // ====================================================================
  {
    id: "gluten-free",
    name: "Gluten Free",
    type: "food",
    allergyNotice:
      "We do not have a dedicated chip fryer. Cross contamination may occur",
    categories: [
      {
        name: "Starters & Lighter bites",
        items: [
          {
            name: "Meat & Cheese Selection",
            description:
              "Designed for sharing, with cured meats, assorted cheese, gluten free oatcakes and a selection of dips",
            price: "£17.50",
            glutenFree: true,
            featured: true,
          },
          {
            name: "The Orchard's Soup of the Day",
            description: "With gluten free oatcakes",
            price: "£6.50",
            vegetarian: true,
            glutenFree: true,
          },
        ],
      },
      {
        name: "Salads",
        note: "All served with fresh mixed leaves, cucumber, peppers, cherry tomatoes and our house dressing",
        items: [
          {
            name: "Brie, Bacon, Tomato Chilli Jam",
            description: "",
            price: "£10.50",
            glutenFree: true,
          },
          {
            name: "Flat Iron Steak, Tomato Chilli Jam",
            description: "",
            price: "£10.50",
            glutenFree: true,
          },
          {
            name: "Roasted Red Pepper, Whipped Feta",
            description: "",
            price: "£10",
            vegan: true,
            glutenFree: true,
          },
        ],
      },
      {
        name: "Mains",
        note: "*please be advised we do not have a dedicated chip fryer, cross contamination may occur*",
        items: [
          {
            name: "Fresh hand cut Grilled Haddock fillet & hand cut chips OR salad",
            description: "Petit pois and homemade tartare sauce",
            price: "£19",
            glutenFree: true,
            featured: true,
          },
          {
            name: "Twice Baked Goats Cheese Souffle",
            description: "*Add house salad for £4.50",
            price: "£17.50",
            vegetarian: true,
            glutenFree: true,
          },
          {
            name: "The Orchard's Prime Scotch Beef Burger (NO BUN)",
            description:
              "With cheddar cheese, baby gem & onion relish with hand cut chips OR salad",
            note: "*Add bacon for an extra £1.50",
            price: "£18",
            glutenFree: true,
            featured: true,
          },
          {
            name: "The Orchard's Veggie Burger (NO BUN)",
            description:
              "Sweet potato, black eyed bean & sweetcorn burger with Vegan coleslaw & sriracha mayo with hand cut chips OR salad",
            price: "£17.50",
            vegetarian: true,
            glutenFree: true,
          },
          {
            name: "Spring Green Risotto",
            description:
              "With mangetout, tenderstem broccoli & peas, topped with vegetarian parmesan or Feta",
            price: "£18",
            vegetarian: true,
            glutenFree: true,
          },
          {
            name: "Oven Baked Lamb Rump",
            description:
              "Served with sauteed baby pot, sweetcorn and mint chimichurri",
            price: "£24.50",
            glutenFree: true,
          },
          {
            name: "Our Sunday Roasts",
            description:
              "Served on Sunday -- Beef, Chicken & Lamb (see our main menu for details)",
            price: "",
          },
        ],
      },
    ],
  },

  // ====================================================================
  // FOOD — SUNDAY ROASTS
  // ====================================================================
  {
    id: "sunday-roasts",
    name: "Sunday Roasts",
    type: "food",
    allergyNotice: "*** Please make your server aware of any allergies ***",
    servingHours: "Food Served - Noon 'til 8.30 pm",
    note: "**please help us by pre ordering your roast dinner if possible. This will help to guarantee availability for all.",
    categories: [
      {
        name: "Roasts, Sunday 12-8.30pm",
        items: [
          {
            name: "Sirloin of Scotch Beef or Lamb",
            description:
              "With Yorkshire pudding, roast potatoes, beetroot, tenderstem broccoli, carrots & red wine gravy ",
            price: "£25",
            featured: true,
          },
          {
            name: "Chicken Supreme",
            description:
              "With Yorkshire pudding, roast potatoes, beetroot, tenderstem broccoli, carrots & red wine gravy ",
            price: "£23",
          },
        ],
      },
    ],
  },

  // ====================================================================
  // FOOD — KIDS
  // ====================================================================
  {
    id: "kids",
    name: "Kids Menu",
    type: "food",
    allergyNotice: "*** Please make your server aware of any allergies ***",
    servingHours: "Food Served - Noon 'til 8.30 pm",
    note: "Main meal price includes an ice lolly. A selection of soft drinks & fruit juices are available.",
    categories: [
      {
        name: "Main Meals",
        items: [
          {
            name: "Freshly made Soup of the day",
            description: "",
            price: "£3",
          },
          {
            name: "Garlic bread",
            description: "",
            price: "£3",
          },
          {
            name: "Fresh battered haddock with hand cut chips or salad",
            description: "",
            price: "£6.50",
          },
          {
            name: "Sliced chicken breast ",
            description: "Battered or pan-fried, with hand cut chips or salad",
            price: "£6.50",
            featured: true,
          },
          {
            name: "Penne pasta with cheesy sauce or sundried tomato pesto",
            description: "",
            price: "£6.50",
          },
        ],
      },
    ],
  },

  // ====================================================================
  // DRINKS — BEERS
  // ====================================================================
  {
    id: "beers",
    name: "Beers",
    type: "drinks",
    categories: [
      {
        name: "Draught (ABV)",
        note: "Please ask at the bar about our Cask Ales",
        items: [
          { name: "Deuchars IPA (3.8)", price: "£5.50" },
          { name: "Tennents (4.0)", price: "£5.45" },
          { name: "Stella Artois (4.8)", price: "£6.30" },
          { name: "Innis & Gunn Lager (4.6)", price: "£6.50" },
          { name: "Peroni (5.0)", price: "£7.10", featured: true },
          { name: "Pravha (4.0)", price: "£6.30" },
          { name: "Maltsmiths IPA (4.6)", price: "£6.60" },
          { name: "Belhaven Best (3.2)", price: "£5.40" },
          { name: "Belhaven Black Stout (4.2)", price: "£5.90" },
          { name: "Guinness (4.2)", price: "£6.40" },
          { name: "Aspall cider (5.5)", price: "£6.30" },
        ],
      },
      {
        name: "Bottled Beers & Ales",
        items: [
          { name: "Budweiser (4.5) 330ml", price: "£5.60" },
          { name: "Peroni (5) 330ml", price: "£5.60" },
          {
            name: "Peroni Gluten Free (5) 330ml",
            price: "£5.60",
            glutenFree: true,
          },
          { name: "Budvar (5) 330ml", price: "£5.60" },
          { name: "Punk IPA (5.4) 330ml", price: "£6.10" },
          { name: "Heineken (5) 330ml", price: "£5.60" },
          { name: "Corona (4.5) 330ml", price: "£5.60" },
          { name: "Erdinger Weissbier (5.3) 500ml", price: "£6.30" },
          {
            name: "Greene King Gluten Free IPA (3.6) 500ml",
            price: "£5.70",
            glutenFree: true,
          },
        ],
      },
      {
        name: "Bottled Ciders",
        items: [
          {
            name: "Rekorderlig (4) 500ml",
            description: "Strawberry and Lime, Mango & Raspberry, Wild Berries",
            price: "£6.05",
          },
          {
            name: "Old Mout Non-Alcoholic (0%) 500ml",
            description: "Pineapple & Rasp' or Berries & Cherries",
            price: "£5.85",
          },
          { name: "Magners (4.5) 568ml", price: "£6.05" },
          { name: "Crabbies Gingerbeer (4) 500ml", price: "£6.05" },
        ],
      },
      {
        name: "Non-Alcohol Beer",
        items: [
          { name: "Heineken (0.0%) 330ml", price: "£4.80" },
          { name: "Erdinger (<0.5%) 500ml", price: "£5.50" },
          { name: "Guinness (0.0%) 538ml", price: "£5.40" },
        ],
      },
    ],
  },

  // ====================================================================
  // DRINKS — GINS
  // ====================================================================
  {
    id: "gins",
    name: "Gins",
    type: "drinks",
    categories: [
      {
        name: "Scottish Gins",
        items: [
          {
            name: "Arbikie",
            description: "Farm-grown ingredients from Arbroath",
            price: "£4.10",
          },
          {
            name: "Kirsty's",
            description: "Potato base with sea kelp and blueberries",
            price: "£4.10",
          },
          {
            name: "The Botanist",
            description: "31 botanicals from Islay",
            price: "£4.50",
          },
          {
            name: "Caoruun",
            description: "Speyside gin with rowan berries and heather",
            price: "£4.40",
          },
          {
            name: "Daffy's",
            description: "Lebanese mint and rare lemons",
            price: "£4.40",
          },
          {
            name: "Edinburgh Gin",
            description: "Award-winning with milk thistle and pine",
            price: "£4.20",
          },
          {
            name: "Edinburgh Seaside Gin",
            description: "Foraged coastal botanicals",
            price: "£4.20",
          },
          {
            name: "Edinburgh Gin Cannonball",
            description: "57.2% ABV with Szechuan pepper",
            price: "£4.20",
          },
          {
            name: "Harris",
            description: "Notes of pine needles and bitter orange",
            price: "£4.70",
          },
          {
            name: "Hendrick's",
            description: "Rose petals and cucumber",
            price: "£4.40",
            featured: true,
          },
          {
            name: "Pickering's",
            description: "1947 recipe with cardamom and clove",
            price: "£4.20",
          },
          {
            name: "Lind & Lime",
            description: "Traditional London dry from Leith",
            price: "£4.10",
          },
        ],
      },
      {
        name: "World Gins",
        items: [
          {
            name: "Brockman's Gin",
            description: "Blueberries & blackberries",
            price: "£4.20",
          },
          {
            name: "Bombay Sapphire",
            description: "Botanicals from Tuscany and Spain",
            price: "£4.10",
          },
          {
            name: "Gordons",
            description: "Iconic London dry gin",
            price: "£3.15",
          },
          {
            name: "Monkey 47",
            description: "47 botanicals from Schwarzwald",
            price: "£4.80",
          },
          {
            name: "Roku",
            description: "Japanese seasonal botanicals",
            price: "£4.40",
          },
          {
            name: "Tanqueray 10",
            description: "Citrusy full-bodied gin",
            price: "£4.70",
          },
          {
            name: "Tanqueray Sevilla",
            description: "Bittersweet Seville oranges",
            price: "£4.20",
          },
        ],
      },
    ],
  },

  // ====================================================================
  // DRINKS — WHISKY
  // ====================================================================
  {
    id: "whisky",
    name: "Whisky",
    type: "drinks",
    categories: [
      {
        name: "Whisky List",
        items: [
          { name: "Aberfeldy 12", price: "£6.70" },
          { name: "Aberlour 12", price: "£6.70" },
          {
            name: "Annandale 6, 60.4%, Oloroso cask finish, RareFind",
            price: "£6.75",
          },
          { name: "Ardbeg 10", price: "£7.25" },
          { name: "Ardbeg An Oa", price: "£7.20" },
          {
            name: "Ardmore 11, 59.8%, Bourbon ex Laphroaig cask",
            price: "£6.25",
          },
          { name: "Ardnamurchan AD 46.8%", price: "£6.45" },
          { name: "Ardnamurchan AD/09 Cask 58.4%", price: "£7.45" },
          { name: "Ardnamurchan Thomson Brothers 6yr", price: "£8.40" },
          { name: "Arran 10", price: "£6.45" },
          { name: "Arran Machrie Moor, 46%", price: "£6.95" },
          { name: "Auchentoshan 12", price: "£6.45" },
          { name: "Auchentoshan 3 wood", price: "£6.70" },
          { name: "Auchentoshan 18", price: "£8.80" },
          {
            name: "Aultmore 16, 55.4%, 1st fill Oloroso, Tri Carragh",
            price: "£8.75",
          },
          { name: "Ballindalloch 2015, 46%, Vintage release", price: "£8.90" },
          {
            name: "Ballindalloch 2015, 60.8%, Single cask, Oloroso",
            price: "£9.40",
          },
          { name: "Ballindalloch 2016, single cask 61%", price: "£9.40" },
          { name: "Balvenie 12", price: "£6.75" },
          { name: "Balvenie 14, Caribbean Cask", price: "£8.20" },
          { name: "Ben Nevis 10", price: "£6.60" },
          { name: "Bladnoch 13, Bourbon cask, 46.7%", price: "£7.20" },
          { name: "Bladnoch 16, Sherry cask, 46.7%", price: "£8.40" },
          { name: "Bowmore 12", price: "£6.80" },
          {
            name: "Braeval 16, 62%, 1st fill bourbon cask, Rare Find",
            price: "£9.90",
          },
          { name: "Bruichladdich 8, The Classic Laddie", price: "£6.55" },
          { name: "Bunnahabhain 12", price: "£6.45" },
          { name: "Caol Ila 12", price: "£6.60" },
          { name: "Caol Ila 10, Bourbon Cask, 58.7%", price: "£7.75" },
          { name: "Clynelish 14", price: "£6.75" },
          {
            name: "Craigellachie 11, 52.9%, 1st fill Palo Cortado",
            price: "£7.15",
          },
          {
            name: "Craigellachie 11, 52.3%, Amontillado Sherry",
            price: "£6.60",
          },
          { name: "Craigellachie 13, 46%, Bas-Armanac", price: "£6.60" },
          { name: "Daftmill 2009, Fife Strength, 56.3%", price: "£12.25" },
          { name: "Daftmill 2010, 11year old 59.5%", price: "£9.40" },
          { name: "Daftmill 2011, 12 year old, 46%", price: "£9.40" },
          { name: "Dalmore 12", price: "£7.10" },
          { name: "Dalwhinnie 15", price: "£7.25" },
          { name: "Dufftown Distillery 16, 51.1%, RareFind", price: "£7.70" },
          { name: "Glenallachie 10 cask strength 57.2%", price: "£7.55" },
          { name: "Glenallachie 12", price: "£6.45" },
          { name: "Glenallachie 15", price: "£7.60" },
          { name: "Glenallachie 18", price: "£11.25" },
          { name: "Glendronach 12", price: "£6.65" },
          { name: "Glendronach Port wood", price: "£6.45" },
          { name: "Glenfarclas 12", price: "£6.95" },
          { name: "Glenfiddich 12", price: "£6.45" },
          { name: "Glenfiddich 15", price: "£7.95" },
          { name: "Glenfiddich 18", price: "£9.60" },
          {
            name: "Glenglassaugh 11, 55.9%, Red wine finish, Rarefind",
            price: "£5.70",
          },
          { name: "Glen Grant 22", price: "£9.70" },
          { name: "Glen Keith 25, Cadenheads 47.8%", price: "£11.95" },
          { name: "Glenlivet 15", price: "£7.75" },
          {
            name: "Glenlossie 10, 1st fill bourbon, 52.4%, Tri Carragh",
            price: "£6.05",
          },
          { name: "Glenmorangie 14, Quinta Ruben", price: "£7.80" },
          { name: "Glen Scotia 12", price: "£6.45" },
          { name: "Glen Scotia 15", price: "£7.90" },
          { name: "Glen Scotia 18", price: "£10.20" },
          {
            name: "Glen Scotia 9, Heavy peat, Ribera del deuro, 54.3%",
            price: "£6.70",
          },
          {
            name: "Glen Scotia 14, Dragon, Peated, Barolo cask, 56.8%",
            price: "£8.20",
          },
          { name: "Glen Scotia Victoriana 54.2%", price: "£7.45" },
          { name: "Glentauchers 16, RMW, Sherry cask, 46%", price: "£8.20" },
          { name: "Hazelburn 10, 46%", price: "£6.45" },
          { name: "Hazelburn 21", price: "£14.70" },
          { name: "Hibiki Harmony", price: "£8.25" },
          { name: "Highland Park 12", price: "£6.65" },
          { name: "Highland Park 14, Oloroso cask, 57.1%", price: "£7.75" },
          { name: "Highland Park 18", price: "£9.90" },
          { name: "Inchgower 13, refill PX hogshead, 58.3%", price: "£6.75" },
          {
            name: "Islay distillery 11, 55.8%, Old Bodega Cask",
            price: "£8.70",
          },
          { name: "Jura 12", price: "£6.45" },
          { name: "Jura 31, Bourbon cask, Cadenheads, 44.4%", price: "£17.85" },
          {
            name: "Kilchoman, 10, `Loch Gorm`, Sherry cask, 46%",
            price: "£7.75",
          },
          { name: "Kilchoman Machir Bay, 46 %", price: "£7.45" },
          { name: "Kilchoman 13th Edition, 50%", price: "£7.80" },
          { name: "Kilkerran 12", price: "£6.60" },
          { name: "Kilkerran 16", price: "£7.75" },
          { name: "Kilkerran Heavily Peated, 59.2%", price: "£6.45" },
          { name: "Lagavulin 16", price: "£8.20", featured: true },
          { name: "Laphroaig 10, 40%", price: "£6.75" },
          { name: "Laphroaig 10, Cask strength, 56.5%", price: "£7.95" },
          { name: "Ledaig 14, Bourbon cask, 46%", price: "£8.10" },
          { name: "Lindores Abbey MCDXCIV", price: "£6.10" },
          { name: "Lindores Abbey, Friar John Cor, 60.2%", price: "£7.60" },
          {
            name: "Linkwood 17,Signatory,PX & Olorosso casks,57.1%",
            price: "£7.75",
          },
          { name: "Longrow 18", price: "£11.60" },
          { name: "Longrow Peated", price: "£6.45" },
          { name: "Macallan 12 Double cask", price: "£8.20" },
          { name: "Macallan 12 Sherry cask", price: "£8.90" },
          {
            name: "Macallan 13, Signatory, Oloroso Cask, 57.1%",
            price: "£7.40",
          },
          { name: "Mortlach 12", price: "£7.25" },
          { name: "Mossburn 12, Foursquare rum cask, 57.7%", price: "£7.10" },
          { name: "Nikka Coffey Grain", price: "£6.75" },
          { name: "Nikka The Barrel", price: "£6.95" },
          { name: "Oban 14", price: "£7.75" },
          { name: "Paul John 7, Cadenheads, Goa, 55,4%", price: "£7.90" },
          { name: "Port Charlotte 10, 50%", price: "£6.45" },
          { name: "Port Charlotte PMC:01, Syrah Cask, 54.4%", price: "£9.80" },
          { name: "Port Charlotte, Islay Barley, 50%", price: "£8.10" },
          {
            name: "Port Charlotte 2008, 16 year, Woodrows, 58.1%",
            price: "£13.25",
          },
          { name: "Raasay", price: "£6.45" },
          { name: "Scapa 10, 48%", price: "£6.45" },
          {
            name: "Speyside – Glenlivet, 26, Cadenheads 48.9%",
            price: "£9.40",
          },
          { name: "Springbank 5, 57.1%, Bourbon cask", price: "£6.45" },
          { name: "Springbank 10", price: "£6.55" },
          { name: "Springbank 12, cask strength, 55.5%", price: "£7.75" },
          { name: "Springbank 15", price: "£8.20" },
          { name: "Tamdhu 12, 43%", price: "£6.75" },
          {
            name: "Tamdhu 16, 51.7%, 1st fill Oloroso, Rarefind",
            price: "£8.90",
          },
          {
            name: "Teaninich 12, 54.6%, Cheval Blanc cask, Tri Carragh",
            price: "£7.30",
          },
          {
            name: "Teaninich 15, 46%, Sauternes finish, Cadenheads",
            price: "£6.75",
          },
          { name: "Tomatin 12", price: "£6.45" },
          { name: "Tullibardine 26, Cadenheads 43.9%", price: "£9.95" },
          { name: "Yamazaki 12", price: "£11.25" },
        ],
      },
    ],
  },

  // ====================================================================
  // DRINKS — WINE
  // ====================================================================
  {
    id: "wine",
    name: "Wine",
    type: "drinks",
    categories: [
      {
        name: "White Wines",
        items: [
          {
            name: "2023 'G' Garganega | 12.5%",
            description:
              "Alpha Zeta, Veneto, Italy - Lively, crisp, honey, almond & lime",
            price: "£5.75/£6.95/£27.00",
          },
          {
            name: "2023 Dao Branco | 13%",
            description:
              "Grao Vasco, Portugal - Refreshing, pear, pineapple with a mineral bite",
            price: "£5.95/£7.45/£29.00",
          },
          {
            name: "2023 Sauvignon Blanc | 13.5%",
            description:
              "Montes Classic Series, Casablanca, Chile - Fresh, easy drinking with tropical fruit",
            price: "£6.25/£7.95/£32.00",
          },
          {
            name: "2023 Picpoul | 12.5%",
            description:
              "Richemer, Cotes De Thau France - Refreshing citrus, saline character, a perfect match with seafood",
            price: "£6.45/£8.25/£34.00",
          },
          {
            name: "2023 Pinot Grigio | 12.5%",
            description:
              "Ponte del Diavolo, Friuli, Italy - Fresh, pear, almond and elegant palate",
            price: "£6.75/£8.75/£36.00",
          },
          {
            name: "2023 Alvarinho Eschola | 13.5%",
            description:
              "Azevedo, Portugal - Broad rich & creamy with vibrant acidity",
            price: "£6.95/£8.95/£38.00",
          },
          {
            name: "2023 Viognier | 12.5%",
            description:
              "Bodega Garzon Estate, Maldonaldo, Portugal - Dried Apricots & white Peach, firm acidity",
            price: "£7.25/£9.75/£40.00",
          },
          {
            name: "2022 Mendoza Chardonnay | 14.5%",
            description:
              "Kaiken Ultra, Argentina - Fruity, mineral and a touch of smoke",
            price: "£7.75/£9.95/£43.00",
          },
          {
            name: "2023 Sauvignon Blanc | 12%",
            description:
              "Kim Crawford, Marlborough, NZ - Vibrant, passion fruit, melon and blackcurrant bud",
            price: "£7.45/£9.75/£42.00",
          },
          {
            name: "2020 Organic Estate Riesling | 12.0%",
            description:
              "Dreissigacker, Rheinhessen, Germany - Juicy, ripe fruit, subtle spice",
            price: "£49.00/bottle",
          },
          {
            name: "2023 Sancerre | 13.0%",
            description:
              "Domaine des Brosses, Loire, France - Pure, mineral, citrus, herbaceous notes",
            price: "£60.00/bottle",
          },
          {
            name: "2021 Old Vines White Blend | 13.5%",
            description:
              "Moulineux signature, South Africa - Fragrant, floral nose, richly textured",
            price: "£62.00/bottle",
          },
          {
            name: "2019 'La Rocca' Soave Classico | 13%",
            description:
              "Pieropan, Veneto, Italy - Intense, balanced, Garganega at its finest",
            price: "£67.00/bottle",
          },
          {
            name: "2018 'Les Vaudevey' Chablis Premier Cru | 12.5%",
            description:
              "Domaine Laroche, France - Ripe citrus, smoky notes, minerality",
            price: "£77.00/bottle",
          },
          {
            name: "2017 Santa Rita Hills Chardonnay | 12.5%",
            description: "Racines, California, USA",
            price: "£85.00/bottle",
          },
        ],
      },
      {
        name: "Red Wines",
        items: [
          {
            name: "2023 'C' Corvina | 12.5%",
            description:
              "Alpha Zeta, Veneto, Italy - Balanced, juicy, ripe cherries, plums",
            price: "£5.75/£6.95/£27.00",
          },
          {
            name: "2022 Vinho Regional Lisboa Tinto | 13%",
            description:
              "Evaristo, Portugal - Deep ruby in colour, ripe cherries, juicy blackberries and blackcurrants",
            price: "£5.95/£7.45/£29.00",
          },
          {
            name: "2022 Colchagua Merlot | 14.5%",
            description:
              "Montes Classic, Chile - Plum, blackberry, sweet spices",
            price: "£6.25/£7.95/£31.00",
          },
          {
            name: "2022 Familia de Vinos Organic Fairtrade Malbec | 13.5%",
            description:
              "Mendoza, Argentina - Plums, cherries & a hint of violet with round & velvety tannins",
            price: "£6.45/£8.25/£34.00",
          },
          {
            name: "2022 Primitivo di Puglia | 13.5%",
            description:
              "A Mano, Puglia, Italy - Fresh, complex, ripe dark fruits",
            price: "£6.75/£8.75/£36.00",
          },
          {
            name: "2022 Cotes-du-Rhône | 14%",
            description:
              "Famille Perrin, Southern Rhône, France - Redcurrant, peppery spice, soft, balanced",
            price: "£7.25/£9.75/£40.00",
          },
          {
            name: "2022 Cabernet Shiraz | Willunga 100, 14.5%",
            description:
              "McLaren Vale, Australia - Red fruits, complemented with fresh blood orange, spices & fine tannins",
            price: "£6.75/£8.95/£38.00",
          },
          {
            name: "2020 Rioja Reserva | 14.5%",
            description:
              "Izadi, Rioja, Spain - Rich and concentrated with black fruit, hints of tobacco and liquorice",
            price: "£7.75/£9.95/£44.00",
          },
          {
            name: "2022 Tannat, Bodega Garzon Reserve | 14%",
            description:
              "Maldonado, Uruguay - Full bodied, ripe tannins, dark fruit",
            price: "£47.00/bottle",
          },
          {
            name: "2022 Chianti Ruffina | 13.5%",
            description:
              "Selvepiana, Tuscany, Italy - Ripe blackberry, cherry, floral finish",
            price: "£49.00/bottle",
          },
          {
            name: "2022 Morgon 'Les Grand Cras' | 13.0%",
            description:
              "Jean Marc Burgaud, Beaujolais, France - Dark berry fruits, lifted acidity",
            price: "£55.00/bottle",
          },
          {
            name: "2022 'Crimson' Martinborough Pinot Noir | 13%",
            description:
              "Ata Rangi, New Zealand - Food friendly, aromatically enticing, structured",
            price: "£65.00/bottle",
          },
          {
            name: "2017 Syrah Mullineux Signature | 14.5%",
            description:
              "Coastal Region, South Africa - Aromatic, fresh acidity, dusty tannins",
            price: "£69.00/bottle",
          },
          {
            name: "2016 Saint-Émillion Grand Cru | 14.5%",
            description:
              "Chateau Fleur de Lisse, Bordeaux, France - Flavourful, fine grain tannins, fresh finish",
            price: "£75.00/bottle",
          },
          {
            name: "2018 Chateauneuf-du-Pape 'Les Sinards' | 14.5%",
            description:
              "Famille Perrin 'Les Crus', France - Fresh, forward, spicy red/ black fruit",
            price: "£85.00/bottle",
          },
        ],
      },
      {
        name: "Rosé Wine",
        items: [
          {
            name: "2023 'R' Rosato | 12.5%",
            description:
              "Alpha Zeta, Veneto, Italy - Strawberries, Jasmine, savoury finish",
            price: "£5.75/£7.25/£29.00",
          },
          {
            name: "2023 Grenache Rosé | 12.5%",
            description:
              "Willunga 100, McLaren Vale, Australia - Crisp, dry and pale full of red fruit and rose petal aromas",
            price: "£6.75/£8.75/£39.00",
          },
        ],
      },
      {
        name: "Champagne & Sparkling Wines",
        items: [
          {
            name: "NV Prosecco Superiore Spumante",
            description:
              "Ca' Morlin, Veneto, Italy - Clean, floral, pear, fine bubbles",
            price: "£8.45/£38.00",
          },
          {
            name: "NV Blanc de Blanc Cava",
            description:
              "Penedes, Cataluna, Spain - Fresh & fruity with serious flair",
            price: "£9.45/£48.00",
          },
          {
            name: "NV Essential Cuvée Extra Brut",
            description:
              "Piper Heidseck, Champagne, France - Fine bubbles, apples, almonds, finesse",
            price: "£67.00/bottle",
          },
          {
            name: "NV Rosé Sauvage",
            description:
              "Piper Heidseck, Champagne, France - Well balanced, long smoky finish",
            price: "£78.00/bottle",
          },
          {
            name: "NV Essential Blanc de Blancs Extra Brut",
            description:
              "Piper Heidseck, Champagne, France - Lemon, brioche, full bodied, entrancing mid palate",
            price: "£87.00/bottle",
          },
          {
            name: "2014 Vintage",
            description:
              "Piper Heidseck, Champagne, France - Magnificent maturity, perfectly balanced",
            price: "£110.00/bottle",
          },
        ],
      },
      {
        name: "Sherry, Port & Pudding Wines",
        items: [
          {
            name: "NV Fino Innocente Single Vineyard",
            description:
              "Valdespina, Andalucia, Spain - Complex, almonds, apples & a little saltiness",
            price: "£6.75/£28.00",
          },
          {
            name: "2023 Barosa Valley Botrytis Semillon",
            description:
              "Peter Lehman, Australia - Luscious apricot honey & butterscotch",
            price: "£6.95/£28.00",
          },
          {
            name: "NV Rutherglen Muscat",
            description:
              "Chambers Rosewood, Victoria, Australia - Sweet, rich and unctuous yet zesty & balanced",
            price: "£7.25/£29.00",
          },
          {
            name: "2019 Sauternes",
            description:
              "Chateau Laville, Bordeaux, France - Candied fruits, honey, spice with a citrus finish",
            price: "£8.95/£42.00",
          },
          {
            name: "2018 Unfiltered LBV Port",
            description: "Sandeman, Douro, Portugal",
            price: "£6.75/£48.00",
          },
          {
            name: "NV 10 year old Tawny Port",
            description: "Sandeman, Douro, Portugal",
            price: "£7.45/£55.00",
          },
          {
            name: "NV 20 year old Tawny Port",
            description: "Sandeman, Douro, Portugal",
            price: "£9.45/£85.00",
          },
        ],
      },
    ],
  },

  // ====================================================================
  // DRINKS — RUMS
  // ====================================================================
  {
    id: "rums",
    name: "Rums",
    type: "drinks",
    categories: [
      {
        name: "Barbados",
        items: [
          {
            name: "Foursquare Exceptional Cask Series",
            description:
              "Détente, Mark XIV, 10yr, 51% - Ex Bourbon & Ex port casks",
            price: "£5.80",
          },
          {
            name: "Foursquare Private Cask Series",
            description:
              "Elysium, TWE, 12yr, 60% - Ex Bourbon & Ex Sherry casks",
            price: "£6.10",
          },
          {
            name: "Cadenheads Single Cask Foursquare",
            description: "Foursquare 11yr, single cask, 60.9%",
            price: "£6.60",
          },
          {
            name: "R.L. Seale's 10yr old, 46%",
            description: "",
            price: "£4.60",
          },
          { name: "Mount Gay Eclipse, 40%", description: "", price: "£3.80" },
          { name: "Mount Gay XO, 43%", description: "", price: "£4.10" },
          {
            name: "Mount Gay Black Barrel, 43%",
            description: "",
            price: "£4.40",
          },
          { name: "Doorly's XO, 43%", description: "", price: "£4.90" },
          { name: "Doorly's 12, 43%", description: "", price: "£5.20" },
          { name: "Doorly's 14yr old, 48%", description: "", price: "£5.90" },
          {
            name: "Bristol Classic Foursquare, 11yr, 47%",
            description: "",
            price: "£5.30",
          },
        ],
      },
      {
        name: "Belize",
        items: [
          {
            name: "Travellers single cask, 11yr old, 64.6%",
            description: "",
            price: "£5.80",
          },
          {
            name: "Travellers single cask, 12yr old, 64.1%",
            description: "",
            price: "£6.10",
          },
        ],
      },
      {
        name: "Brazil",
        items: [
          {
            name: "Epris,12yr old, single cask, 51.2%",
            description: "",
            price: "£9.40",
          },
        ],
      },
      {
        name: "Cuba",
        items: [
          {
            name: "Havana Club Especial, 40%",
            description: "",
            price: "£3.80",
          },
          { name: "Havana Club 7, 40%", description: "", price: "£4.10" },
        ],
      },
      {
        name: "Fiji",
        items: [
          {
            name: "Plantation, Fiji Islands, 13 yr, 49.5%",
            description: "",
            price: "£5.80",
          },
        ],
      },
      {
        name: "Guatemala",
        items: [
          { name: "Ron Zacapa 23, 40%", description: "", price: "£5.70" },
        ],
      },
      {
        name: "Guyana",
        items: [
          {
            name: "Cadenheads, Uitvlugt 18yr, 58.7%",
            description: "",
            price: "£8.90",
          },
          { name: "El Dorado 15 yr, 43%", description: "", price: "£6.60" },
          { name: "Woods Old Navy Rum, 57%", description: "", price: "£4.60" },
        ],
      },
      {
        name: "Haiti",
        items: [
          { name: "Clairin Sajous, 55.9%", description: "", price: "£6.20" },
        ],
      },
      {
        name: "Jamaica",
        items: [
          {
            name: "Appleton Estate Signature, 40%",
            description: "",
            price: "£3.80",
          },
          {
            name: "Appleton Estate Rare 12yr, 43%",
            description: "",
            price: "£4.80",
          },
          {
            name: "Appleton Estate 21yr, 43%",
            description: "",
            price: "£12.70",
          },
          {
            name: "Worthy Park, Single estate, 45%",
            description: "",
            price: "£5.80",
          },
          {
            name: "Worthy Park 109, Dark, 54.5%",
            description: "",
            price: "£5.60",
          },
        ],
      },
      {
        name: "Martinique",
        items: [
          {
            name: "Trois Rivieres, *Cuvee de l'ocean*, 42%",
            description: "",
            price: "£4.40",
          },
        ],
      },
      {
        name: "St Lucia",
        items: [
          {
            name: "Chairman's Reserve Original, 40%",
            description: "",
            price: "£3.80",
          },
          {
            name: "Chairman's Reserve Spiced, 40%",
            description: "",
            price: "£3.80",
          },
        ],
      },
      {
        name: "Trinidad",
        items: [
          {
            name: "St. Andrews Rum company",
            description: "Caroni 17yr, 46%",
            price: "£8.30",
          },
          {
            name: "Cadenheads Single Cask Caroni",
            description: "Caroni 20yr, single cask, 60.6%",
            price: "£12.50",
          },
        ],
      },
      {
        name: "Venezuela",
        items: [
          { name: "Diplomatico Reserva, 40%", description: "", price: "£4.90" },
          {
            name: "Cadenheads 13yr, single cask 58.6%",
            description: "",
            price: "£5.90",
          },
        ],
      },
    ],
  },

  // ====================================================================
  // DRINKS — TEA, COFFEE & SHERRY
  // ====================================================================
  {
    id: "tea-coffee-sherry",
    name: "Tea, Coffee & Sherry",
    type: "drinks",
    maxFeaturedCards: 1,
    categories: [
      {
        name: "Drinks",
        items: [
          {
            name: "English Breakfast Tea",
            description: "Traditional tea served with milk",
            price: "£2.00",
          },
          {
            name: "Espresso",
            description: "Strong black coffee served in a small shot",
            price: "£2.50",
          },
          {
            name: "Sherry",
            description: "A glass of sweet sherry",
            price: "£4.00",
          },
        ],
      },
    ],
  },
];
