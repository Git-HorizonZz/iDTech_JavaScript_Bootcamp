// TODO: Create 4-String variables to introduce develop your story.
// YOUR CODE GOES HERE
var introAndAge = "Hello, my name is David O'Regan, I am ";
var countryStr1 = "I have been to ";
var origin = "I am ";
var str4 = "ish";
// TODO: Create 3-String variables to set the time period of your story or discuss other number elements.
// YOUR CODE GOES HERE
var countryNum1 = 7;
var ageNum2 = 16;
var num3 = 2005;
// TODO: Create 1-Array variable to show a collection of items your character might have.
// YOUR CODE GOES HERE
var countryArray = [ "England", "Ireland", "Netherlands", "India", "Belgium", "France", "Kuwait", "United States" ];
// TODO: Create 1-Boolean variable to demonstrate a true or false scenario.
// YOUR CODE GOES HERE
var bool = true;
// TODO: Print your story to the console.
// YOUR CODE GOES HERE
function countryList ()
{
    if (bool)
    {
        let y = "";
        for (i=0; i<7; i++)
        {
            if (i==6)
                y = y+"and "+countryArray[6]
            else
                y = y+countryArray[i]+", ";
        }
        return y;
    }
}

console.log(introAndAge+ageNum2+" years old (bcuz I was born in "+num3+").");
console.log(origin+countryArray[0].substring(0,4)+str4+", "+countryArray[1].substring(0,2)+str4+", and "+countryArray[3]+"n.");
console.log(countryStr1+countryNum1+" countries: "+countryList()+".");
