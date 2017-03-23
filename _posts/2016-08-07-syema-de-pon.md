---
layout: post
title: "Syema de Pon"
category: "code"
image: syema.png
video: syema-de-pon.mp4
tech: "Ruby, Gosu, MS Paint, Photoshop"
date_data: "2016-Q1"
github_url: "https://github.com/ericmargules/syema_de_pon" 
---

A puzzle game written in Ruby using the [Gosu Development Library](https://www.libgosu.org/). Based on classic puzzle games like its namesake, [Panel de Pon](https://www.youtube.com/watch?v=kpr9H_Zzhz8), players must create horizontal or vertical words to clear letter blocks before they reach the top of the screen.

Syema de Pon was created using [Model-View-Controller Architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller). The board (view) is represented by a simple array (model), which the player manipulates using a cursor to create words in one or more rows and columns. Words must be longer than three letters and are scored by their length and the rarity of the letters comprising them. The player clears words by hitting Enter, which evaluates the board state for the highest scoring words in each row and column. 

Rows are added to the bottom of the board state at fixed intervals, which accelerate as time progresses. Alternately, the player may add new rows themselves by hitting the E key. The game ends when a row is added while one or more letter occupy the top row.
