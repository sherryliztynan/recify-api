# recify-api
# Recify Api

## About This Application

### Objective
The objective of this project was to create a full stack application that would access a private API in order to search for recipes, display recipe information, and generate meal plans based on calorie restrictions.


### Structure & Functionality
This API utilizes a Node + Express backend to access the Spoonacular Api (https://spoonacular.com/food-api). The frontend is built with the React.js library.


## API Documentation

The following HTTP methods are implemented: GET.

#### GET METHOD

http://localhost:8000/api/recipes/recipe/:identifier - GET - Returns raw JSON details about an individual recipe using the recipe ID.

Ex: http://localhost:8000/api/recipes/recipe/1697535

        {
                vegetarian: false,
                vegan: false,
                glutenFree: true,
                dairyFree: true,
                veryHealthy: false,
                cheap: false,
                veryPopular: false,
                sustainable: false,
                weightWatcherSmartPoints: 5,
                gaps: "no",
                lowFodmap: false,
                preparationMinutes: 20,
                cookingMinutes: 0,
                aggregateLikes: 0,
                spoonacularScore: 44,
                healthScore: 11,
                creditsText: "maplewoodroad",
                sourceName: "Maplewood Road",
                pricePerServing: 438.5,
        },

http://localhost:8000/api/recipes/:searchTerm - GET - Returns raw JSON list of recipes that match searchTerm.

Ex. http://localhost:8000/api/recipes/pizza

            {
            results: [
            {
            id: 656329,
            title: "Pizza bites with pumpkin",
            image: "https://spoonacular.com/recipeImages/656329-312x231.jpg",
            imageType: "jpg"
            },
            {
            id: 680975,
            title: "BLT Pizza",
            image: "https://spoonacular.com/recipeImages/680975-312x231.jpg",
            imageType: "jpg"
            },
            {
            id: 663136,
            title: "Thai Pizza",
            image: "https://spoonacular.com/recipeImages/663136-312x231.jpg",
            imageType: "jpg"
            },
            {
            id: 716300,
            title: "Plantain Pizza",
            image: "https://spoonacular.com/recipeImages/716300-312x231.jpg",
            imageType: "jpg"
            },
            {
            id: 665769,
            title: "Zucchini Pizza Boats",
            image: "https://spoonacular.com/recipeImages/665769-312x231.jpg",
            imageType: "jpg"
            },

http://localhost:8000/api/mealplan/:calories - GET - Returns three recipes that match a daily meal plan based on calorie restrictions.

Ex. http://localhost:8000/api/mealplan/1800
        {
        meals: [
        {
        id: 418214,
        imageType: "jpg",
        title: "Mother Lode Pretzels",
        readyInMinutes: 35,
        servings: 54,
        sourceUrl: "http://www.tasteofhome.com/recipes/mother-lode-pretzels"
        },
        {
        id: 896659,
        imageType: "jpg",
        title: "Grilled Cheese Hot Dogs",
        readyInMinutes: 13,
        servings: 4,
        sourceUrl: "https://spicysouthernkitchen.com/grilled-cheese-hot-dogs/"
        },
        {
        id: 640592,
        imageType: "jpg",
        title: "Creamy Bacon Mac and Cheese",
        readyInMinutes: 45,
        servings: 6,
        sourceUrl: "https://spoonacular.com/creamy-bacon-mac-and-cheese-640592"
        }
        ],
        nutrients: {
        calories: 1799.95,
        protein: 60.79,
        fat: 119.91,
        carbohydrates: 120.41
        }
        }

http://localhost:8000/api/mealplan/:id - GET - Returns preparation instructions and recipe summary based on meal plan ID.

Ex. http://localhost:8000/api/mealplan/meals/418214
        {
        id: 418214,
        title: "Mother Lode Pretzels",
        readyInMinutes: 35,
        servings: 54,
        sourceUrl: "http://www.tasteofhome.com/recipes/mother-lode-pretzels",
        image: "https://spoonacular.com/recipeImages/418214-556x370.jpg",
        imageType: "jpg",
        summary: "Mother Lode Pretzels might be just the hor d'oeuvre you are searching for. This recipe serves 54. One portion of this dish contains approximately <b>1g of protein</b>, <b>3g of fat</b>, and a total of <b>84 calories</b>. For <b>20 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. A mixture of walnuts, semisweet chocolate chips, evaporated milk, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes approximately <b>35 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 10%</b>. This score is not so amazing. Try <a href="https://spoonacular.com/recipes/the-mother-in-law-337607">The Mother-in-Law</a>, <a href="https://spoonacular.com/recipes/my-mothers-brisket-116046">My Mother's Brisket</a>, and <a href="https://spoonacular.com/recipes/mothers-pasties-416004">Mother's Pasties</a> for similar recipes.",
        cuisines: [ ],
        dishTypes: [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
        ],
        diets: [ ],
        occasions: [ ],
        winePairing: { },
        instructions: "Directions                                                                                With a sharp knife, cut pretzel rods in half; set aside. In a large saucepan over low heat, melt caramels with milk. In a large shallow bowl, combine the chips, toffee bits and walnuts.                                                                                            Pour caramel mixture into a 2-cup glass measuring cup. Dip the cut end of each pretzel piece two-thirds of the way into caramel mixture (reheat in microwave if mixture becomes too thick for dipping). Allow excess caramel to drip off, then roll pretzels in the chip mixture. Place on waxed paper until set. Store in an airtight container.                                        Yield: 4-1/2 dozen.                                                                                                                         Originally published as Mother Lode Pretzels in  Taste of HomeFebruary/March 2008, p57                                                                                                                                                                                                        Nutritional Facts                                                                             1 pretzel equals 114 calories, 5 g fat (3 g saturated fat), 3 mg cholesterol, 104 mg sodium, 17 g carbohydrate, 1 g fiber, 1 g protein. Diabetic Exchanges: 1 starch, 1 fat.                                                                                                                                                                    Print                                                                                    Add to Recipe Box                            Email a Friend",
        analyzedInstructions: [
        {
        name: "",
        steps: [
        {
        number: 1,
        step: "With a sharp knife, cut pretzel rods in half; set aside. In a large saucepan over low heat, melt caramels with milk. In a large shallow bowl, combine the chips, toffee bits and walnuts.",
        ingredients: [
        {
        id: 10019047,
        name: "pretzel rods",
        localizedName: "pretzel rods",
        image: "pretzel-rods.jpg"
        },
        {
        id: 19383,
        name: "toffee pieces",
        localizedName: "toffee pieces",
        image: "toffee-pieces.jpg"
        },
        {
        id: 19074,
        name: "caramel candy",
        localizedName: "caramel candy",
        image: "soft-caramels.jpg"
        },
        {
        id: 12155,
        name: "walnuts",
        localizedName: "walnuts",
        image: "walnuts.jpg"
        },
        {
        id: 11408,
        name: "french fries",
        localizedName: "french fries",
        image: "french-fries-isolated.jpg"
        },
        {
        id: 1077,
        name: "milk",
        localizedName: "milk",
        image: "milk.png"
        }
        ],
        equipment: [
        {
        id: 404669,
        name: "sauce pan",
        localizedName: "sauce pan",
        image: "sauce-pan.jpg"
        },
        {
        id: 404745,
        name: "knife",
        localizedName: "knife",
        image: "chefs-knife.jpg"
        },
        {
        id: 404783,
        name: "bowl",
        localizedName: "bowl",
        image: "bowl.jpg"
        }
        ]
        },
        {
        number: 2,
        step: "Pour caramel mixture into a 2-cup glass measuring cup. Dip the cut end of each pretzel piece two-thirds of the way into caramel mixture (reheat in microwave if mixture becomes too thick for dipping). Allow excess caramel to drip off, then roll pretzels in the chip mixture.",
        ingredients: [
        {
        id: 19047,
        name: "pretzels",
        localizedName: "pretzels",
        image: "pretzels.jpg"
        },
        {
        id: 19074,
        name: "caramel",
        localizedName: "caramel",
        image: "soft-caramels.jpg"
        },
        {
        id: 0,
        name: "roll",
        localizedName: "roll",
        image: "dinner-yeast-rolls.jpg"
        },
        {
        id: 0,
        name: "dip",
        localizedName: "dip",
        image: ""
        }
        }


## To View the Front End Locally

http://localhost:3000/