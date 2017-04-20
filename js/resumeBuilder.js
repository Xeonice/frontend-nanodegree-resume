/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Douglas",
    "role": "Front-End engineer／UI Designer",
    "contacts": {
        "mobile": "18999509255",
        "email": "ad546971975@gmail.com",
        "location": "No.499,Xibei Road,Saybagh District,Urumqi",
        "github": "Xeonice"
    },
    "welcomeMessage": "lorem ipsum sit amet etc",
    "skills": [
        "Javascript Coding", "Mobile Design", "Web Design", "prototype Design"
    ],
    "biopic": ["images/avater.jpg"]
};
var work = {
    "jobs": [{
        "location": "No.516,Xibei Road,Saybagh District,Urumqi",
        "title": "trainee",
        "employer": "Cloud Calculate Xinjiang",
        "dates": "in progress",
        "description": "My first job in software company."
    },
        {
            "location": "No.16,Linyuan Road,Karamary City",
            "title": "Seller",
            "employer": "Pioneer Sports Xinjiang",
            "dates": "1 years",
            "description": "To sell sport productions."
        }
    ]
};

var education = {
    "schools": [{
        "name": "Xinjiang University",
        "location": "No.499,Xibei Road,Saybagh District,Urumqi",
        "degree": "masters",
        "dates": "2019",
        "urls": "http://www.xju.edu.cn/",
        "majors": ["Software"]
    }],
    "onlineCourses": [{
        "title": "FEND engineer",
        "school": "Udacity",
        "dates": "2017",
        "url": "http://example.com"
    }]
};
var projects = {
    "project1": [
        {
            "title": "Adam Design UI Design",
            "dates": "2016",
            "description": "Adam Design's UI Mobile Design",
            "images": ["images/Adam_Design_UI.jpg"]
        },
        {
            "title": "Adam Design Powerpoing Design",
            "dates": "2017",
            "description": "Adam Design's Powerpoints Design",
            "images": ["images/Adam_Design_PPT.jpg"]
        }
    ]
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedMobile, formattedEmail, formattedLocation, formattedGithub);
    for (skillCount = 0; skillCount < bio.skills.length; skillCount++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillCount]);
        $("#skills").append(formattedSkill);
    }
};

work.display = function() {
    for (jobCount = 0; jobCount < work.jobs.length; jobCount++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobCount].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobCount].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobCount].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobCount].description);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobCount].location);

        $(".work-entry:last").append(formattedEmployerTitle, formattedLocation, formattedDates, formattedDescription);
    }
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for(schoolCount = 0; schoolCount < education.schools.length; schoolCount++){

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schoolCount].name);
        var formattedPosition = HTMLschoolLocation.replace("%data%", education.schools[schoolCount].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolCount].degree);
        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[schoolCount].majors);
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[schoolCount].dates);

        $(".education-entry:last").append(formattedSchoolName+formattedDegree,formattedDate, formattedPosition, formattedMajors );
    }
    $("#education").append(HTMLschoolStart);
    $("#education").append(HTMLonlineClasses);
    for(onlineCount = 0; onlineCount < education.onlineCourses.length; onlineCount++){
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCount].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCount].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCount].dates);
        var formattedURL = HTMLonlineURL.replace("%data", education.onlineCourses[onlineCount].url);

        $(".education-entry:last").append(formattedTitle+formattedSchool, formattedDates, formattedURL);
    }

};

// $(document).click(function(loc) {
//     var x = loc.pageX;
//     var y = loc.pageY;
//
//     logClicks(x, y);
// });
// function inname(name) {
//     name = name.trim().split(" ");
//     console.log(name);
//     name[1] = name[1].toUpperCase();
//     name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//     return name[0] + " " + name[1];
// }
// $("#main").append(internationalizeButton);

projects.display = function() {
    for (count = 0; count <  projects.project1.length; count++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project1[count].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project1[count].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project1[count].description);
        $(".project-entry:last").append(formattedDescription);

        for (image = 0; image < projects.project1[count].images; image++) {
            var formattedImages = HTMLprojectImage.replace("%data%", projects.project1[count].images);
            $(".project-entry:last").append(formattedImages);
        }
    }
};
bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);

