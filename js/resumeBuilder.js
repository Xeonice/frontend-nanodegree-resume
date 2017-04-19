/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Douglas",
    "role": "Front-End engineer／UI Designer",
    "contacts": [{
        "mobile": "18999509255",
        "email": "ad546971975@gmail.com",
        "location": "Urumuqi"
    }],
    "welcomeMessage": "lorem ipsum sit amet etc",
    "skills": [
        "Javascript Coding", "Mobile Design", "Web Design", "prototype Design"
    ],
    "bioPic": ["images/avater.jpg"]
}
var work = {
    "jobs": [{
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
    "schools": [{
        "name": "Xinjiang University",
        "position": "Urumuqi",
        "degree": "masters",
        "dates": 2019,
        "urls": "www.xju.edu.cn/",
        "major": ["Software"]
    }],
    "onlineCourses": [{
        "title": "FEND engineer",
        "school": "Udacity",
        "dates": 2017,
        "url": "http://example.com"
    }]
};
var projects = {
    "Projects": [{
        "titles": "Adam Design UI Design",
        "dates": 2016,
        "description": "Adam Design's UI Mobile Design",
        "images": ["images/Adam_Design_UI.jpg"]
    },
        {
            "titles": "Adam Design Powerpoing Design",
            "dates": 2017,
            "description": "Adam Design's Powerpoints Design",
            "images": ["images/Adam_Design_PPT.jpg"]
        }
    ]
};
//添加姓名
bio.display = function() {
    //添加姓名，职位，图片，欢迎信息
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.image);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);
    //添加联系信息
    for (contactCount = 0; contactCount < bio.contacts.length; contactCount++) {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contactCount].mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contactCount].email);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contactCount].location);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedLocation);
    };
    //添加工作技能
    for (skillCount = 0; skillCount < bio.skills.length; skillCount++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillCount]);
        $("#skills").append(formattedSkill);
    };
};
bio.display();

//添加工作经历
work.display = function() {
    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedDescription);
    }
};
work.display()

education.display = function() {
    for(schoolCount = 0; schoolCount < education.schools.length; schoolCount++){
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schoolCount].name);
        var formattedPosition = HTMLschoolLocation.replace("%data%", education.schools[schoolCount].position);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolCount].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolCount].major);
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[schoolCount].dates);

        $(".education-entry:last").append(formattedSchoolName+formattedDegree,formattedDate, formattedPosition, formattedMajor );
    }
    for(onlineCount = 0; onlineCount < education.onlineCourses.length; onlineCount++){
        $("#education").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCount].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCount].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCount].dates);
        var formattedURL = HTMLonlineURL.replace("%data", education.onlineCourses[onlineCount].url);

        $(".onlineCourse-entry:last").append(formattedTitle+formattedSchool, formattedDates, formattedURL);
    }

};
education.display();

//鼠标追踪函数（在控制台输出X,Y坐标）
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
//国际化（姓大写，名首字母大写）函数
function inname(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

//添加项目信息（封装）
projects.display = function() {
    for (count in projects.Projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.Projects[count].titles);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.Projects[count].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.Projects[count].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.Projects[count].images.length > 0) {
            for (image in projects.Projects[count].images) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.Projects[count].images)
                $(".project-entry:last").append(formattedImages);
            }
        }
    }
}
projects.display();
$("#mapDiv").append(googleMap);