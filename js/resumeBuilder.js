/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var awesomeThoughts = "My name is Douglas and I am AWESOME!";
 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 $("#main").append(funThoughts);
 var formattedName, formattedRole;
 formattedName = HTMLheaderName.replace("%data%", "Douglas");
 var role = "Front-End engineer";
 formattedRole = HTMLheaderRole.replace("%data%", role);
 //让添加字符串在header类的最上层
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

