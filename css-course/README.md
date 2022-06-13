# CSS

CSS SELECTORS:


-----------UNIVERSAL SELECTORS-----------

# all html background red
* {
    background; red;
}

----------------------------------------------
# div background red 
div {
    background: red;
}

----------------------------------------------
# ol background red
ol {
    background: red;
}


-----------CLASS SELECTORS----------

# Select red background for classname red
.red {
    background: red;
}
<div class="red">This is  a div</div>
<li class="red">Item 1</li>
note: class selector is the most useful


-----------ID SELECTORS-----------
#blue{
    bsckground: blue;
}
note: ID selector is not so useful because you can have only one id on the page


------------COMBINE SELECTORS----------

div.red {
    background: red;
}
# Combine universal selector with class selector. 
# Select red background for div with class="red"

-----------------------------------------------
div.red.green-text {
    backgroung: red;
    color: green;
}

-----------------------------------------------
span, li {
    background: red;
}
# Select red background for span and li

-----------------------------------------------
li b {
    background: black;
    color: red;
}
# Select black background and red color for other b in li, does not to be direct child of li

<li><span><b>Item 3</b></span></li>

-----------------------------------------------
span > b {
    background: orange;
}
# Select black background for b who is direct child of span

<span>
    <b> Bold text</b>
</span>

-----------------------------------------------
li.liitem ~li {
            background: red;
        }
# Select all li after li with class="liitem"
<ol>
    <li class="liitem">Item 5</li>
    <li>Item 6</li>
    <li>Item 7</li>
    <li>Item 8</li>
</ol>

-----------------------------------------------
li.liitem + li {
            background: red;
        }
# Select only second li after li with class="liitem"
<ol>
    <li class="liitem">Item 5</li>
    <li>Item 6</li>
    <li>Item 7</li>
    <li>Item 8</li>
</ol>

-----------------------------------------------
li:hover {
    background: red;
}
# Change backgroun dcolor in red when mouse interact li elements

-----------------------------------------------
input:focus{
    background: red;
}
# Change background in red, when mouse clicked on the input element
<input type="text">

-----------------------------------------------
input:required {
    background: red;
}
# Change input background in red color
<input required type="text">

-----------------------------------------------
input:checked {
    margin: 50px;
}
# Change checkbox margin when clicked
<input type="checkbox">


# Change input background in red color
<input required type="text">

-----------------------------------------------
input:disable {
    margin: 50px;
}
# Change checkbox margin when unclicked
<input type="checkbox">

-----------------------------------------------
li.grey:first-child{
    background: grey;
}
# Change background grey of li element with class g rey first child

-----------------------------------------------
li.grey:nth-child(3){
    background: grey;
}
# Change background grey of li element with class grey thirth child

-----------------------------------------------
li.grey:nth-child(2n){
    background: grey;
}

-----------------------------------------------
b::before{
    content: "Before";
    background: red;
}

-----------------------------------------------
b::after{
    content: "After";
    background: greenyellow;
}

-----------------------------------------------
[data-red]{
    background: red;
}
<div data-red>This is a div</div>


[data-red="true"]{
    background: red;
}
<div data-red>This is a div</div>


[data-red^="23"]{
    background: red;
}
<div data-red>This is a div</div>


[data-red$="23"]{
    background: red;
}
<div data-red>This is a div</div>


[data-red*="23"]{
    background: red;
}
<div data-red>This is a div</div>