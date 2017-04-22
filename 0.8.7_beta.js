var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
/*
<>--------------------<>
[AlphaHack by: ArceusMatt (c) 2016 - 2017];
<>--------------------<>
[Free to use mod menu for MCPE under MIT license];
Anyone modifying, gaining money, copying without permission,
releasing without permission; will be confronted &
will be asked to change or delete their mistakes by the creator of this program.
<>--------------------<>
[Please contact the developers of each code for permission to copy.];
http://imgur.com/6xCQAyT
http://imgur.com/xpEHET3
https://github.com/ArceusMatt/AlphaHack-v2/pull/2
http://imgur.com/1Vkl3q2
<>--------------------<>
[contributors: Godsoft029, Johnmacrocraft, aJ170, Peacestorm(agameR), aPRIC0CKS, Vertex client team];
Contributor means they have decided to make a commit to the mod.
<>--------------------<>
*/
var MainActivity = ctx;
var getLanguage = ModPE.getLanguage();
var getVersion = ModPE.getMinecraftVersion();
/*Thanks to godsoft029 and many others for german translate*/
/*Thanks to MasterProGame & TheNewHEROBRINE for italian translate*/
/*Thanks to walpo for spanish translate*/
/*Thanks to johnmacrocraft for korean translate*/
/*Thanks to billbeds for hindi translate*/
/*Thanks to anton for swedish translate*/
/*Thanks to peacestorm(AgameR) for dutch translate*/
/*Thanks to nsitf mcpe for chinese translate*/
var GUI;
var menu;
var vidd = true;
var viddd = '§9';
var text = 'AlphaHack!';
var space = ' ';
var version = '0.8.7';
var chestTracersRange = 10;
var chestTracersGroundMode = "on";
var chestTracersParticle = "on";
var offtime = 0;
var seconds = '1000';
var numhack = 0;
var client = '§f<§9AlphaHack§f> ';
var copyright = '©';
var trademark = 'AlphaHackPE ™';
var modpeFolder = ctx.getDir('ModPE', 0);
var modpeFile = new java.io.File(modpeFolder, 'AlphaHack v2.js');
var perm = '*';
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math["PI"] / 180;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
/*S¨?????????????t?????~??°?????????r???¯????`????????????????????????i?"¯??_?????????_???n???????????????????????_g?????????????s????????????¯??????_???????????????_*/
var horseheart = "";
var newage = "";
var vid = "";
var notex;
var notey;
var notez;
var oreId = "";
var numhack2 = 0;
var TTick = 0;
var hide = false;
var newAction = "";
var actionHeart = "";
var newAction2 = "";
var cidm8 = "";
var jumpheight = '5';
var aimrange = '7';
var rainId = '';
var shadow1X = '30';
var shadow1Y = '0';
var keybind1 = false;
var haxMode = false;
var newtime = '';
var newnamet = '';
var checkslapper = false;
/*B¯??????????????o?°????????????o??¯???????_??l?^??????????e???????????????????_??????a????"??¨????????_?????n`??^?"??????????????????????s??^???´???????????_????????_?*/
var abcabc123 = false;
var liquidwalk = false;
var xray = false;
var ttot = false;
var antivoid = false;
var armor = false;
var coords = false;
var glide = false;
var tapspam = false;
var tapdestroy = false;
var block = false;
var taptp = false;
var sign = false;
var autodestroy = false;
var autospam = false;
var autodestroy2 = false;
var autospam2 = false;
var onlyday = false;
var onlynight = false;
var chestesp = false;
var tapnuke = false;
var autonuke = false;
var antispam = false;
var antispam2 = false;
var playeresp = false;
var oreEsp = false;
var lightningaura = false;
var tapid = false;
var horsehealth = false;
var getage = false;
var setage = false;
var noclip = false;
var extraj = false;
var getvel = false;
var yawpitch = false;
var airwalk = false;
var paimaura = false;
var maimaura = false;
var aim;
var aimbot = false;
var aimed = false;
var aim2;
var aimbot2 = false;
var aimed2 = false;
var changeSpeed = false;
var brightness = false;
var lowhealth = false;
var fasteat = false;
var oreEsp2 = false;
var hackk2 = false;
var spider = false;
var autowalk = false;
var jetpack = false;
var tapjump = false;
var betterJumps = false;
var morphEnhance = false;
var twerk = false;
var tpAura = false;
var hitBehind = false;
var hitJump = false;
var nametags = false;
var attackActions = false;
var keepHotbar = false;
var itemIndi = false;
var bhop = false;
var alphatext = false;
var binarytext = false;
var zalgotext = false;
var striketext = false;
var belowblock = false;
var preventsame = false;
var hitparticles = false;
var icewalk = false;
var facedInfo = false;
var facedInfo2 = false;
var tapParti = false;
var hitmorph = false;
var hitaction2 = false;
var hitrmef = false;
var onfriction = false;
var itemrain = false;
var rainitem = false;
var doubledrop = false;
var censorbypass = false;
var hitbox1 = false;
var bowaura = false;
var legalenchant = false;
var tracers1 = false;
var entind = false;
var screenind = false;
var chatind = false;
var destroyind = false;
var ridenear = false;
var noentity = false;
var autosword = false;
var noknock = false;
var checkping = false;
var dropind = false;
var autoply1 = false;
var expind = false;
var ccolors = false;
var lightning = false;
var primedtnt = false;
var arrow = false;
var exporb = false;
var hackk = false;
var showp = false;
var fch = false;
var saddle = false;
var instakilled = false;
var instabreak = false;
var stackheart = false;
var parti = false;
var parti2 = false;
var nowalls = false;
var jump = false;
var grief = false;
var killaura = false;
var killfaura = false;
var uirender = false;
var stat22 = false;
var healthy = true;
var infhun = false;
var firepunch = false;
var deadchat = false;
var nofly = false;
var autod = false;
var remode = false;
var somd = false;
var desktop = false;
var killdaura = false;
var ban = false;
var useFire = false;
var useNether = false;
var isIpJson = false;
var isServerJson = false;
var gmkeybind = false;
var speedbind = false;
var airjump = false;
var yhitbox = false;
var hnsaimbot = false;
var tpaura2 = false;
//ParticleType.angryVillager;
var particle1 = false;
//ParticleType.bubble;
var particle2 = false;
//ParticleType.cloud;
var particle3 = false;
//ParticleType.crit;
var particle4 = false;
//ParticleType.dripLava;
var particle5 = false;
//ParticleType.dripWater;
var particle6 = false;
//ParticleType.enchantmenttable;
var particle7 = false;
//ParticleType.fallingDust;
var particle8 = false;
//ParticleType.flame;
var particle9 = false;
//ParticleType.happyVillager;
var particle10 = false;
//ParticleType.heart;
var particle11 = false;
//ParticleType.hugeexplosion;
var particle12 = false;
//ParticleType.hugeexplosionSeed;
var particle13 = false;
//ParticleType.ink;
var particle14 = false;
//ParticleType.itemBreak;
var particle15 = false;
//ParticleType.lava;
var particle16 = false;
//ParticleType.mobFlame;
var particle17 = false;
//ParticleType.note;
var particle18 = false;
//ParticleType.portal;
var particle19 = false;
//ParticleType.rainSplash;
var particle20 = false;
//ParticleType.redstone;
var particle21 = false;
//ParticleType.slime;
var particle22 = false;
//ParticleType.smoke;
var particle23 = false;
//ParticleType.snowballpoof;
var particle24 = false;
//ParticleType.spell;
var particle25 = false;
//ParticleType.splash;
var particle26 = false;
//ParticleType.suspendedTown;
var particle27 = false;
//ParticleType.terrain;
var particle28 = false;
//ParticleType.waterWake;
var particle29 = false;
//largeexplode
var particle30 = false;
//spell2
var particle31 = false;
//spell3
var particle32 = false;
//carrotboost
var particle33 = false;
//witchspell
var particle34 = false;
/*S´???´¨????????????????_?e????^????´???????????????t°????????????????????_?t?????????????????i?????°?????¨???????n?^?`????`?_?????????g??????????????????s`??¯????????????*/
var GUIColor = android.graphics.Color.TRANSPARENT;
var default1 = true;
var mcpetheme = false;
var defaultbtnc = true;
var btnPos = android.view.Gravity.RIGHT;
var activePos = android.view.Gravity.LEFT;
var GUIColor1 = android.graphics.Color.TRANSPARENT;
var GUIColor2 = android.graphics.Color.BLACK;
var GUIColor3 = android.graphics.Color.WHITE;
var GUIColor4 = android.graphics.Color.RED;
var GUIColor5 = android.graphics.Color.BLUE;
var GUIColor6 = android.graphics.Color.GRAY;
var GUIColor7 = android.graphics.Color.LTGRAY;
var GUIColor8 = android.graphics.Color.YELLOW;
var GUIColor9 = android.graphics.Color.CYAN;
var GUIColor10 = android.graphics.Color.DKGRAY;
var GUIColor11 = android.graphics.Color.GREEN;
var GUIColor12 = android.graphics.Color.MAGENTA;
var GUIName = android.graphics.Color.WHITE;
var GUIPos = android.view.Gravity.CENTER;
var GUIBtns = android.graphics.Color.BLUE;
var GUIBtns1 = android.graphics.Color.TRANSPARENT;
var GUIBtns2 = android.graphics.Color.BLACK;
var GUIBtns3 = android.graphics.Color.WHITE;
var GUIBtns4 = android.graphics.Color.RED;
var GUIBtns5 = android.graphics.Color.BLUE;
var GUIBtns6 = android.graphics.Color.GRAY;
var GUIBtns7 = android.graphics.Color.LTGRAY;
var GUIBtns8 = android.graphics.Color.YELLOW;
var GUIBtns9 = android.graphics.Color.CYAN;
var GUIBtns10 = android.graphics.Color.DKGRAY;
var GUIBtns11 = android.graphics.Color.GREEN;
var GUIBtns12 = android.graphics.Color.MAGENTA;
var GUIStroke = android.graphics.Color.BLUE;
var GUIStroke1 = android.graphics.Color.BLUE;
var GUIStroke2 = android.graphics.Color.BLACK;
var GUIStroke3 = android.graphics.Color.WHITE;
var GUIStroke4 = android.graphics.Color.RED;
var GUIStroke5 = android.graphics.Color.BLUE;
var GUIStroke6 = android.graphics.Color.GRAY;
var GUIStroke7 = android.graphics.Color.LTGRAY;
var GUIStroke8 = android.graphics.Color.YELLOW;
var GUIStroke9 = android.graphics.Color.CYAN;
var GUIStroke10 = android.graphics.Color.DKGRAY;
var GUIStroke11 = android.graphics.Color.GREEN;
var GUIStroke12 = android.graphics.Color.MAGENTA;
var GUISize = "2";
var GUIText = android.graphics.Color.WHITE;
var GUIText2 = android.graphics.Color.BLACK;
var GUIText3 = android.graphics.Color.WHITE;
var GUIText4 = android.graphics.Color.RED;
var GUIText5 = android.graphics.Color.BLUE;
var GUIText6 = android.graphics.Color.GRAY;
var GUIText7 = android.graphics.Color.LTGRAY;
var GUIText8 = android.graphics.Color.YELLOW;
var GUIText9 = android.graphics.Color.CYAN;
var GUIText10 = android.graphics.Color.DKGRAY;
var GUIText11 = android.graphics.Color.GREEN;
var GUIText12 = android.graphics.Color.MAGENTA;
//fixed color changing menus making on/off buttons look weird;
var extraBtns = android.graphics.Color.RED;
var extraBtns2 = android.graphics.Color.GREEN;
var extraBtns3 = android.graphics.Color.BLACK;
var extraBtns4 = android.graphics.Color.BLUE;
var chatColors = ChatColor.BEGIN;
var chatColors1 = ChatColor.AQUA;
var chatColors2 = ChatColor.BLACK;
var chatColors3 = ChatColor.BLUE;
var chatColors4 = ChatColor.BOLD;
var chatColors5 = ChatColor.DARK_AQUA;
var chatColors6 = ChatColor.DARK_BLUE;
var chatColors7 = ChatColor.DARK_GRAY;
var chatColors8 = ChatColor.DARK_GREEN;
var chatColors9 = ChatColor.DARK_PURPLE;
var chatColors10 = ChatColor.DARK_RED;
var chatColors11 = ChatColor.GOLD;
var chatColors12 = ChatColor.GRAY;
var chatColors13 = ChatColor.GREEN;
var chatColors14 = ChatColor.LIGHT_PURPLE;
var chatColors15 = ChatColor.RED;
var chatColors16 = ChatColor.RESET;
var chatColors17 = ChatColor.WHITE;
var chatColors18 = ChatColor.YELLOW;
var chatColors19 = '§o';
var chatColors20 = '§k';
/*U?`?¯??????`?????????????_?????????t??`??????????????i????"??"???????????????l??????????s???????~????? ?^???????????????????????_&??~?´?????????_?????? ???????¯~??????????????????o??????????_???????t???????°?~?????_????????_?????h??`^?°¨??¯??????????e??????????r?`??¯?^???_??????????*/

