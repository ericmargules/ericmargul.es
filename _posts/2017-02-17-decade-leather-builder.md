---
layout: post
title: "Decade - Wallet Builder"
category: "code"
image: wallet-builder.png
tech: "Ruby, Ruby on Rails, JavaScript, HTML5, CSS, AWS"
date_data: "2017-Q1"
github_url: "https://github.com/ericmargules/decade" 
---

A custom wallet builder for the boutique luxury leather goods brand, [Decade](http://www.decadeleather.com). The web application enables customers to design their own leather goods by choosing from a list of materials and options. An image of the wallet is built programmatically from over 700 individual images and displayed using Ruby, Javascript, and CSS. 
<br/><br/>
When the user adds the custom wallet to their cart, a composite of the images is created using the HTML5 canvas element, converted to data URL using JavaScript, and uploaded to the [Amazon Web Services](https://aws.amazon.com/) CDN. The custom product is then stored in the database and added to the user's cart for purchase.
