/* Your code to build the resume will go here.
 */
var name="lakshmi Priya";
var name1=HTMLheaderName.replace("%data%", name);
$("#header").append(name1);
var job="Software Developer";
var job1=HTMLheaderRole.replace("%data%", job);
$("#header").append(job1);
var bio = {
    "name" : "lp",
    "role" : "software developer",
    "contacts": {
        "HTMLmobile":"8870088700",
        "email": "lp@gmail.com",
    }
};
$("#main").append(bio.name);
$("#main").append(bio["role"]);
$("#main").append(bio["HTMLmobile"]);
$("#mapDiv").append(googleMap);