function styleButton() {
	/*thanks godsoft029 for working on this with me.*/
	let button = new android.widget.Button(ctx);
	button.setTextColor(GUIText);
	button.setFocusableInTouchMode(false);
	button.setTransformationMethod(null);
	button.setSoundEffectsEnabled(true);
	/* new mcpc/mcpe button */
	var mcpeBg = "iVBORw0KGgoAAAANSUhEUgAAAX8AAABOCAYAAADIFRbbAAAGtklEQVR42u3dzW7iMBSG4d7eILEIUhYgdTFihRCLCs1qbmfEAqm9RaYJBGznHP8kAYr9Lh55OoU0cczhi3HTt7e3txMAoDh0AgBQ/AEA5RT/z+Pn6d/x37D2oLTHO7RfTjv0+TH/f0hsY/vnOPHjU8/TM8+f0La+7jD+DhNt797774xDa3uBcdm5y/kdO/4fPI4mqQ9Tvs6GjsPQ8xPPx3a3Pe0/9m0rFn9rILsDO/C1OQjdATlkezFfu+61vfZYjs6xHe0XnPm12D/HtP5IfXzU156BJB7P8b7nzy2cVpvwfKkAusczZjzfe/+tr7/C29Nea97zexh2frXtR43/Ef3/E+tD0vhJrA+p56u3/cDju8LftCR/kv+PSv5W4XvB5D96/6UriC/PFYW5f4dPkj/Jf1zyNwdu88D9HwDAK1tv1qdFtbgKJv/2nYKOA4CXtt1sz4W/9hR/d46IjgOATIo/yR8ACrLbt6l/Va/aNjznv6PTAODlk/93kO8Kv7f4k/wBIK/iH0z+5jIh5vwBIJM5/0vq9yf/A8kfAHL7wLdN/pUn+Xe/OUbyB4CSkj9z/gCQj+8gv1quWosl6/wBoJzVPpfi3yD5A0Ahyb9J/N7ib94djnX+AJDXOv+mlZP/4XZ7UJI/AGT0G77LwDp/ij8AlJb8mfMHgPzm/EPJn3v7AADJn44DgBKSv7nOn+IPACUm/w3FHwCKm/Mn+QNAKcnf+Kv3FH8AyKD4b7an2XzW3tGzab3Jn3v7AEA+xb8r/Prf8CX5A0C5yZ91/gDAOn8AwAsXf9b5AwDJn+QPALn7++dv4r19WO0DAFngL3kBQIGS5vxJ/gCQyQe+wXX+JH8AyMtun7jOn+QPANkk/8V8EZn8P0j+APDyPpjzBwDW+ZP8AYDk35/zp9MAIIvin5T8mfYBgBLn/Ok0ACgv+bPOHwBeH/f2AYBCtff1qbm3DwAUJTznfzgX/qYl+QNAJnP+UXf1PJD8ASCr1T7Lhb/4N4W/mfYh+QNAacmfOX8AyOr2Dt0yT/6GLwAUVvxZ5w8AJdntI5I/c/4AkFfy39ySv/eXvFjtAwCZFf/qkvwr1vkDAMmfOX8AKHidP/f2AYD8Vvuwzh8ACv4lr+YKQF/tc0HxB4BMkn/ofv5d4f88kPwBIKt1/qG7enaaJ9BxAFBA8mfOHwAyXO2T8jd8Kf4AQPIHAOSa/M11/hR/ACgx+W8o/gDAnD8AIM/k371LNK35TmG1xt3hGrP57PzviMe7bXujIefr2a/v7c0vrfl9bft3blvv/bY77qa1jiex37TW7J/1+7rdRtt+/+z173Nr7k/S8fgeZ56n1P4yBtisuh2Hdv5Tty+Nl6TtXPavN27rfv9Y5zvieK3/H3BexP10x38dGJ9m/7rbXSo/5/J4aTz7jss3bsXzu5RfT75x2B1/VJ15RCuMH6vfnPPSvW7V7UX2g1gvY16Hyvfl4v9h/DpwLQ9wS7WwT7j2+GrRf25tFzizUzviAT+6dQtCdzIr+/hD+2m6HtvcGdjm10a/XAt9V/h/X1pznyKORz0W7fwO6C9pbIjnfsj2K2XcxByvsX9WfxvP9/bPZRva8V6/73l+Sv9pL3jfz9P61TdOQufLO/7nC/l1IO3HMty/Wt0wz5d7LLH9OvZ10dsvQS84vNuF3dpfT3/0zqkw7qPGj9I+NPm7ic13BWAm/6hE/QOSf9Q78oDk3z1+yuQvJsA7JP/rcVazyZK/dsU4ZfIXE+qTkn9v/I9I/mqhfVDyN+8tk5x4C0/+4hXv1Mm/mRvqRCXh91tBin7HVBJb6B3LfYz0c1KTsLp/bgKXUpBQ6MSEVgdOqJYwlYSgpjUtuT34Skm8KlyukhKbdvzuVIC0/d4V1rx/JdXbTyHBRiXkmCtTzxWBeuVV+ZPzqGSbmBh7/SMdb+UZj3XC+BRmALqrs6mPN3amItT/UfUsoj6MveIOHpexD3Ly350/HHDvBaEljS6BNu2oOUzfXOUUiTSm1eYYzZ+rvFN3CVdMkoEEayWimIQQcQXhmyO+ezLS5uSX47cfNedvfn9+ewPQrkClK7heslKuaJI/k0pMvOqc+ZD+WyZccRj/H3WFK7wB9PqnCn+GYc0AGG/cD034visX6UrQV5fqhPrwwPr2sOQfO4eZkvy1Odip3vGlOeHY5K8eh5l4leTfS7z1anDyf9ZnJDHJP2oOXJrTHpD8rwnSk/ytD9lDn2ENSP5Rc95PTv5qIlUWIYxN/sHPdOYL69y9WvJXPyPwPe6ZyR8AUBQ6AQAo/gCA7P0HKE0xq69QyZIAAAAASUVORK5CYII=";
	if (mcpetheme == true) button.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(mcpeBg, 0), 0, android.util.Base64.decode(mcpeBg, 0)
		.length)));
	var buttonBg = new android.graphics.drawable.GradientDrawable();
	if (defaultbtnc == true) buttonBg.setColor(android.graphics.Color.parseColor("#93000000"));
	if (defaultbtnc == false) buttonBg.setColor(GUIBtns);
	if (mcpetheme == false) buttonBg.setStroke(4, GUIStroke);
	if (mcpetheme == false) buttonBg.setCornerRadius(10);
	button.setBackgroundDrawable(buttonBg);
	return button;
}

