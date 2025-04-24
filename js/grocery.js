document.addEventListener('DOMContentLoaded', function() {
    // Embedded grocery data with all 12 weeks
    const groceryData = [
        {
            week: 1,
            name: "Week 1: Mediterranean (Spring)",
            sections: {
                "Produce": [
                    {name: "Fresh berries (strawberries, blueberries)", quantity: "2 containers"},
                    {name: "Apples", quantity: "6"},
                    {name: "Oranges", quantity: "4"},
                    {name: "Lemons", quantity: "3"},
                    {name: "Cucumber", quantity: "2"},
                    {name: "Tomatoes", quantity: "6"},
                    {name: "Bell peppers (red, yellow)", quantity: "3"},
                    {name: "Zucchini", quantity: "2"},
                    {name: "Eggplant", quantity: "1"},
                    {name: "Carrots", quantity: "1 bunch"},
                    {name: "Spinach", quantity: "1 large bag"},
                    {name: "Mixed salad greens", quantity: "1 large bag"},
                    {name: "Fresh herbs (basil, parsley, mint)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Onions", quantity: "3"},
                    {name: "Spring asparagus", quantity: "1 bunch"},
                    {name: "Spring peas", quantity: "1 cup"}
                ],
                "Protein": [
                    {name: "Greek yogurt", quantity: "32 oz container"},
                    {name: "Feta cheese", quantity: "8 oz"},
                    {name: "Fresh fish (salmon, cod, or sea bass)", quantity: "1 lb"},
                    {name: "Chicken breast", quantity: "1 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "Chickpeas", quantity: "2 cans"},
                    {name: "Lentils", quantity: "1 bag"}
                ],
                "Grains & Pantry": [
                    {name: "Whole grain bread", quantity: "1 loaf"},
                    {name: "Quinoa", quantity: "1 bag"},
                    {name: "Rolled oats", quantity: "1 container"},
                    {name: "Chia seeds", quantity: "1 small bag"},
                    {name: "Walnuts", quantity: "1 bag"},
                    {name: "Almonds", quantity: "1 bag"},
                    {name: "Olive oil (extra virgin)", quantity: "1 bottle"},
                    {name: "Honey", quantity: "1 jar"},
                    {name: "Hummus", quantity: "1 container"},
                    {name: "Almond butter", quantity: "1 jar"},
                    {name: "Kalamata olives", quantity: "1 jar"},
                    {name: "Dried herbs (oregano, thyme, rosemary)", quantity: "as needed"}
                ]
            }
        },
        {
            week: 2,
            name: "Week 2: Mediterranean (Spring)",
            sections: {
                "Produce": [
                    {name: "Fresh berries (raspberries, blackberries)", quantity: "2 containers"},
                    {name: "Pears", quantity: "4"},
                    {name: "Grapefruit", quantity: "3"},
                    {name: "Lemons", quantity: "3"},
                    {name: "Cucumber", quantity: "2"},
                    {name: "Cherry tomatoes", quantity: "1 pint"},
                    {name: "Bell peppers (green, orange)", quantity: "3"},
                    {name: "Artichokes", quantity: "2"},
                    {name: "Fennel", quantity: "1 bulb"},
                    {name: "Carrots", quantity: "1 bunch"},
                    {name: "Arugula", quantity: "1 large bag"},
                    {name: "Romaine lettuce", quantity: "1 head"},
                    {name: "Fresh herbs (dill, oregano, thyme)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Red onions", quantity: "2"},
                    {name: "Spring radishes", quantity: "1 bunch"},
                    {name: "Fava beans", quantity: "1 lb"}
                ],
                "Protein": [
                    {name: "Greek yogurt", quantity: "32 oz container"},
                    {name: "Halloumi cheese", quantity: "8 oz"},
                    {name: "Fresh fish (trout or sardines)", quantity: "1 lb"},
                    {name: "Lamb", quantity: "1 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "White beans", quantity: "2 cans"},
                    {name: "Tempeh", quantity: "8 oz"}
                ],
                "Grains & Pantry": [
                    {name: "Pita bread", quantity: "1 package"},
                    {name: "Farro", quantity: "1 bag"},
                    {name: "Bulgur wheat", quantity: "1 bag"},
                    {name: "Flaxseeds", quantity: "1 small bag"},
                    {name: "Pine nuts", quantity: "1 small bag"},
                    {name: "Pistachios", quantity: "1 bag"},
                    {name: "Olive oil (extra virgin)", quantity: "1 bottle"},
                    {name: "Maple syrup", quantity: "1 small bottle"},
                    {name: "Tahini", quantity: "1 jar"},
                    {name: "Sun-dried tomatoes", quantity: "1 jar"},
                    {name: "Capers", quantity: "1 small jar"},
                    {name: "Dried herbs (mint, za'atar)", quantity: "as needed"}
                ]
            }
        },
        {
            week: 3,
            name: "Week 3: Mediterranean (Spring)",
            sections: {
                "Produce": [
                    {name: "Cherries", quantity: "1 container"},
                    {name: "Apricots", quantity: "6"},
                    {name: "Nectarines", quantity: "4"},
                    {name: "Limes", quantity: "3"},
                    {name: "Persian cucumbers", quantity: "6"},
                    {name: "Heirloom tomatoes", quantity: "4"},
                    {name: "Bell peppers (all colors)", quantity: "4"},
                    {name: "Summer squash", quantity: "2"},
                    {name: "Eggplant", quantity: "1"},
                    {name: "Rainbow carrots", quantity: "1 bunch"},
                    {name: "Baby spinach", quantity: "1 large bag"},
                    {name: "Mixed greens", quantity: "1 large bag"},
                    {name: "Fresh herbs (cilantro, mint, basil)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Shallots", quantity: "3"},
                    {name: "Green beans", quantity: "1 lb"},
                    {name: "New potatoes", quantity: "1 lb"}
                ],
                "Protein": [
                    {name: "Greek yogurt", quantity: "32 oz container"},
                    {name: "Goat cheese", quantity: "4 oz"},
                    {name: "Fresh fish (sea bass or branzino)", quantity: "1 lb"},
                    {name: "Chicken thighs", quantity: "1.5 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "Black beans", quantity: "2 cans"},
                    {name: "Red lentils", quantity: "1 bag"}
                ],
                "Grains & Pantry": [
                    {name: "Sourdough bread", quantity: "1 loaf"},
                    {name: "Couscous", quantity: "1 bag"},
                    {name: "Barley", quantity: "1 bag"},
                    {name: "Hemp seeds", quantity: "1 small bag"},
                    {name: "Hazelnuts", quantity: "1 bag"},
                    {name: "Cashews", quantity: "1 bag"},
                    {name: "Olive oil (extra virgin)", quantity: "1 bottle"},
                    {name: "Raw honey", quantity: "1 jar"},
                    {name: "Baba ganoush", quantity: "1 container"},
                    {name: "Dijon mustard", quantity: "1 jar"},
                    {name: "Marinated artichokes", quantity: "1 jar"},
                    {name: "Dried herbs (sumac, oregano)", quantity: "as needed"}
                ]
            }
        },
        {
            week: 4,
            name: "Week 4: Mediterranean (Spring)",
            sections: {
                "Produce": [
                    {name: "Strawberries", quantity: "2 containers"},
                    {name: "Peaches", quantity: "4"},
                    {name: "Plums", quantity: "6"},
                    {name: "Lemons", quantity: "4"},
                    {name: "English cucumber", quantity: "1"},
                    {name: "Roma tomatoes", quantity: "8"},
                    {name: "Multicolored bell peppers", quantity: "4"},
                    {name: "Zucchini", quantity: "3"},
                    {name: "Japanese eggplant", quantity: "2"},
                    {name: "Beets with greens", quantity: "1 bunch"},
                    {name: "Kale", quantity: "1 large bunch"},
                    {name: "Spring mix", quantity: "1 large bag"},
                    {name: "Fresh herbs (rosemary, sage, thyme)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Vidalia onions", quantity: "2"},
                    {name: "Snap peas", quantity: "1/2 lb"},
                    {name: "Baby carrots", quantity: "1 bag"}
                ],
                "Protein": [
                    {name: "Greek yogurt", quantity: "32 oz container"},
                    {name: "Ricotta cheese", quantity: "8 oz"},
                    {name: "Fresh fish (halibut or snapper)", quantity: "1 lb"},
                    {name: "Turkey breast", quantity: "1 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "Cannellini beans", quantity: "2 cans"},
                    {name: "Green lentils", quantity: "1 bag"}
                ],
                "Grains & Pantry": [
                    {name: "Multigrain bread", quantity: "1 loaf"},
                    {name: "Wild rice", quantity: "1 bag"},
                    {name: "Steel-cut oats", quantity: "1 container"},
                    {name: "Pumpkin seeds", quantity: "1 small bag"},
                    {name: "Almonds", quantity: "1 bag"},
                    {name: "Walnuts", quantity: "1 bag"},
                    {name: "Olive oil (extra virgin)", quantity: "1 bottle"},
                    {name: "Agave nectar", quantity: "1 bottle"},
                    {name: "Tzatziki", quantity: "1 container"},
                    {name: "Whole grain mustard", quantity: "1 jar"},
                    {name: "Roasted red peppers", quantity: "1 jar"},
                    {name: "Dried herbs (bay leaves, oregano)", quantity: "as needed"}
                ]
            }
        },
        {
            week: 5,
            name: "Week 5: Mediterranean (Summer)",
            sections: {
                "Produce": [
                    {name: "Watermelon", quantity: "1 small"},
                    {name: "Cantaloupe", quantity: "1"},
                    {name: "Fresh figs", quantity: "8"},
                    {name: "Lemons", quantity: "4"},
                    {name: "Cucumber", quantity: "3"},
                    {name: "Heirloom tomatoes", quantity: "6"},
                    {name: "Bell peppers (all colors)", quantity: "6"},
                    {name: "Yellow squash", quantity: "2"},
                    {name: "Eggplant", quantity: "2"},
                    {name: "Carrots", quantity: "1 bunch"},
                    {name: "Arugula", quantity: "1 large bag"},
                    {name: "Butter lettuce", quantity: "1 head"},
                    {name: "Fresh herbs (basil, mint, parsley)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Red onions", quantity: "3"},
                    {name: "Fresh corn", quantity: "4 ears"},
                    {name: "Cherry tomatoes", quantity: "1 pint"}
                ],
                "Protein": [
                    {name: "Greek yogurt", quantity: "32 oz container"},
                    {name: "Feta cheese", quantity: "8 oz"},
                    {name: "Fresh fish (swordfish or tuna)", quantity: "1 lb"},
                    {name: "Chicken breast", quantity: "1.5 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "Chickpeas", quantity: "2 cans"},
                    {name: "Black lentils", quantity: "1 bag"}
                ],
                "Grains & Pantry": [
                    {name: "Ciabatta bread", quantity: "1 loaf"},
                    {name: "Orzo pasta", quantity: "1 bag"},
                    {name: "Quinoa", quantity: "1 bag"},
                    {name: "Sunflower seeds", quantity: "1 small bag"},
                    {name: "Pine nuts", quantity: "1 small bag"},
                    {name: "Pistachios", quantity: "1 bag"},
                    {name: "Olive oil (extra virgin)", quantity: "1 bottle"},
                    {name: "Honey", quantity: "1 jar"},
                    {name: "Hummus", quantity: "1 container"},
                    {name: "Pesto", quantity: "1 jar"},
                    {name: "Olives (mixed)", quantity: "1 jar"},
                    {name: "Dried herbs (basil, oregano)", quantity: "as needed"}
                ]
            }
        },
        {
            week: 6,
            name: "Week 6: Mediterranean (Summer)",
            sections: {
                "Produce": [
                    {name: "Peaches", quantity: "6"},
                    {name: "Nectarines", quantity: "4"},
                    {name: "Plums", quantity: "6"},
                    {name: "Limes", quantity: "4"},
                    {name: "Persian cucumbers", quantity: "6"},
                    {name: "Beefsteak tomatoes", quantity: "4"},
                    {name: "Bell peppers (red, yellow)", quantity: "4"},
                    {name: "Zucchini", quantity: "3"},
                    {name: "Italian eggplant", quantity: "1"},
                    {name: "Multicolored carrots", quantity: "1 bunch"},
                    {name: "Spinach", quantity: "1 large bag"},
                    {name: "Romaine hearts", quantity: "1 package"},
                    {name: "Fresh herbs (oregano, thyme, rosemary)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Sweet onions", quantity: "2"},
                    {name: "Green beans", quantity: "1 lb"},
                    {name: "Summer squash", quantity: "2"}
                ],
                "Protein": [
                    {name: "Greek yogurt", quantity: "32 oz container"},
                    {name: "Halloumi cheese", quantity: "8 oz"},
                    {name: "Fresh fish (mahi-mahi or tilapia)", quantity: "1 lb"},
                    {name: "Lamb chops", quantity: "1 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "White beans", quantity: "2 cans"},
                    {name: "French lentils", quantity: "1 bag"}
                ],
                "Grains & Pantry": [
                    {name: "Focaccia bread", quantity: "1 loaf"},
                    {name: "Farro", quantity: "1 bag"},
                    {name: "Bulgur wheat", quantity: "1 bag"},
                    {name: "Sesame seeds", quantity: "1 small bag"},
                    {name: "Hazelnuts", quantity: "1 bag"},
                    {name: "Almonds", quantity: "1 bag"},
                    {name: "Olive oil (extra virgin)", quantity: "1 bottle"},
                    {name: "Maple syrup", quantity: "1 small bottle"},
                    {name: "Baba ganoush", quantity: "1 container"},
                    {name: "Tahini", quantity: "1 jar"},
                    {name: "Marinated artichokes", quantity: "1 jar"},
                    {name: "Dried herbs (za'atar, sumac)", quantity: "as needed"}
                ]
            }
        },
        {
            week: 7,
            name: "Week 7: Okinawan (Summer)",
            sections: {
                "Produce": [
                    {name: "Dragon fruit", quantity: "2"},
                    {name: "Papaya", quantity: "1"},
                    {name: "Pineapple", quantity: "1 small"},
                    {name: "Limes", quantity: "4"},
                    {name: "Japanese cucumber", quantity: "3"},
                    {name: "Cherry tomatoes", quantity: "1 pint"},
                    {name: "Bell peppers (all colors)", quantity: "3"},
                    {name: "Bitter melon", quantity: "2"},
                    {name: "Japanese eggplant", quantity: "3"},
                    {name: "Daikon radish", quantity: "1 large"},
                    {name: "Bok choy", quantity: "2 bunches"},
                    {name: "Cabbage", quantity: "1 head"},
                    {name: "Fresh herbs (shiso, cilantro)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Green onions", quantity: "1 bunch"},
                    {name: "Sweet potato", quantity: "3 medium"},
                    {name: "Shiitake mushrooms", quantity: "8 oz"}
                ],
                "Protein": [
                    {name: "Silken tofu", quantity: "1 package"},
                    {name: "Firm tofu", quantity: "1 package"},
                    {name: "Fresh fish (mackerel or salmon)", quantity: "1 lb"},
                    {name: "Chicken thighs", quantity: "1 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "Edamame", quantity: "1 bag (frozen)"},
                    {name: "Natto", quantity: "2 packages"}
                ],
                "Grains & Pantry": [
                    {name: "Brown rice", quantity: "1 bag"},
                    {name: "Soba noodles", quantity: "1 package"},
                    {name: "Rice vinegar", quantity: "1 bottle"},
                    {name: "Sesame seeds", quantity: "1 small bag"},
                    {name: "Seaweed (nori, wakame)", quantity: "1 package each"},
                    {name: "Bonito flakes", quantity: "1 package"},
                    {name: "Sesame oil", quantity: "1 bottle"},
                    {name: "Miso paste", quantity: "1 container"},
                    {name: "Soy sauce (low sodium)", quantity: "1 bottle"},
                    {name: "Mirin", quantity: "1 bottle"},
                    {name: "Kombu", quantity: "1 package"},
                    {name: "Dried shiitake mushrooms", quantity: "1 package"}
                ]
            }
        },
        {
            week: 8,
            name: "Week 8: Okinawan (Summer)",
            sections: {
                "Produce": [
                    {name: "Mango", quantity: "2"},
                    {name: "Lychee", quantity: "1 lb"},
                    {name: "Kiwi", quantity: "4"},
                    {name: "Limes", quantity: "4"},
                    {name: "Persian cucumber", quantity: "3"},
                    {name: "Grape tomatoes", quantity: "1 pint"},
                    {name: "Shishito peppers", quantity: "8 oz"},
                    {name: "Kabocha squash", quantity: "1 small"},
                    {name: "Chinese eggplant", quantity: "2"},
                    {name: "Carrots", quantity: "1 bunch"},
                    {name: "Baby bok choy", quantity: "3 bunches"},
                    {name: "Napa cabbage", quantity: "1 head"},
                    {name: "Fresh herbs (Thai basil, mint)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Green onions", quantity: "2 bunches"},
                    {name: "Purple sweet potato", quantity: "2 medium"},
                    {name: "Enoki mushrooms", quantity: "2 packages"}
                ],
                "Protein": [
                    {name: "Silken tofu", quantity: "1 package"},
                    {name: "Extra firm tofu", quantity: "1 package"},
                    {name: "Fresh fish (yellowtail or tuna)", quantity: "1 lb"},
                    {name: "Pork tenderloin", quantity: "1 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "Tempeh", quantity: "8 oz"},
                    {name: "Azuki beans", quantity: "1 bag"}
                ],
                "Grains & Pantry": [
                    {name: "Brown rice", quantity: "1 bag"},
                    {name: "Udon noodles", quantity: "1 package"},
                    {name: "Black rice vinegar", quantity: "1 bottle"},
                    {name: "Black sesame seeds", quantity: "1 small bag"},
                    {name: "Seaweed salad mix", quantity: "1 package"},
                    {name: "Furikake seasoning", quantity: "1 jar"},
                    {name: "Toasted sesame oil", quantity: "1 bottle"},
                    {name: "Red miso paste", quantity: "1 container"},
                    {name: "Tamari", quantity: "1 bottle"},
                    {name: "Rice wine", quantity: "1 bottle"},
                    {name: "Dried kelp", quantity: "1 package"},
                    {name: "Umeboshi plums", quantity: "1 jar"}
                ]
            }
        },
        {
            week: 9,
            name: "Week 9: Okinawan (Summer)",
            sections: {
                "Produce": [
                    {name: "Starfruit", quantity: "2"},
                    {name: "Guava", quantity: "3"},
                    {name: "Passion fruit", quantity: "4"},
                    {name: "Limes", quantity: "4"},
                    {name: "Japanese cucumber", quantity: "3"},
                    {name: "Heirloom tomatoes", quantity: "3"},
                    {name: "Shishito peppers", quantity: "8 oz"},
                    {name: "Bitter melon", quantity: "1"},
                    {name: "Japanese eggplant", quantity: "2"},
                    {name: "Daikon radish", quantity: "1 medium"},
                    {name: "Tatsoi", quantity: "1 bunch"},
                    {name: "Red cabbage", quantity: "1 head"},
                    {name: "Fresh herbs (shiso, cilantro)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Green onions", quantity: "1 bunch"},
                    {name: "Japanese sweet potato", quantity: "2 medium"},
                    {name: "Maitake mushrooms", quantity: "8 oz"}
                ],
                "Protein": [
                    {name: "Silken tofu", quantity: "1 package"},
                    {name: "Firm tofu", quantity: "1 package"},
                    {name: "Fresh fish (sea bream or snapper)", quantity: "1 lb"},
                    {name: "Chicken breast", quantity: "1 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "Edamame", quantity: "1 bag (frozen)"},
                    {name: "Black soybeans", quantity: "1 bag"}
                ],
                "Grains & Pantry": [
                    {name: "Brown rice", quantity: "1 bag"},
                    {name: "Soba noodles", quantity: "1 package"},
                    {name: "Rice vinegar", quantity: "1 bottle"},
                    {name: "Mixed sesame seeds", quantity: "1 small bag"},
                    {name: "Nori sheets", quantity: "1 package"},
                    {name: "Katsuobushi (bonito flakes)", quantity: "1 package"},
                    {name: "Sesame oil", quantity: "1 bottle"},
                    {name: "White miso paste", quantity: "1 container"},
                    {name: "Ponzu sauce", quantity: "1 bottle"},
                    {name: "Mirin", quantity: "1 bottle"},
                    {name: "Kombu", quantity: "1 package"},
                    {name: "Dried shiitake mushrooms", quantity: "1 package"}
                ]
            }
        },
        {
            week: 10,
            name: "Week 10: Okinawan (Summer)",
            sections: {
                "Produce": [
                    {name: "Lychee", quantity: "1 lb"},
                    {name: "Longan", quantity: "1 lb"},
                    {name: "Rambutan", quantity: "6"},
                    {name: "Yuzu (or lemon)", quantity: "3"},
                    {name: "Persian cucumber", quantity: "3"},
                    {name: "Cherry tomatoes", quantity: "1 pint"},
                    {name: "Bell peppers (all colors)", quantity: "3"},
                    {name: "Kabocha squash", quantity: "1 small"},
                    {name: "Chinese eggplant", quantity: "2"},
                    {name: "Lotus root", quantity: "1 section"},
                    {name: "Mizuna greens", quantity: "1 bunch"},
                    {name: "Napa cabbage", quantity: "1 head"},
                    {name: "Fresh herbs (Thai basil, mint)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Green onions", quantity: "2 bunches"},
                    {name: "Burdock root (gobo)", quantity: "1 root"},
                    {name: "King oyster mushrooms", quantity: "8 oz"}
                ],
                "Protein": [
                    {name: "Silken tofu", quantity: "1 package"},
                    {name: "Extra firm tofu", quantity: "1 package"},
                    {name: "Fresh fish (sardines or mackerel)", quantity: "1 lb"},
                    {name: "Pork belly", quantity: "1 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "Tempeh", quantity: "8 oz"},
                    {name: "Red beans", quantity: "1 bag"}
                ],
                "Grains & Pantry": [
                    {name: "Brown rice", quantity: "1 bag"},
                    {name: "Rice noodles", quantity: "1 package"},
                    {name: "Black vinegar", quantity: "1 bottle"},
                    {name: "White sesame seeds", quantity: "1 small bag"},
                    {name: "Wakame seaweed", quantity: "1 package"},
                    {name: "Furikake seasoning", quantity: "1 jar"},
                    {name: "Toasted sesame oil", quantity: "1 bottle"},
                    {name: "Awase miso paste", quantity: "1 container"},
                    {name: "Tamari", quantity: "1 bottle"},
                    {name: "Cooking sake", quantity: "1 bottle"},
                    {name: "Dried kelp", quantity: "1 package"},
                    {name: "Umeboshi paste", quantity: "1 jar"}
                ]
            }
        },
        {
            week: 11,
            name: "Week 11: Mediterranean (Summer)",
            sections: {
                "Produce": [
                    {name: "Watermelon", quantity: "1 small"},
                    {name: "Honeydew melon", quantity: "1"},
                    {name: "Fresh figs", quantity: "8"},
                    {name: "Lemons", quantity: "4"},
                    {name: "English cucumber", quantity: "2"},
                    {name: "Heirloom tomatoes", quantity: "4"},
                    {name: "Bell peppers (all colors)", quantity: "4"},
                    {name: "Zucchini", quantity: "3"},
                    {name: "Eggplant", quantity: "2"},
                    {name: "Carrots", quantity: "1 bunch"},
                    {name: "Arugula", quantity: "1 large bag"},
                    {name: "Mixed greens", quantity: "1 large bag"},
                    {name: "Fresh herbs (basil, mint, parsley)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Red onions", quantity: "3"},
                    {name: "Fresh corn", quantity: "4 ears"},
                    {name: "Cherry tomatoes", quantity: "1 pint"}
                ],
                "Protein": [
                    {name: "Greek yogurt", quantity: "32 oz container"},
                    {name: "Feta cheese", quantity: "8 oz"},
                    {name: "Fresh fish (sea bass or branzino)", quantity: "1 lb"},
                    {name: "Chicken breast", quantity: "1.5 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "Chickpeas", quantity: "2 cans"},
                    {name: "Lentils", quantity: "1 bag"}
                ],
                "Grains & Pantry": [
                    {name: "Ciabatta bread", quantity: "1 loaf"},
                    {name: "Orzo pasta", quantity: "1 bag"},
                    {name: "Quinoa", quantity: "1 bag"},
                    {name: "Sunflower seeds", quantity: "1 small bag"},
                    {name: "Pine nuts", quantity: "1 small bag"},
                    {name: "Pistachios", quantity: "1 bag"},
                    {name: "Olive oil (extra virgin)", quantity: "1 bottle"},
                    {name: "Honey", quantity: "1 jar"},
                    {name: "Hummus", quantity: "1 container"},
                    {name: "Pesto", quantity: "1 jar"},
                    {name: "Olives (mixed)", quantity: "1 jar"},
                    {name: "Dried herbs (basil, oregano)", quantity: "as needed"}
                ]
            }
        },
        {
            week: 12,
            name: "Week 12: Mediterranean (Summer)",
            sections: {
                "Produce": [
                    {name: "Peaches", quantity: "6"},
                    {name: "Nectarines", quantity: "4"},
                    {name: "Plums", quantity: "6"},
                    {name: "Limes", quantity: "4"},
                    {name: "Persian cucumbers", quantity: "6"},
                    {name: "Beefsteak tomatoes", quantity: "4"},
                    {name: "Bell peppers (red, yellow)", quantity: "4"},
                    {name: "Zucchini", quantity: "3"},
                    {name: "Italian eggplant", quantity: "1"},
                    {name: "Multicolored carrots", quantity: "1 bunch"},
                    {name: "Spinach", quantity: "1 large bag"},
                    {name: "Romaine hearts", quantity: "1 package"},
                    {name: "Fresh herbs (oregano, thyme, rosemary)", quantity: "1 bunch each"},
                    {name: "Garlic", quantity: "1 head"},
                    {name: "Sweet onions", quantity: "2"},
                    {name: "Green beans", quantity: "1 lb"},
                    {name: "Summer squash", quantity: "2"}
                ],
                "Protein": [
                    {name: "Greek yogurt", quantity: "32 oz container"},
                    {name: "Halloumi cheese", quantity: "8 oz"},
                    {name: "Fresh fish (mahi-mahi or tilapia)", quantity: "1 lb"},
                    {name: "Lamb chops", quantity: "1 lb"},
                    {name: "Eggs", quantity: "1 dozen"},
                    {name: "White beans", quantity: "2 cans"},
                    {name: "French lentils", quantity: "1 bag"}
                ],
                "Grains & Pantry": [
                    {name: "Focaccia bread", quantity: "1 loaf"},
                    {name: "Farro", quantity: "1 bag"},
                    {name: "Bulgur wheat", quantity: "1 bag"},
                    {name: "Sesame seeds", quantity: "1 small bag"},
                    {name: "Hazelnuts", quantity: "1 bag"},
                    {name: "Almonds", quantity: "1 bag"},
                    {name: "Olive oil (extra virgin)", quantity: "1 bottle"},
                    {name: "Maple syrup", quantity: "1 small bottle"},
                    {name: "Baba ganoush", quantity: "1 container"},
                    {name: "Tahini", quantity: "1 jar"},
                    {name: "Marinated artichokes", quantity: "1 jar"},
                    {name: "Dried herbs (za'atar, sumac)", quantity: "as needed"}
                ]
            }
        }
    ];
    
    // Store data globally
    window.groceryData = groceryData;
    
    // Set up event listener for dropdown
    const selector = document.getElementById('grocery-week-selector');
    if (selector) {
        // Clear existing options
        selector.innerHTML = '';
        
        // Add options for all 12 weeks
        groceryData.forEach(week => {
            const option = document.createElement('option');
            option.value = week.week;
            option.textContent = week.name;
            selector.appendChild(option);
        });
        
        // Display first week by default
        displayGroceryWeek(groceryData[0]);
        
        // Add change event listener
        selector.addEventListener('change', function() {
            const selectedWeek = parseInt(this.value);
            const weekData = groceryData.find(week => week.week === selectedWeek);
            if (weekData) {
                displayGroceryWeek(weekData);
            }
        });
    }
    
    // Function to display a grocery week
    function displayGroceryWeek(weekData) {
        const display = document.getElementById('grocery-week-display');
        if (!display) return;
        
        // Update week title
        display.innerHTML = `<h3>${weekData.name}</h3>`;
        
        // Add each section
        for (const [sectionName, items] of Object.entries(weekData.sections)) {
            const section = document.createElement('div');
            section.className = 'grocery-section';
            section.innerHTML = `<h3>${sectionName}</h3>`;
            
            const list = document.createElement('ul');
            list.className = 'grocery-list';
            
            // Add each item in the section
            items.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = 'grocery-item';
                
                const itemId = `grocery-${sectionName.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${index}`;
                
                li.innerHTML = `
                    <input type="checkbox" class="grocery-checkbox" id="${itemId}">
                    <label for="${itemId}" class="grocery-name">${item.name}</label>
                    <span class="grocery-quantity">${item.quantity}</span>
                `;
                
                list.appendChild(li);
            });
            
            section.appendChild(list);
            display.appendChild(section);
        }
        
        // Restore checkbox states from localStorage
        const checkboxes = display.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            // Load saved state
            const savedState = localStorage.getItem(checkbox.id);
            if (savedState === 'true') {
                checkbox.checked = true;
            }
            
            // Save state on change
            checkbox.addEventListener('change', function() {
                localStorage.setItem(this.id, this.checked);
            });
        });
    }
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', this.checked);
        });
        
        // Check for saved theme preference
        const darkMode = localStorage.getItem('darkMode') === 'true';
        themeToggle.checked = darkMode;
        if (darkMode) {
            document.body.classList.add('dark-mode');
        }
    }
});
