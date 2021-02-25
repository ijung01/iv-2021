## Process

Description of the contents of this folder and the logic of your data → retinal variables mapping.

Sketch A

INTRO → as I was researching about duodecimal systems and sexagesimal systems to better understand how to represent hours/minutes/seconds, I found an interesting way to visualize Arabic numerals into dots and lines. This direction used the positional system and mimics the format of a digital clock: the first two digits represent the hours, the following two represent minutes, and the last two represent seconds. 

LOGIC (Shapes & Position)
→ universal
---circles are spaced evenly based on the position of the first circle---  
    0 = represented by an outline circle with no fill. 
    1 = represented by one colored circle. 
    2 = represented by two colored circles. 
    3 = represented by by three colored circles. 
    4 = represented by by four colored circles. 
    5 = represented by one straight line. same height of one circle and width of 5 circles. 
    6 = represented by one straight line and one circle on top. 
    7 = represented by one straight line and two circles on top. 
    8 = represented by one straight line and three circle on top. 
    9 = represented by one straight line and four circles on top. 

→ hours
    displays two digits, one for the tens and one for ones, 00-23, starts at 00 and finishes at 23 and repeats (midnight is 00), when the minute turns into 00 after 59, hours increase by a value of one. 
→ minutes
    displays two digits, one for the tens and one for ones, 00-59, starts at 00 and finishes at 59 and repeats, when the seconds turns into 00 after 59, minutes increase by a value of one. 
→ seconds  
    displays two digits, one for the tens and one for ones, 00-59, starts at 00 and finishes at 59 and repeats. 

Sketch B 

INTRO → I realized that time on a wall clock lacks to represent the continuous flow and passage (the nature) of time. It gives you a clean and simple value: like a whole number compared to an irregular fraction or decimal. This direction uses 12 different colors that slowly turn into gradients_each hour will start with one color and end with the next color. 

LOGIC (Color, Position, Size)
→ universal 
---format will be a circle on top of a square that indicates AM or PM with color---
    AM = rgb (255, 255, 255)
    PM = rgb (0, 0, 0)
    12/0 = rgb (254, 254, 51)
    1 = rgb (250, 188, 2)
    2 = rgb (251, 153, 2)
    3 = rgb (253, 83, 10) 
    4 = rgb (254, 39, 18) 
    5 = rgb (167, 25, 75) 
    6 = rgb (134, 0, 175)
    7 = rgb (61, 2, 164) 
    8 = rgb (2, 70, 254)
    9 = rgb (2, 146, 206)
    10 = rgb (102, 176, 49) 
    11 = rgb (208, 234, 43)

→ hours 
    displays 2 colors for each hour (as a gradient), the color assigned for the current hour and the color assigned for the next hour, the portion and progress of gradients of the two colors depend on minutes, at the start of the hour the location for gradients would be 100% for the current hour color and 0% for the next hour color, indicates AM = white square and PM = black square. 
    -the two colors of gradient are updated at the start of each hour. 
→ minutes 
    for minutes 0, make no changes
    for minutes 1-58, decrease the location value of the current hour color by 1.6%. 
    for minute 59, decrease location value of the current hour color by 5.6%
→ seconds  
    for seconds 0, make no changes
    for seconds 1-58, decrease the opacity value of the current hour color by 1.6%
    for seconds 59, decrease location value of the current hour color by 5.6%

Sketch C 

INTRO → This direction represents time with a hint of three dimentional space: hours, minutes, and seconds as objects moving in physcial space affected by the laws of physics (gravity).

LOGIC (Position)
→ hours 
    0-23, start from the first cirlce on the bottom left, move the colored circle to the next for each hour, AM/PM is divided as the top and bottom of the line. 
→ minutes 
    0-59, start from the first cirlce on the top right, move the colored circle to the next for each minute, half an hour is divided as the top and bottom of the line. 
→ seconds 
    0-59, start from the first cirlce on the top right, move the colored circle to the next for each second, every ten seconds is marked on the rigth side of the line. 

