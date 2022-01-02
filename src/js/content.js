var content = document.getElementById("content");
const contents = {
    CONTACT : `
	<h2>CONTACT</h2>
	<b>Hakan Eroğlu</b> <i>pronounced as hakʰan ɛɾo:ɫu</i>
	<br><br>
	You can contact me by email at <b><a href="mailto:eroglu.hkan@gmail.com">eroglu.hkan@gmail.com</a></b>
	<br><br>
	<b><a href="https://github.com/h4qan">GitHub</a></b>	
	`,
    ABOUTME : `
	<span style="font-size: 10vh;">Hello!</span><br>
	My name is Hakan Eroğlu. <br>
	I am 17 years old and I am from Antalya, Turkey. <br>
	I want to study Computer Science in college and pursue a career in this field. <br>
	You can find my online resumé in this site.	
    `,
	SKILLS : `
	<h2>SKILLS</h2>
	<h3>Languages</h3>
	Turkish <b style="float: right;">ooooo</b><br>
	English <b style="float: right;">ooooo</b><br>
	German <b style="float: right;">ooxxx</b><br>
	Japanese <b style="float: right;">oxxxx</b><br>

	<h3>Programming Languages</h3>
	Python <b style="float: right;">ooooo</b><br>
	C# <b style="float: right;">ooooo</b><br>
	Lua <b style="float: right;">ooxxx</b><br>
	C <b style="float: right;">ooxxx</b><br>

	<h3>Game Development</h3>
	Godot <b style="float: right;">ooooo</b><br>
	Unity <b style="float: right;">oooox</b><br>

	<h3>Web Development</h3>
	HTML <b style="float: right;">ooooo</b><br>
	CSS <b style="float: right;">oooox</b><br>
	JavaScript <b style="float: right;">oooxx</b><br>

	<h3>Physical Programming</h3>
	Arduino <b style="float: right;">oooxx</b><br>

	<h3>Graphical Design</h3>
	Photoshop <b style="float: right;">oooxx</b><br>
	`,
	AWARDS:`
	<h2>RECOGNITIONS</h2>
	<h3>2018</h3>
	<h4>National High School Entrance Exam</h4><ul><li>At the top 0.05% from nearly one million students</li></ul>
	<h3>2020</h3>
	<h4>Royal Society of Biology, Biology Challenge 2020</h4><ul><li>Awarded Gold</li></ul>
	<h4>TUBITAK, High School Research Projects Competition 2020</h4><ul><li>First place in regionals; National Finalist with a project in Mathematics field</li></ul>
	<h3>2021</h3>
	<h4>Royal Society of Biology, British Biology Olympiad 2021</h4><ul><li>Awarded Silver</li></ul>
	<h4>TUBITAK, High School Research Projects Competition 2021</h4><ul><li>Second place in regionals with a project in Mathematics field</li></ul>
	<h4>Darussafaka Institute, National Salih Zeki Mathematics Projects Competition</h4><ul><li>Won the Genc Salih Zeki award by a public vote held online.</li></ul>
	<h3>Every Semester</h3>
	<h4>Academic Honors Award</h4><ul><li>Given to students with a GPA higher than 4.5 every semester</li></ul>
	`,
	EDUCATION:`
	<h2>EDUCATION</h2>
	<b style="float:right">2018-2022</b>
	<h3>Antalya Konyaalti Bahcesehir High School for Science and Technology</h3> 
	<ul>
		<li>Private High School in Konyaaltı,Antalya,Turkey</li>
		<li>Has special lessons for Science and Technology, such as Physical Programming and Industry 4.0</li>
		<li>Have 98/100 GPA</li>
	</ul>
	<b style="float:right">2014-2022</b>
	<h3>Science and Arts Center (BILSEM)</h3> 
	<ul>
		<li>School for selected students to learn according to their talents alongside normal school</li>
		<li>Run by Turkish Minisitry of Education</li>
		<li>Took advanced Chemistry, Mathematics and Computer lessons</li>
		<li>Selected for this school at 4th grade, continuing ever since</li>
	</ul>
	<b style="float:right">1 July 2019-8 July 2019</b>
	<h3>TUBITAK Cryptology Summer Camp </h3> 
	<ul>
		<li>This summer camp organized by TUBITAK lasted 1 week during 1 July 2019-8 July 2019</li>
		<li>Learned the history of cryptology and cryptology algorithms.</li>
		<li>Designed my own cryptology algorithm</li>
	</ul>`,
	ACTIVITIES:`
	<h2>ACTIVITIES</h2>
	<h3>Extra-Curricular Activities</h3>
	<h4>2020</h4>
	<h4>Bucked Games Club</h4><ul>
		<li>Game development club by Bahcesehir University</li>
		<li>Learned how to use the Unity Game Engine</li>
	</ul>
	<h4>Destination Imagination (DI)</h4><ul>
		<li>Took part in DI with the team Thenanigans</li>
	</ul>
	<h3>Co-Curricular Activities</h3>
	<h4>9th Grade</h4>
	<h4>Photography Club</h4>
	<ul>
		<li>Learned how to use Photoshop</li>
		<li>Learned Photography jargon and techniques</li>
	</ul>
	<h4>1oth Grade</h4>
	<h4>Theatre Club</h4><ul>
		<li>Took part in a few sketches</li>
		<li>Overcame my stage fear</li>
	</ul>
	<h4>Junior Achievement Club</h4>
	<ul>
		<li>Raised awareness for the effects of used batteries on nature. Designed T-Shirts about used batteries and sold them.</li>
		<li>Planted trees for every purchase made</li>
	</ul>
	<h4>11th Grade</h4>
	<h4>Model United Nations (MUN) Club</h4>
	<ul>
		<li>Represented Nauru in the UNEP committee in Harvard International MUN 2020</li>
		<li>Represented Iran in ECOSOC committee in Robert College International MUN 2020</li>
	</ul>`,
	INTERESTS:`
	<h2>INTERESTS/HOBBIES</h2>
	<h4>Programming</h4>
	<h4>Languages</h4><ul>
		<li>I've interest in learning different languages</li>
		<li>I'm currently trying to learn Japanese</li>
	</ul>
	<h4>Cycling</h4>
	<h4>Photography</h4>`
};
var buttons = document.querySelectorAll("nav ul li");
var currentContent;
function displayContent(c,e) {
	if(c!=currentContent){
    	content.innerHTML = "<p>"+c+"</p>";
		currentContent = c;
	}
	for(var i = 0;i<buttons.length;i=i+1){
		if(buttons[i].classList.contains("open") && !buttons[i].isSameNode(e)){
			buttons[i].classList.remove("open");
		}
		if(!buttons[i].classList.contains("open") && buttons[i].isSameNode(e)){
			buttons[i].classList.add("open");
		}
	}
}
displayContent(contents.ABOUTME,buttons[0])
