var modeSwitch = document.getElementById("mode-switch");
var themeSwitch = document.getElementById("colr-switch");

const themes = [
    {//Black and white
        bckg : "#FFFFFF",
        text : "#000000",
		hglt : "#888888"
    },
	{// Blue
		bckg : "#FFFFFA",
		text : "#0D5C63",
		hglt : "#70A9A1"
	},
	{// Brown
		bckg : "#e7dfdb",
		text : "#6f4e37",
		hglt : "#91785D",
	},
	{ //Green
		bckg : "#ECFFF8",
		text : "#499167",
		hglt : "#23CE6B",
	},
	{ //Yellow
		bckg : "#E7E393",
		text : "#2E1F27",
		hglt : "#B7990D",
	}
];

const modes = {LIGHT:0,DARK:1};

var curMode = modes.LIGHT;
var curThemeCount = 0;
var curTheme = themes[curThemeCount];

var curBckg = curTheme.bckg;
var curText = curTheme.text;
var curHglt = curTheme.hglt;

var curBckgRGB = hexToRgb(curBckg);
var curTextRGB = hexToRgb(curText);
var curHgltRGB = hexToRgb(curHglt);

modeSwitch.onclick = function(){
	if(curMode == modes.LIGHT){
		curMode = modes.DARK;
		modeSwitch.innerHTML = "ɥ";
	}else{
		curMode = modes.LIGHT;
		modeSwitch.innerHTML = "h";
	}
	setColors();
}

themeSwitch.onclick = function(){
	curThemeCount = (curThemeCount+1) % themes.length;
	curTheme = themes[curThemeCount];
	setColors();
}

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
	  r: parseInt(result[1], 16),
	  g: parseInt(result[2], 16),
	  b: parseInt(result[3], 16)
	} : null;
}

function setRGB(){
	curBckgRGB = hexToRgb(curBckg);
	curTextRGB = hexToRgb(curText);
	curHgltRGB = hexToRgb(curHglt);
}


function setColors(){
	if(curMode == modes.LIGHT){
		curBckg = curTheme.bckg;
		curText = curTheme.text;
	}else{
		curBckg = curTheme.text;
		curText = curTheme.bckg;
	}
	curHglt = curTheme.hglt;
	setRGB();
	setTheme();
	createImage();
}

function setTheme(){
    document.documentElement.style.setProperty("--curr-bckg",curBckg);
    document.documentElement.style.setProperty("--curr-text",curText);
	document.documentElement.style.setProperty("--curr-hglt",curHglt);
}