/*
This is empty on purpose! Your code to build the resume will go here.
 */
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
    "bioPic" : ["image/Avater.jpg"]
}
var work = {
    "jobs": [
        {
            "location": "Urumuqi",
            "title": "trainee",
            "employer": "Cloud Calculate Xinjiang",
            "dates": 1,
            "description": "first FEND trainee job"
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Xinjiang University",
            "position": "Urumuqi",
            "degree": "masters",
            "majors": "Software Engineer",
            "dates": 2019,
            "urls": "www.xju.edu.cn/",
            "major": ["Software"]
        }],
    "onlineCourses": [
        {
            "nanoDegree": "FEND engineer",
            "school": "Udacity",
            "dates": 2017,
            "url": "http://example.com"
        }
    ]
};
var projects = {
    "Adam Design": [
        {
            "titles": "Adam Design UI Design",
            "dates": 2016,
            "description": "Adam Design's UI Mobile Design",
            "images": ["images/Adam_Design.jpg"]
        }
    ]

};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
if (bio.skills.length >0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}
