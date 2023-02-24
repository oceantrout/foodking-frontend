# Food-king frontend

This app is to simulate the Yelp function

1. Landing page (LandingPage.js) 
Navigation bar 

a. Log in >> will route to normal user log in page, if success, will route to >> RestaurantDetailPage

b. Sign in>> will route to resigteration page >> after registeration >> log in

C. Admin >> will route to AdminLogin page >> after login >> AdminDetailPage

2. RestaurantDetailPage

It has pulled React component: RestaurantList and Header

RestaurantList: return a table of Get "/Restaurant" with details of restaurant information

3. UpdateReView Page
When user click one row, it will route to update review page. It has "AddReview" Component which allow user to add in reviews

4. AdminResturantDetailPage

Same layout as ResturantDetail Page, add two components - Edit and Delete resturant component

Edit => will show all the information of that selected restaurant, allow admin user to change the data field 
