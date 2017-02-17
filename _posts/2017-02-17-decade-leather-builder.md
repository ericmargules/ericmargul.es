---
layout: post
title: "Decade Wallet Builder"
category: "code"
image: squirtle.png
tech: "Ruby, Ruby on Rails, JavaScript, HTML5, CSS"
date_data: "2017-Q1"
github_url: "https://github.com/ericmargules/decade" 
---

A custom wallet builder for my boutique luxury leather goods brand, [Decade](http://www.decadeleather.com). The wallet builder allows users to design their own leather goods by choosing from a list of materials and options. An image of the interior and exterior of the wallet is built programmaticaly from over 700 individual images and displayed in the browser using Ruby, Javascript, and CSS. 
<br/>
When the user adds the custom product to their cart, a composite of the images is created using the HTML5 canvas element, converted to data URL using JavaScript and stored in the [Amazon Web Services](https://aws.amazon.com/) CDN. The custom product is then stored in the database for the user to purchase in their cart.
