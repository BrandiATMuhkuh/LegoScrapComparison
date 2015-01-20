# Install
If you use NPM to install package just run `npm install` and it will do everything for you. Otherwise look into the `package.json` file and install everything per hand.

# Hypothesis
We believe that LEGO gets more and more `complex` over time. We define `complex` as more unique object over time.

## H0
LEGO does not get more `complex` over time

# How to prove H0
Download all lego sets (from bricklink.com) for every year and then count all object it includes plus the color of this object.

## LINK Tree
We **start** our experience by browsing to [http://www.bricklink.com/catalogTree.asp?itemType=S](http://www.bricklink.com/catalogTree.asp?itemType=S). When we scroll down we find a list of years we want to follow later.

Before we start following the tree I'll give a short intro to `tree traversing`. Generally speaking we can "walk/travers" trough a tree in two ways. [Breadth-First](http://en.wikipedia.org/wiki/Breadth-first_search) or [Depth-First](http://en.wikipedia.org/wiki/Depth-first_search). Imagine we go to different cities and we want to walk into each room in each house. In **Depth-First** we would start with city one, go to house one and to room one. That to room two of the same house and so on. After we are done with all rooms in all houses in this city we got to the next city and start over. In **Breadth-First** we go to all cities first. Than we go to all houses in all cities. And than to all rooms in all houses in all cities.

Of course in the real world **Depth-First** would make the most sense. But we are in computer science here, we are not in the real world :D. That said, I'll use **Breadth-First** as `traversing` of choice. The reason is, it is more robust. E.g.: First we will find all links to all `years`. That we can go into each link. If we want, we could now parallelize this. One process per link. For more infos about `tree traversing` just follow the two link I added in this text. 

### Extracting the year


For **step two** we click on each of this links (except the one with the `?`)


# Step by step

## Step 1: Bricklink and the what we want to download