function styleInput() {
	let input = new android.widget.EditText(ctx);
	input.setTextColor(GUIText);
	var inputBg = new android.graphics.drawable.GradientDrawable();
	inputBg.setColor(android.graphics.Color.parseColor("#93000000"));
	inputBg.setStroke(4, GUIStroke);
	inputBg.setCornerRadius(10);
	input.setBackgroundDrawable(inputBg);
	return input;
}

//layout dip2px
function dip2px(dips) {
	return Math.ceil(dips * ctx.getResources()
		.getDisplayMetrics()
		.density);
}

//base64 icon
var bg64 = "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";
/*L"???????"??????????_??a¨?¨¯´?????y????¨?^??????????????o¯¯¨??`????????¯?_????????????u???"???`??????"???????????????????t??°??¯?????_?????s??????¯?¨????*/
function enableMod() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
				var layout = new android.widget.LinearLayout(ctx);
				layout.setOrientation(1);
				var menuNo = new android.widget.Button(ctx);
				menuNo.setTextSize(10);
				menuNo.setText("");
				menuNo.setTextColor(android.graphics.Color.GREEN);
				layout.addView(menuNo);
				Debug = new android.widget.PopupWindow(layout, dip2px(0), dip2px(0));
				Debug.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				Debug.showAtLocation(ctx.getWindow()
					.getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 1500);
			} catch (err) {
				android.widget.Toast.makeText(ctx, "WHAT THE FUCK: " + err, 1)
					.show();
			}
		}
	}));
}
enableMod();
//dismissable or showable function
function showMenuBtn() {
	//main button
	if (keybind1 == false) {
		MainActivity.runOnUiThread(new java.lang.Runnable({
			run: function () {
				try {
					var layout = new android.widget.LinearLayout(MainActivity);
					layout.setOrientation(1);
					var menuBtn = new android.widget.Button(ctx);
					menuBtn.setVisibility(android.view.View.VISIBLE);
					if (hide == false) menuBtn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(bg64, 0), 0, android.util.Base64.decode(bg64, 0)
						.length)));
					if (hide == true) menuBtn.setText("a");
					menuBtn.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function (viewarg) {
							if (haxMode == false) mainMenu();
							if (haxMode == true) haxMenu();
							GUI.dismiss();
							menuBtn.setVisibility(android.view.View.GONE);
						}
					}));
					layout.addView(menuBtn);
					GUI = new android.widget.PopupWindow(layout, dip2px(45), dip2px(45));
					if (hide == true) menuBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
					GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
					GUI.showAtLocation(MainActivity.getWindow()
						.getDecorView(), btnPos | android.view.Gravity.TOP, 0, 120);
				} catch (err) {
					android.widget.Toast.makeText(MainActivity, "An error occured: " + err, 1)
						.show();
				}
			}
		}));
	}
	if (keybind1 == true) keybind();
}
showMenuBtn();

