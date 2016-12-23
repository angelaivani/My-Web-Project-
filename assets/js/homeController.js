app.controller('HomeController', function($scope){
	$scope.listOfFood = [];
	
	var food = 
	{
		pict:'assets/images/pizza.png',
		name:"Pizza",
		ingredients:"Baking powder, sugar, sea salt, buttermilk, sunflower oil, egg, cheese, rocket, salmon",
		method:[
			'Preheat the oven to 200 celcius.',
			'Combine the flour, baking powder, sea salt and sugar in a bowl. Beat the buttermilk, oil, egg and 100ml water together, then mix the wet ingredients into the dry.',
			'On a dusted surface, roll the dough out to 1cm thick.',
			'Peel and finely dice the shallot.',
			'Bake on a dusted baking tray for 15 minutes, then remove and top with the chopped shallot and the remaining ingredients. Serve with a good pinch of pepper, and the lemon wedge on the side for squeezing over.'
			]
	};
	
	$scope.listOfFood.push(food);
	
	food = new Object();
	food.pict = 'assets/images/spagethi.png';
	food.name = 'Spagheti';
	food.ingredients = 'Olive oil, Anchovy Fillet, Capers, Garlic, White Wine, Dried Oregano';		
	food.method = [
	'Heat olive oil in a large saucepan over medium heat.',
	'Pour white wine, oregano, and red pepper flakes into the skillet and increase heat to high',
	'Stir tomatoes into the skillet and bring to a simmer. Season tomato mixture with salt, black pepper, and cayenne pepper.',
	'Stir tuna and 1/4 cup parsley into tomato sauce, breaking up tuna with a wooden spoon while stirring. Reduce heat to medium-low and simmer for about 10 minutes.',
	'Bring a large pot of lightly salted water to a boil. Cook spaghetti in the boiling water, stirring occasionally until almost cooked through and still slightly firm to the bite, 9 to 11 minutes. ',
	'Pour tomato sauce over spaghetti into the pot; stir to combine, cover the pot with a lid, and let sit until spaghetti is cooked through, about 3 minutes.'
	]
	
	$scope.listOfFood.push(food);
	
	food = new Object();
	food.pict = 'assets/images/hamburger.png';
	food.name = 'Hamburger';
	food.ingredients = 'Meatloaf, Lettuce, Bread, Cheese, Mayonase, Onion';
	food.method = [
	'Preheat a grill for high heat',
	'In a large bowl, mix together the ground beef, onion, cheese, soy sauce, Worcesteshire sauce, egg, onion soup mix, garlic, garlic powder, parsley, basil, oregano, rosemary, salt, and pepper. Form into 4 patties',
	'Grill patties for 5 minutes per side on the hot grill or until welldone. Serve on buns with your favorite condiments'
	]
	
	$scope.listOfFood.push(food);
	
});