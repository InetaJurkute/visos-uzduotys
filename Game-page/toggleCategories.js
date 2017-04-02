function toggleCategories(){
	var categ = $("#categories");
	if(categ.hasClass("categoriesHidden"))
		categ.fadeIn(100);
	else
		categ.fadeOut(500);
    categ.toggleClass("categoriesHidden");
}