function keybind() {
	MainActivity.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
				var toggleLayout = new android.widget.LinearLayout(MainActivity);
				var toggleScroll = new android.widget.ScrollView(MainActivity);
				var toggleLayout1 = new android.widget.LinearLayout(MainActivity);
				toggleLayout.setOrientation(1);
				toggleLayout1.setOrientation(1);
				toggleScroll.addView(toggleLayout);
				toggleLayout1.addView(toggleScroll);
				var exit = new styleButton();
				var open = new styleButton();
				var killaura = new styleButton();
				var hitbox = new styleButton();
				var gamec = new styleButton();
				open.setText("a");
				open.setTextColor(android.graphics.Color.WHITE);
				open.setTextSize(10);
				open.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						toggle.dismiss();
						if (haxMode == false) mainMenu();
						if (haxMode == true) haxMenu();
					}
				}));
				toggleLayout.addView(open);

				toggle = new android.widget.PopupWindow(toggleLayout1, dip2px(55), MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getHeight() / 3);
				var bg = new android.graphics.drawable.GradientDrawable();
				bg.setColor(android.graphics.Color.TRANSPARENT);
				bg.setStroke(10, GUIStroke);
				toggleLayout1.setBackgroundDrawable(bg);
				//toggleLayout1.setPadding(20,0,20,0);
				toggle.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				toggle.showAtLocation(MainActivity.getWindow()
					.getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 130);
			} catch (error) {
				android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
					.show();
			}
		}
	}));
}

