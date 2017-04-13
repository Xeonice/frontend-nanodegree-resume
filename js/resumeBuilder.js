/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName, formattedRole;
formattedName = HTMLheaderName.replace("%data%", "Douglas");
var role = "Front-End engineer";
formattedRole = HTMLheaderRole.replace("%data%", role);
//让添加字符串在header类的最上层
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : "Douglas",
    "role" : "Front-End engineer／UI Designer",
    "contact" : {
        "mobile" : "18999509255",
        "email" : "ad546971975@gmail.com",
        "location" : "Urumuqi"
    },
    "welcomeMessage" : "lorem ipsum sit amet etc",
    "skills": [
        "Javascript Coding", "Mobile Design", "Web Design", "prototype Design"
    ],
    "bioPic" : "image/Avater.jpg"
};