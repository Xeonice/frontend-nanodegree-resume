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
var work = {};
work.position = "Student";
work.employer = "Cloud Calculate Xinjiang";
work.year = 1;

var education = {
    "schools": [
        {
            "name": "Xinjiang University",
            "position": "Urumuqi",
            "degree": "masters",
            "majors": "Software Engineer",
            "dates": 2019,
            "urls": "www.xju.edu.cn/"
        }
    ],
    "onlineCourses": [
        {
            "nanoDegree": "FEND engineer",
            "school": "Udacity",
            "dates": 2017,
            "url": "http://example.com"
        }
    ]
}