var jumpBtn = new styleButton();
jumpBtn.setVisibility(android.view.View.GONE);
function showJumpButton() {
		MainActivity.runOnUiThread(new java.lang.Runnable({
			run: function () {
				try {
					var jumpLayout = new android.widget.LinearLayout(MainActivity);
					jumpLayout.setOrientation(1);
					jumpBtn.setVisibility(android.view.View.VISIBLE);
					jumpBtn.setText("Jump");
					jumpBtn.setTextSize(7);
					jumpBtn.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function (viewarg) {
						Entity.setVelY(Player.getEntity(), 0.4);
						}
					}));
					jumpLayout.addView(jumpBtn);
					jumpGui = new android.widget.PopupWindow(jumpLayout, dip2px(45), dip2px(45));
					jumpGui.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
					jumpGui.showAtLocation(MainActivity.getWindow()
						.getDecorView(), btnPos | android.view.Gravity.BOTTOM, 0, 120);
				} catch (err) {
					android.widget.Toast.makeText(MainActivity, "An error occured: " + err, 1)
						.show();
				}
			}
		}));
}

function haxMenu() {
	MainActivity.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
				var haxLayout = new android.widget.LinearLayout(MainActivity);
				var haxScroll = new android.widget.ScrollView(MainActivity);
				var haxLayout1 = new android.widget.LinearLayout(MainActivity);
				haxLayout.setOrientation(1);
				haxLayout1.setOrientation(1);
				haxScroll.addView(haxLayout);
				haxLayout1.addView(haxScroll);
				var title = new android.widget.TextView(MainActivity);
				title.setTextSize(20);
				title.setText(" AlphaHack v2 (" + version + ")");
				title.setGravity(android.view.Gravity.CENTER);
				title.setTextColor(GUIName);
				haxLayout.addView(title);
				var title2 = new android.widget.TextView(MainActivity);
				title2.setTextSize(20);
				title2.setText("Made by: ArceusMatt");
				title2.setGravity(android.view.Gravity.CENTER);
				title2.setTextColor(GUIName);
				haxLayout.addView(title2);
				var exit = new styleButton();
				exit.setTextColor(android.graphics.Color.RED);
				exit.setText(" Exit ");
				exit.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				exit.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						hax.dismiss();
						showMenuBtn();
					}
				}));
				haxLayout.addView(exit);
				var group = new styleButton();
				group.setText("Community");
				group.setTextColor(GUIText);
				group.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				group.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var urls4 = new android.content.Intent(MainActivity);
						urls4.setAction(android.content.Intent.ACTION_VIEW);
						urls4.setData(android.net.Uri.parse("https://plus.google.com/communities/103695355587842948163"));
						MainActivity.startActivity(urls4);
					}
				});
				haxLayout.addView(group);
				var settings = new styleButton();
				settings.setText("Settings");
				if (getLanguage == "it_IT") settings.setText("Impostazioni");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") settings.setText("Configuracion");
				if (getLanguage == "ko_KR") settings.setText("??");
				settings.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				settings.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						settings_menu();
						hax.dismiss();
					}
				});
				haxLayout.addView(settings);
				var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);

				function haxButton() {
					let button = new styleButton();
					button.setTextColor(GUIText);
					button.setFocusableInTouchMode(false);
					button.setTransformationMethod(null);
					button.setSoundEffectsEnabled(true);
					button.setLayoutParams(params);
					/* new mcpc/mcpe button */
					var mcpeBg = "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";
					if (mcpetheme == true) button.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(mcpeBg, 0), 0, android.util.Base64.decode(mcpeBg, 0)
						.length)));
					var buttonBg = new android.graphics.drawable.GradientDrawable();
					if (defaultbtnc == true) buttonBg.setColor(android.graphics.Color.parseColor("#93000000"));
					if (defaultbtnc == false) buttonBg.setColor(GUIBtns);
					if (mcpetheme == false) buttonBg.setStroke(4, GUIStroke);
					if (mcpetheme == false) buttonBg.setCornerRadius(10);
					button.setBackgroundDrawable(buttonBg);
					return button;
				}
				var row0 = new android.widget.LinearLayout(MainActivity);
				row0.setOrientation(0);
				var textView1 = new android.widget.TextView(MainActivity);
				textView1.setText("Combat");
				textView1.setTextColor(android.graphics.Color.BLACK);
				textView1.setLayoutParams(params);
				var text1Bg = new android.graphics.drawable.GradientDrawable();
				text1Bg.setColor(android.graphics.Color.RED);
				text1Bg.setStroke(4, GUIStroke);
				text1Bg.setCornerRadius(10);
				textView1.setBackgroundDrawable(text1Bg);
				row0.addView(textView1);
				var textView2 = new android.widget.TextView(MainActivity);
				textView2.setText("Player");
				textView2.setTextColor(android.graphics.Color.BLACK);
				textView2.setLayoutParams(params);
				var text2Bg = new android.graphics.drawable.GradientDrawable();
				text2Bg.setColor(android.graphics.Color.BLUE);
				text2Bg.setStroke(4, GUIStroke);
				text2Bg.setCornerRadius(10);
				textView2.setBackgroundDrawable(text2Bg);
				row0.addView(textView2);
				var textView3 = new android.widget.TextView(MainActivity);
				textView3.setText("Misc");
				textView3.setTextColor(android.graphics.Color.BLACK);
				textView3.setLayoutParams(params);
				var text3Bg = new android.graphics.drawable.GradientDrawable();
				text3Bg.setColor(android.graphics.Color.WHITE);
				text3Bg.setStroke(4, GUIStroke);
				text3Bg.setCornerRadius(10);
				textView3.setBackgroundDrawable(text3Bg);
				row0.addView(textView3);
				haxLayout.addView(row0);
				//wip

				hax = new android.widget.PopupWindow(haxLayout1, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / 1.1, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getHeight() / 1.2);
				if (default1 == true) hax.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
				if (default1 == false) hax.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
				var bg = new android.graphics.drawable.GradientDrawable();
				bg.setColor(android.graphics.Color.TRANSPARENT);
				bg.setStroke(10, GUIStroke);
				haxLayout1.setBackgroundDrawable(bg);
				haxLayout1.setPadding(10, 0, 10, 0);
				hax.showAtLocation(ctx.getWindow()
					.getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
			} catch (error) {
				android.widget.Toast.makeText(ctx, "Error: " + error + "#" + error.lineNumber, 1)
					.show();
			}
		}
	}));
}

