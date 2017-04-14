/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "Douglas",
    "role" : "Front-End engineer／UI Designer",
    "contacts" : {
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
            "dates": "in progress",
            "description": "My first job in software company."
        },
        {
            "location": "Urumuqi",
            "title": "Seller",
            "employer": "Pioneer Sports Xinjiang",
            "dates": "1 years",
            "description": "To sell sport productions."
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
    "Projects": [
        {
            "titles": "Adam Design UI Design",
            "dates": 2016,
            "description": "Adam Design's UI Mobile Design",
            "images": ["images/Adam_Design_UI.jpg"]
        },
        {
            "titles" : "Adam Design Powerpoing Design",
            "dates" : 2017,
            "description": "Adam Design's Powerpoints Design",
            "images": ["images/Adam_Design_PPT.jpg"]
        }
    ]
};
//添加姓名
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
//添加工作技能
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
//添加工作经历
function display_work() {
    for (job = 0; job < work.jobs.length; job++){
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

display_work();

//鼠标追踪函数（在控制台输出X,Y坐标）
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});
//国际化（姓大写，名首字母大写）函数
function inname(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0]+ " "+name[1];
}
$("#main").append(internationalizeButton);

//添加项目信息（封装）
projects.display = function(){
    for (count in projects.Projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.Projects[count].titles);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.Projects[count].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.Projects[count].description);
        $(".project-entry:last").append(formattedDescription);

        if(projects.Projects[count].images.length > 0){
            for (image in projects.Projects[count].images) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.Projects[count].images)
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
}
projects.display();
$("#mapDiv").append(googleMap);