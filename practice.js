function name1(a, b) {
    return a + b;   
}

const user1 = name1(5, 10);
console.log(user1);
const user2 = name1(9, 17);
console.log(user2);

function name2(a, b) {
    return a - b;
}
const user3 = name2(5, 10);
console.log(user3);
const user4 = name2(9, 17); 
console.log(user4);

const user5 = name1(5, 29);
console.log(user5);
//

const elegibilityage = 18;

function checkEligibility(age){
    if (age >= elegibilityage) {
        return "you are eligible to vote";
    } else {
        return "you are not eligible to vote";
    }
}
const voter1= checkEligibility(19);
const voter2= checkEligibility(17);
console.log(voter1);
console.log(voter2);
//

function customerpurchase(is, iy, iz = "thankyou for shopping with us."){
    return `hello your last purchase is ${is} and your total bill is ${iy}. ${iz}`;
}
const customer1 = customerpurchase("jersey", 5000);
const customer2 = customerpurchase("shoes", 3000);
const customer3 = customerpurchase("null", "000", "please check your purchase, because we are not sure");
console.log(customer1);
console.log(customer2);
console.log(customer3);
//
let day = 8;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
     }     ;
//

let course = "boilogy";
switch(course) {
    case "accounting":
        console.log("accounting");
        break;
    case "economics":
        console.log("economics");
        break;
    case "business studies":
        console.log("business studies");
        break;
    case "commerce":
        console.log("commerce");
    default:
        console.log("more courses are available");
}

function greet(samuel, age, course) {

    return samuel + " is " + age + " years old and he is studying " + course; 
}
console.log(greet("samuel", 30, "physicsS and chemistry"));
//
function userinfo(name,age,school){
    return name + " is " + age + " years old and she studies at " + school;
}
console.log(userinfo("alice", 25, "university of kenya  "));

//

function bigman(smith,johnson,peter){
return smith + " is the oldest, " + johnson + " is the second oldest and " + peter + " is the youngest";    

}
console.log(bigman("smith", "johnson", "peter"));