function betterWebview(url) {
	MainActivity.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
				var wvLayout = new android.widget.LinearLayout(MainActivity);
				var wvScroll = new android.widget.ScrollView(MainActivity);
				var wvLayout1 = new android.widget.LinearLayout(MainActivity);
				wvLayout.setOrientation(1);
				wvLayout1.setOrientation(1);
				wvScroll.addView(wvLayout);
				wvLayout1.addView(wvScroll);
				var webs = new android.webkit.WebView(MainActivity);
				webs.setWebChromeClient(new android.webkit.WebChromeClient());
				webs.setWebViewClient(new android.webkit.WebViewClient());
				webs.setScrollBarStyle(webs.SCROLLBARS_INSIDE_OVERLAY);
				webs.requestFocus(webs.FOCUS_DOWN);
				webs.requestFocusFromTouch();
				var webset = webs.getSettings();
				var exit = new styleButton();
				var settings = new styleButton();
				var back = new styleButton();
				var clear = new styleButton();
				var backb = new styleButton();
				var js1 = new styleButton();
				var geo = new styleButton();
				var passes = new styleButton();
				var agent1 = new android.widget.TextView(MainActivity);
				back.setVisibility(android.view.View.GONE);
				clear.setVisibility(android.view.View.GONE);
				backb.setVisibility(android.view.View.GONE);
				js1.setVisibility(android.view.View.GONE);
				geo.setVisibility(android.view.View.GONE);
				passes.setVisibility(android.view.View.GONE);
				agent1.setVisibility(android.view.View.GONE);
				var jscript = true;
				var geoloco = false;
				var savepass = false;
				exit.setText("Exit");
				exit.setTextColor(android.graphics.Color.RED);
				exit.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						wv.dismiss();
						showMenuBtn();
						webs.clearCache(true);
						webs.clearFormData();
						webs.clearHistory();
					}
				}));
				wvLayout.addView(exit);
				settings.setText("Settings");
				settings.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						webs.setVisibility(android.view.View.GONE);
						settings.setVisibility(android.view.View.GONE);
						back.setVisibility(android.view.View.VISIBLE);
						clear.setVisibility(android.view.View.VISIBLE);
						backb.setVisibility(android.view.View.VISIBLE);
						js1.setVisibility(android.view.View.VISIBLE);
						geo.setVisibility(android.view.View.VISIBLE);
						passes.setVisibility(android.view.View.VISIBLE);
						agent1.setVisibility(android.view.View.VISIBLE);
					}
				}));
				wvLayout.addView(settings);
				back.setText("Back to webview");
				back.setVisibility(android.view.View.GONE);
				back.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						webs.setVisibility(android.view.View.VISIBLE);
						settings.setVisibility(android.view.View.VISIBLE);
						back.setVisibility(android.view.View.GONE);
						clear.setVisibility(android.view.View.GONE);
						backb.setVisibility(android.view.View.GONE);
						js1.setVisibility(android.view.View.GONE);
						geo.setVisibility(android.view.View.GONE);
						passes.setVisibility(android.view.View.GONE);
						agent1.setVisibility(android.view.View.GONE);
					}
				}));
				wvLayout.addView(back);
				clear.setText("Clear history");
				clear.setVisibility(android.view.View.GONE);
				clear.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						webs.clearCache(true);
						webs.clearFormData();
						webs.clearHistory();
						android.widget.Toast.makeText(ctx, "Cache & history cleared.", 1)
							.show();
					}
				}));
				wvLayout.addView(clear);
				backb.setText("Back to first page");
				backb.setVisibility(android.view.View.GONE);
				backb.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						android.widget.Toast.makeText(ctx, "Loading... " + url, 1)
							.show();
						webs.loadUrl(url);
					}
				}));
				wvLayout.addView(backb);
				js1.setText("JavaScript enabled");
				js1.setTextColor(android.graphics.Color.WHITE);
				js1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						jscript ? jscript = false : jscript = true;
						if (jscript == true) {
							js1.setTextColor(android.graphics.Color.GREEN);
							js1.setText("JavaScript enabled");
							webset.setJavaScriptEnabled(true);
							webs.reload();
							jscript = true;
						}
						if (jscript == false) {
							js1.setTextColor(android.graphics.Color.RED);
							js1.setText("JavaScript disabled");
							webset.setJavaScriptEnabled(false);
							webs.reload();
							jscript = false;
						}
					}
				}));
				wvLayout.addView(js1);
				geo.setText("Geolocation disabled");
				geo.setTextColor(android.graphics.Color.WHITE);
				geo.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						geoloco ? geoloco = false : geoloco = true;
						if (geoloco == true) {
							geo.setTextColor(android.graphics.Color.GREEN);
							geo.setText("Geolocation enabled");
							webset.setGeolocationEnabled(true);
							webs.reload();
							geoloco = true;
						}
						if (geoloco == false) {
							geo.setTextColor(android.graphics.Color.RED);
							geo.setText("Geolocation disabled");
							webset.setGeolocationEnabled(false);
							webs.reload();
							geoloco = false;
						}
					}
				}));
				wvLayout.addView(geo);
				passes.setText("SavePasswords disabled");
				passes.setTextColor(android.graphics.Color.WHITE);
				passes.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						savepass ? savepass = false : savepass = true;
						if (savepass == true) {
							passes.setTextColor(android.graphics.Color.GREEN);
							passes.setText("SavePasswords enabled");
							webset.setSavePassword(true);
							webs.reload();
							savepass = true;
						}
						if (savepass == false) {
							passes.setTextColor(android.graphics.Color.RED);
							passes.setText("SavePasswords disabled");
							webset.setSavePassword(false);
							webs.reload();
							savepass = false;
						}
					}
				}));
				wvLayout.addView(passes);
				agent1.setText(webset.getUserAgentString() + "");
				agent1.setTextColor(android.graphics.Color.WHITE);
				var textviewBg = new android.graphics.drawable.GradientDrawable();
				textviewBg.setColor(android.graphics.Color.BLACK);
				agent1.setBackgroundDrawable(textviewBg);
				wvLayout.addView(agent1);
				webset.setLoadsImagesAutomatically(true);
				webset.setJavaScriptCanOpenWindowsAutomatically(false);
				webset.setSupportZoom(true);
				webset.setBuiltInZoomControls(true);
				webset.setDisplayZoomControls(false);
				webset.setGeolocationEnabled(geoloco);
				webset.setJavaScriptEnabled(jscript);
				webset.setSavePassword(savepass);
				webset.setAppCacheEnabled(false);
				webset.setUserAgentString(webset.getUserAgentString());
				webset.setAllowContentAccess(false);
				webset.setAllowFileAccess(false);
				webset.setAllowFileAccessFromFileURLs(false);
				webset.setAllowUniversalAccessFromFileURLs(false);
				webset.setDatabaseEnabled(false);
				webset.setCacheMode(android.webkit.WebSettings.LOAD_NO_CACHE);
				webset.setDomStorageEnabled(false);
				webs.requestFocus(android.view.View.FOCUS_DOWN);
				/*webs.setOnTouchListener(new android.view.View.OnTouchListener(
				      {
				      onTouch:function(v, e){
				      switch(e.getAction()){
				      case android.view.MotionEvent.ACTION_UP:
				      case android.view.MotionEvent.ACTION_DOWN:
					  if(v.hasFocus()){
					  v.requestFocus();
					  ctx.getWindow().setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_STATE_VISIBLE);
					  var InputMethodManager = android.view.inputmethod.InputMethodManager;
					  var input = ctx.getSystemService(android.content.Context.INPUT_METHOD_SERVICE);
					  input.toggleSoftInput(InputMethodManager.SHOW_FORCED, 0);
					  
					  */
				/* 
					  thanks godsoft029 for fixing the keyboard issue :) now i dont have to use this. ^ 
					  */
				/*
					  
					  }
				      break;
				      }
				      return false;
				      }
				      }));*/
				webs.loadUrl(url);
				wvLayout.addView(webs);
				wv = new android.widget.PopupWindow(wvLayout1, dip2px(500), dip2px(500), true);
				wv = new android.widget.PopupWindow(wvLayout1, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / 1, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getHeight() / 1, true);
				var bg = new android.graphics.drawable.GradientDrawable();
				bg.setColor(android.graphics.Color.TRANSPARENT);
				bg.setStroke(10, GUIStroke);
				wvLayout1.setBackgroundDrawable(bg);
				wvLayout1.setPadding(20, 0, 20, 0);
				wv.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				wv.showAtLocation(MainActivity.getWindow()
					.getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
			} catch (error) {
				android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
					.show();
			}
		}
	}));
}
/*M~?`??????¨????~???????????a???????¯?¯???????????????i??????????_?n`"????????????_??_???????? ?¯`°?`?????????????????m???`????????e´?????????^?????"??????????????????n?????????^????????¯??????u???^?????????????????*/
function mainMenu() {
	MainActivity.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
				var menuLayout = new android.widget.LinearLayout(MainActivity);
				var menuScroll = new android.widget.ScrollView(MainActivity);
				var menuLayout1 = new android.widget.LinearLayout(MainActivity);
				menuLayout.setOrientation(1);
				menuLayout1.setOrientation(1);
				menuScroll.addView(menuLayout);
				menuLayout1.addView(menuScroll);
				var title = new android.widget.TextView(MainActivity);
				title.setTextSize(20);
				title.setText(" AlphaHack v2 beta ("+version+")");
				title.setGravity(android.view.Gravity.CENTER);
				title.setTextColor(GUIName);
				menuLayout.addView(title);
				var title2 = new android.widget.TextView(MainActivity);
				title2.setTextSize(20);
				title2.setText("Made by: ArceusMatt");
				title2.setGravity(android.view.Gravity.CENTER);
				title2.setTextColor(GUIName);
				menuLayout.addView(title2);
				var exit = new styleButton();
				exit.setText("Exit AlphaHack");
				if (mcpetheme == true) exit.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(buttonBg, 0), 0, android.util.Base64.decode(buttonBg, 0)
					.length)));
				exit.setTextColor(android.graphics.Color.RED);
				exit.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						menu.dismiss();
						showMenuBtn();
					}
				}));
				menuLayout.addView(exit);
				var line0 = new android.widget.LinearLayout(MainActivity);
				line0.setOrientation(0);
				menuLayout.addView(line0);
				var group = new styleButton();
				group.setText("Community");
				group.setTextColor(GUIText);
				group.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var urls4 = new android.content.Intent(MainActivity);
						urls4.setAction(android.content.Intent.ACTION_VIEW);
						urls4.setData(android.net.Uri.parse("https://plus.google.com/communities/103695355587842948163"));
						MainActivity.startActivity(urls4);
					}
				});
				menuLayout.addView(group);

				menu = new android.widget.PopupWindow(menuLayout1, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / GUISize, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getHeight());
				if (default1 == true) menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
				if (mcpetheme == true) menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#94857f")));
				if (default1 == false) menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
				var bg = new android.graphics.drawable.GradientDrawable();
				bg.setColor(android.graphics.Color.TRANSPARENT);
				bg.setStroke(10, GUIStroke);
				menuLayout1.setBackgroundDrawable(bg);
				menuLayout1.setPadding(20, 0, 20, 0);
				menu.showAtLocation(MainActivity.getWindow()
					.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
			} catch (error) {
				android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
					.show();
			}
		}
	}));
}
