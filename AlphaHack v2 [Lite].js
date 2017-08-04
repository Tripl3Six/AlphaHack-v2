var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
/*


THIS IS ALPHAHACK V2 LITE VERSION WHICH IS BASED OFF ALPHAHACK V2 (0.9.0)
LITE VERSION HAS NO HACKS AT ALL AND WILL MAINLY HAVE SINGLE PLAYER/REALM MODS.
THIS MEANS THE HACK MENU IS REMOVED & ANY ONLINE FEATURES ARE REMOVED LIKE THE AUTO UPDATER
THUS LITE WILL NOT LAG AND WILL BE MUCH SMOOTHER TO USE, LITE WILL NOT HAVE ANY VERSION EXCLUSIVES.


<>--------------------<>
[AlphαHαck by: ArceusMatt (c) 2016 - 2017];
<>--------------------<>
[Free to use mod menu for MCPE under MIT license];
Anyone modifying, gaining money, copying without permission,
will be confronted & will be asked to change
or delete their mistakes by the creator of this program.
To share it the link most be https://arceusmatt.github.io/alphahack
If you'd like to chat with us we have a discord group: https://discord.gg/cvh6Mht
<>--------------------<>
[Pleαse contαct the developers of eαch code for permission to copy.];
My permission to use dragop code 1 http://imgur.com/6xCQAyT
My permission to use dragop code 2 http://imgur.com/xpEHET3
My permission to use vertex chest esp http://imgur.com/a/qm43v
My permission to use maximus glide http://imgur.com/1Vkl3q2
<>--------------------<>
[contributors: Godsoft029, Johnmαcrocrαft, αJ170, Peαcestorm(αgαmeR), αPRIC0CKS, Vertex client teαm];
Contributor means they have decided to make a commit to the mod.
<>--------------------<>
*/
var MainActivity = ctx;
var getLanguage = ModPE.getLanguage();
var getVersion = ModPE.getMinecraftVersion();
/*
Thanks to godsoft029 and many others for german translate
Thanks to MasterProGame & TheNewHEROBRINE for italian translate
Thanks to walpo for spanish translate
Thanks to johnmacrocraft for korean translate
Thanks to billbeds for hindi translate
Thanks to anton for swedish translate
Thanks to peacestorm(AgameR) for dutch translate
Thanks to nsitf mcpe for chinese translate
*/
var GUI;
var menu;
var vidd = true;
var viddd = '§9';
var text = 'AlphαHαck!';
var space = ' ';
var version = 'Lite';
var chestTracersRange = 10;
var chestTracersGroundMode = "on";
var chestTracersParticle = "on";
var offtime = 0;
var seconds = '1000';
var numhack = 0;
var client = '§f<§9AlphαHαck§f> ';
var copyright = '©';
var trademark = 'AlphαHαckPE™';
var groupL = 'https://discord.gg/cvh6Mht';
var group2L = 'https://plus.google.com/u/0/communities/103695355587842948163';
var siteL = 'https://arceusmatt.github.io/alphahack.html';
var perm = '*';
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math["PI"] / 180;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var onusers = [];
/*strings*/
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
var resultty = '';
var shadow1X = '30';
var shadow1Y = '1';
var keybind1 = false;
var haxMode = false;
var newtime = '';
var newnamet = '';
var checkslapper = false;
var allDePasswords;
var numhack3 = 0;
var fuckDePasswords;
var fuckDePasswords2;
var fuckDePasswords3;
var fuckDePasswords4;
var fuckDePasswords5;
var numhack4 = 0;
/*booleans*/
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
var entselect = false;
var dbselect1 = false;
var lightning = false;
//EntityType.LIGHTNING_BOLT;
var primedtnt = false;
//EntityType.PRIMED_TNT;
var arrow = false;
//EntityType.ARROW;
var exporb = false;
//EntityType.EXPERIENCE_ORB;
var fireball = false;
//EntityType.FIREBALL;
var egg = false;
//EntityType.EGG;
var endersignal = false;
//70
var shulkerbullet = false;
//76
var snowball = false;
//81
var witherskull = false;
//89
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
var tpaura3 = false;
var sneakaura1 = false;
var freeze1 = false;
var fp9x1_ = false;
var fp9x2_ = false;
var spinaura = false;
var autolog = false;
var newpasshack = false;
var sneakspeed1 = false;
var alwayssneak1 = false;
var hittp = false;
var sneakaura2 = false;
var finalpass = false;
var tpasshack1 = false;
var tpasshack2 = false;
var tpasshack3 = false;
var tpasshack4 = false;
var tpasshack5 = false;
var requestAccepted = false;
var broadcasted = false;
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
/*Settings*/
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

var GUIStroke = android.graphics.Color.MAGENTA;
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

/*fixed color changing menus making on/off buttons look weird;*/
var extraBtns = android.graphics.Color.RED;
var extraBtns2 = android.graphics.Color.GREEN;
var extraBtns3 = android.graphics.Color.BLACK;
var extraBtns4 = android.graphics.Color.BLUE;
/*yeah... not really. these are useless :/ (for now)*/

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
/*Utils & other*/
var fps = 0;
var lastLoop = new Date;
var aLoop = lastLoop.getMilliseconds();


function styleButton() {
	/*thanks godsoft029 for working on this with me.*/
	let button = new android.widget.Button(ctx);
	button.setTextColor(GUIText);
	button.setFocusableInTouchMode(false);
	button.setTransformationMethod(null);
	button.setSoundEffectsEnabled(true);
	/* new mcpc/mcpe button base64 */
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

function newLevel() {
	clientMessage("§2≡≡=======»§a>§9 §a§kAlpha§r §a<§2«======≡≡§f§r");
	clientMessage(client + "\n§aKik§f: ArceusMatt" + "\n" + "§bTwitter§f: @ArceusMatt" + "\n" + "§cGoogle+§f: Arceus Matt" + "\n" + "§fYou§4tube§f: Arceus Matt");
	clientMessage("§2≡≡=======»§a>§9 §a§kAlpha§r §a<§2«======≡≡§f§r\n");
}
//change mcpe color text with the remaining text
/*note to self "/assets/resource_packs/vanilla/texts/"*/
ModPE.langEdit("menu.copyright", "AlphαHαckPE");
ModPE.langEdit("menu.generatingLevel", "Loading... §a§kAlpha§r");
ModPE.langEdit("menu.generatingTerrain", "Loading... §a§kAlpha§r");
ModPE.langEdit("menu.loadingLevel", "Loading... §a§kAlpha§r");
ModPE.langEdit("progressScreen.generating", "Loading... §a§kAlpha§r");
ModPE.langEdit("progressScreen.message.building", "Loading... §a§kAlpha§r");
ModPE.langEdit("progressScreen.message.locating", "Locating... §a§kAlpha§r");
ModPE.langEdit("selectServer.edit", viddd + ModPE.getI18n("selectServer.edit"));
ModPE.langEdit("selectServer.deleteButton", "§c" + ModPE.getI18n("selectServer.deleteButton"));
ModPE.langEdit("menu.play", viddd + ModPE.getI18n("menu.play"));
ModPE.langEdit("menu.options", viddd + ModPE.getI18n("menu.options"));
ModPE.langEdit("menu.skins", viddd + ModPE.getI18n("menu.skins"));
ModPE.langEdit("menu.store", viddd + ModPE.getI18n("menu.store"));
ModPE.langEdit("menu.achievements", viddd + ModPE.getI18n("menu.achievements"));
ModPE.langEdit("menu.settings", viddd + ModPE.getI18n("menu.settings"));
ModPE.langEdit("menu.returnToGame", viddd + ModPE.getI18n("menu.returnToGame"));
ModPE.langEdit("menu.shareToLan", viddd + ModPE.getI18n("menu.shareToLan"));
ModPE.langEdit("menu.online", viddd + ModPE.getI18n("menu.online"));
ModPE.langEdit("menu.realms", viddd + ModPE.getI18n("menu.realms"));
ModPE.langEdit("menu.playOnRealms", viddd + ModPE.getI18n("menu.playOnRealms"));
ModPE.langEdit("menu.multiplayer", viddd + ModPE.getI18n("menu.multiplayer"));
ModPE.langEdit("menu.online", viddd + ModPE.getI18n("menu.online"));
ModPE.langEdit("pauseScreen.quit", viddd + ModPE.getI18n("pauseScreen.quit"));
ModPE.langEdit("pauseScreen.options", viddd + ModPE.getI18n("pauseScreen.options"));
ModPE.langEdit("pauseScreen.back", viddd + ModPE.getI18n("pauseScreen.back"));
ModPE.langEdit("pauseScreen.invite", viddd + ModPE.getI18n("pauseScreen.invite"));
ModPE.langEdit("pauseScreen.achievements", viddd + ModPE.getI18n("pauseScreen.achievements"));
ModPE.langEdit("deathScreen.quit", viddd + ModPE.getI18n("deathScreen.quit"));
ModPE.langEdit("deathScreen.respawn", viddd + ModPE.getI18n("deathScreen.respawn"));
ModPE.langEdit("deathScreen.message", viddd + ModPE.getI18n("deathScreen.message"));
ModPE.langEdit("chatScreen.hide", viddd + ModPE.getI18n("chatScreen.hide"));
ModPE.langEdit("pauseScreen.invite", viddd + ModPE.getI18n("pauseScreen.invite"));
ModPE.langEdit("createWorldScreen.game.settings", viddd + ModPE.getI18n("createWorldScreen.game.settings"));
ModPE.langEdit("createWorldScreen.gameMode.creative", viddd + ModPE.getI18n("createWorldScreen.gameMode.creative"));
ModPE.langEdit("createWorldScreen.gameMode.survival", viddd + ModPE.getI18n("createWorldScreen.gameMode.survival"));
ModPE.langEdit("deathScreen.message", "§c§lWasted");
ModPE.langEdit("commands.op.success", "§l" + ModPE.getI18n("commands.op.success"));
ModPE.langEdit("commands.banip.success", "§l" + ModPE.getI18n("commands.banip.success"));
ModPE.langEdit("commands.banip.success.players", "§l" + ModPE.getI18n("commands.banip.success.players"));
ModPE.langEdit("playscreen.new", viddd + ModPE.getI18n("playscreen.new"));
ModPE.langEdit("skins.restore.button", viddd + ModPE.getI18n("skins.restore.button"));
ModPE.langEdit("externalServerScreen.addServer", viddd + ModPE.getI18n("externalServerScreen.addServer"));
ModPE.langEdit("playscreen.quit", viddd + ModPE.getI18n("playscreen.quit"));
ModPE.langEdit("chatScreen.hide", viddd + ModPE.getI18n("chatScreen.hide"));
ModPE.langEdit("xbox.signin", viddd + ModPE.getI18n("xbox.signin"));
ModPE.langEdit("xbox.signout", viddd + ModPE.getI18n("xbox.signout"));
ModPE.langEdit("entity.generic.name", viddd + ModPE.getI18n("entity.generic.name"));
ModPE.langEdit("chestScreen.header.large", viddd + ModPE.getI18n("chestScreen.header.large"));
ModPE.langEdit("chestScreen.header.player", viddd + ModPE.getI18n("chestScreen.header.player"));
ModPE.langEdit("chestScreen.header.small", viddd + ModPE.getI18n("chestScreen.header.small"));
ModPE.langEdit("networkWorld.add_friend", viddd + ModPE.getI18n("networkWorld.add_friend"));
ModPE.langEdit("furnaceScreen.header", viddd + ModPE.getI18n("furnaceScreen.header"));
ModPE.langEdit("craftingScreen.header", viddd + ModPE.getI18n("craftingScreen.header"));
ModPE.langEdit("anvilScreen.header", viddd + ModPE.getI18n("anvilScreen.header"));
ModPE.langEdit("enchantingScreen.header", viddd + ModPE.getI18n("enchantingScreen.header"));
ModPE.langEdit("enchantingTableScreen.header", viddd + ModPE.getI18n("enchantingTableScreen.header"));
ModPE.langEdit("enchantScreen.header", viddd + ModPE.getI18n("enchantScreen.header"));
ModPE.langEdit("enchantTableScreen.header", viddd + ModPE.getI18n("enchantTableScreen.header"));
ModPE.langEdit("beaconScreen.header", viddd + ModPE.getI18n("beaconScreen.header"));
ModPE.langEdit("container.beacon", viddd + ModPE.getI18n("container.beacon"));
ModPE.langEdit("container.brewing", viddd + ModPE.getI18n("container.brewing"));
ModPE.langEdit("container.chest", viddd + ModPE.getI18n("container.chest"));
ModPE.langEdit("container.chestDouble", viddd + ModPE.getI18n("container.chestDouble"));
ModPE.langEdit("container.crafting", viddd + ModPE.getI18n("container.crafting"));
ModPE.langEdit("container.dispenser", viddd + ModPE.getI18n("container.dispenser"));
ModPE.langEdit("container.dropper", viddd + ModPE.getI18n("container.dropper"));
ModPE.langEdit("container.enchant", viddd + ModPE.getI18n("container.enchant"));
ModPE.langEdit("container.furnace", viddd + ModPE.getI18n("container.furnace"));
ModPE.langEdit("container.hopper", viddd + ModPE.getI18n("container.hopper"));
ModPE.langEdit("container.inventory", viddd + ModPE.getI18n("container.inventory"));
ModPE.langEdit("container.minecart", viddd + ModPE.getI18n("container.minecart"));
ModPE.langEdit("container.stonecutter", viddd + ModPE.getI18n("container.stonecutter"));
ModPE.langEdit("container.anvil", viddd + ModPE.getI18n("container.anvil"));
ModPE.langEdit("container.enchantingTable", viddd + ModPE.getI18n("container.enchantingTable"));
ModPE.langEdit("container.enchantmentTable", viddd + ModPE.getI18n("container.enchantmentTable"));
ModPE.langEdit("selectWorld.create", viddd + ModPE.getI18n("selectWorld.create"));
ModPE.langEdit("tile.enchanting_table.name", viddd + ModPE.getI18n("tile.enchanting_table.name"));
ModPE.langEdit("tile.anvil.name", viddd + ModPE.getI18n("tile.anvil.name"));
ModPE.langEdit("container.enderchest", viddd + ModPE.getI18n("container.enderchest"));
ModPE.langEdit("cauldronScreen.header", viddd + ModPE.getI18n("cauldronScreen.header"));
ModPE.langEdit("externalServerScreen.header", viddd + ModPE.getI18n("externalServerScreen.header"));
ModPE.langEdit("gui.achievements", viddd + ModPE.getI18n("gui.achievements"));
ModPE.langEdit("skins.picker.title", viddd + ModPE.getI18n("skins.picker.title"));
ModPE.langEdit("skins.picker.accept.button", viddd + ModPE.getI18n("skins.picker.accept.button"));
ModPE.langEdit("options.title", viddd + ModPE.getI18n("options.title"));
ModPE.langEdit("death.attack.mob", viddd + ModPE.getI18n("death.attack.mob"));
ModPE.langEdit("death.attack.fall", viddd + ModPE.getI18n("death.attack.fall"));
ModPE.langEdit("death.attack.explosion", viddd + ModPE.getI18n("death.attack.explosion"));
ModPE.langEdit("death.attack.arrow", viddd + ModPE.getI18n("death.attack.arrow"));
ModPE.langEdit("death.attack.drown", viddd + ModPE.getI18n("death.attack.drown"));
ModPE.langEdit("death.fell.accident.generic", viddd + ModPE.getI18n("death.fell.accident.generic"));
ModPE.langEdit("death.attack.outOfWorld", viddd + ModPE.getI18n("death.attack.outOfWorld"));
ModPE.langEdit("death.attack.onFire", viddd + ModPE.getI18n("death.attack.onFire"));
ModPE.langEdit("death.attack.magic", viddd + ModPE.getI18n("death.attack.magic"));
ModPE.langEdit("death.attack.inWall", viddd + ModPE.getI18n("death.attack.inWall"));
ModPE.langEdit("death.attack.lava", viddd + ModPE.getI18n("death.attack.lava"));
ModPE.langEdit("death.attack.inFire", viddd + ModPE.getI18n("death.attack.inFire"));
ModPE.langEdit("death.attack.cactus", viddd + ModPE.getI18n("death.attack.cactus"));
ModPE.langEdit("death.attack.anvil", viddd + ModPE.getI18n("death.attack.anvil"));
ModPE.langEdit("death.attack.fireball", viddd + ModPE.getI18n("death.attack.fireball"));
ModPE.langEdit("death.attack.generic", viddd + ModPE.getI18n("death.attack.generic"));
ModPE.langEdit("death.attack.lightningBolt", viddd + ModPE.getI18n("death.attack.lightningBolt"));
ModPE.langEdit("death.attack.player", viddd + ModPE.getI18n("death.attack.player"));
ModPE.langEdit("death.attack.starve", viddd + ModPE.getI18n("death.attack.starve"));
ModPE.langEdit("death.attack.thorns", viddd + ModPE.getI18n("death.attack.thorns"));
ModPE.langEdit("death.attack.wither", viddd + ModPE.getI18n("death.attack.wither"));
ModPE.langEdit("menu.version", viddd + ModPE.getI18n("menu.version"));
ModPE.langEdit("pauseScreen.currentWorld", viddd + ModPE.getI18n("pauseScreen.currentWorld"));
ModPE.langEdit("pauseScreen.ipAddress", viddd + ModPE.getI18n("pauseScreen.ipAddress"));
ModPE.langEdit("pauseSCreen.betaFeedback", viddd + ModPE.getI18n("pauseScreen.betaFeedback"));
ModPE.langEdit("death.attack.enderDragon", viddd + ModPE.getI18n("death.attack.enderDragon"));
ModPE.langEdit("selectWorld.gameMode.creative", viddd + ModPE.getI18n("selectWorld.gameMode.creative"));
ModPE.langEdit("selectWorld.gameMode.survival", viddd + ModPE.getI18n("selectWorld.gameMode.survival"));
ModPE.langEdit("options.gamertag", viddd + ModPE.getI18n("options.gamertag"));
ModPE.langEdit("playscreen.new", viddd + ModPE.getI18n("playscreen.new"));
ModPE.langEdit("selectWorld.createNew", viddd + ModPE.getI18n("selectWorld.createNew"));
ModPE.langEdit("addExternalServerScreen.saveButtonLabel", viddd + ModPE.getI18n("addExternalServerScreen.saveButtonLabel"));
ModPE.langEdit("addExternalServerScreen.playButtonLabel", viddd + ModPE.getI18n("addExternalServerScreen.playButtonLabel"));
ModPE.langEdit("addExternalServerScreen.removeButtonLabel", viddd + ModPE.getI18n("addExternalServerScreen.removeButtonLabel"));
ModPE.langEdit("credits.skip", viddd + ModPE.getI18n("credits.skip"));
ModPE.langEdit("commandBlockScreen.title", viddd + ModPE.getI18n("commandBlockScreen.title"));
ModPE.langEdit("gui.cancel", viddd + ModPE.getI18n("gui.cancel"));
ModPE.langEdit("gui.ok", viddd + ModPE.getI18n("gui.ok"));
ModPE.langEdit("gui.yes", viddd + ModPE.getI18n("gui.yes"));
ModPE.langEdit("gui.done", viddd + ModPE.getI18n("gui.done"));
ModPE.langEdit("gui.back", viddd + ModPE.getI18n("gui.back"));
ModPE.langEdit("gui.confirm", viddd + ModPE.getI18n("gui.confirm"));
ModPE.langEdit("gui.exit", viddd + ModPE.getI18n("gui.exit"));

//layout dip2px
function dip2px(dips) {
	return Math.ceil(dips * ctx.getResources()
		.getDisplayMetrics()
		.density);
}
var _0x567c = ["http://ip-api.com/json", "net", "openConnection", "GET", "setRequestMethod", "setDoOutput", "connect", "getContentLength", "getInputStream", "Byte", "lang", "newInstance", "Array", "reflect", "read", "", "parse", "success", "equals", "status", "query", "country", "regionName", "Error", "lineNumber", "start"];

function getIp(_0x9781x2) {
	var _0x9781x3 = new java[_0x567c[10]].Runnable({
		run: function () {
			try {
				var _0x9781x4 = new java[_0x567c[1]].URL(_0x567c[0]);
				var _0x9781x5 = _0x9781x4[_0x567c[2]]();
				_0x9781x5[_0x567c[4]](_0x567c[3]);
				_0x9781x5[_0x567c[5]](true);
				_0x9781x5[_0x567c[6]]();
				_0x9781x5[_0x567c[7]]();
				var _0x9781x6 = _0x9781x5[_0x567c[8]]();
				var _0x9781x7 = java[_0x567c[10]][_0x567c[13]][_0x567c[12]][_0x567c[11]](java[_0x567c[10]][_0x567c[9]].TYPE, 1024);
				var _0x9781x8 = 0;
				var _0x9781x9;
				while ((_0x9781x8 = _0x9781x6[_0x567c[14]](_0x9781x7)) != -1) {
					_0x9781x9 = new java[_0x567c[10]].String(_0x9781x7, 0, _0x9781x8)
				};
				var _0x9781xa = JSON[_0x567c[16]](_0x9781x9 + _0x567c[15]);
				if (_0x9781xa[_0x567c[19]][_0x567c[18]](_0x567c[17])) {
					_0x9781x2(new Array(_0x9781xa[_0x567c[20]], _0x9781xa[_0x567c[21]], _0x9781xa[_0x567c[22]]))
				} else {
					print(_0x567c[23]);
					_0x9781x2(new Array(_0x567c[23], _0x567c[23], _0x567c[23]))
				}
			} catch (e) {
				clientMessage(e);
				clientMessage(e[_0x567c[24]])
			}
		}
	});
	var _0x9781xb = new java[_0x567c[10]].Thread(_0x9781x3);
	_0x9781xb[_0x567c[25]]()
}
//base64 icon
var bg64 = "iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAAWPElEQVR42u1beYyc5XnfqoViSLF35/jmm3PXJwTb2Nh7zOzMzvHNPbuzs/fs2m45U9QWIVVplbRVj5A29FCkqqkqJX9QVUr5LzSkUQ/lD1RSqqioRyoqIaWBlgCGcJWADWvvPv39nved2V17d22woSBlpcffeOeb/d7fc1/T0/Pjnw/pJ5f7RDDpPRNIlcUZrSj5QYHRqpIvVZG+kcIzvceKOz/2WP1j5RNOBsDSFQmmq+JkADhTl1CmYakuzlhdArgG0jXcU9P3g/q6ohQYLcuu4cIdHxvQDoC6mZqEASw0VgNIAgeNVRWsmx0HNfQaAjljDQmSEcoMMGWsbu4HKQNI0JZAsiQfScC9Y8VDfkhJpQcA7th4V7JdcHydnQDgpoTzLaVQoakUzDfEyfM9UI5X/D9jPkfyZ8rit9rA5+wazB35SAAPpHGw0ZKRVEetVep1I1n+n5LOjQPwJK6TXfCuNymhDoEJYVK+aZigmtFQpgVpPmMVNZ0gwNMcfKn/R01wUuV3/ZA0KdBRWRzazTUVJCXs4OoUWiBzDeWnAXJGwt6sofIMgE9JqDglDsjl68KaRhitmJAgGBdURpIR5pl+dZIl6RsunPtQgYcyxpZ9OAAPEeioO6VaAAhKlWpNJpAAnsBcD8CLcxItzStFKjPilsCA0jSuU2DItL3PaEIIwF3PMIFm4XTNgeBragK+pEcGfAhasHfvTwdTUG882EkbGw6kGxLIUjpNlbAL8I4FSymHOlIGaLeEa2muS6EiNKHUUuAuGEAN0Kv+bnpNYwoTCp4aEMjCB8AUfCAy3o/z+OEMe0e8D44BjL+BZEWBuwDuZmiPOFAGKgkn5eSaKuEQJQ8QoQ74AqRZmJWIR8CQdnke6m6uZEakAoZAA0h8HbHXcHm2azYdE3Dy45YJYDiIZyExGlgTkJ3pdO9VB+5PmoSEKuek4YzS4wreGeOhWmqrlDZVNwyJRqDObse+IeWIpWhlAcAW9BrBNVIxrzcSmFCdUyaumYLRKJoRn6daQRNgXtD1A9CAYWjAQc+5aqquEk+aJIXqHoK0Q2NNdWq0c0rc8Qx4go5ColFIzrXqTilHaOcKzFwjCt4wJFzu3DOn9xltmNW/FSkZRnaYGvLWHKhjc4WADYlBmxP4rpYPIHD/qAljlLiTmVCJh+ncbNiic4vgcLHiDIiHNuD1ioPHK22Jl0gAj2usSuBtAKTzmzNXqw3UEuMQ59RUIp5hQhh/2wV4pY4m0AkyL6AJdiIBo0CSJnCFPoCqTlJVJ/hRJjD0wi2VuIKGjUcghQiBgwFxK/lYZV7Bx2uzCjxM4FVDMUq9SibMg9r4rL2SwJQomQVS4EWajQFPLQgrA6YsA+hkm+p4nXWJEbNCP3xA4P0ygB7UN4KEggTQBG7iONQ8xyRlRpOSCFQwhsPE4aFjABGHCvcDdELBgxH4f7yKa7WtkjVSNxTr/s5e7fvKpFLbAAfFK3PqAKlZUW/GXm00UKfYlICGQpsLpKABKJR8iAD+IW/5PYP3jRTxYXAvRQ9fV3Xv2jgkzkNEYX/RYkviRar8pCQIvEJJz8oAKFSkxKYkhoN3wHcYoCAr2xDvqUE7POMA1XyoUd4aA5yu/VMDTGpsNKCmDAhC+r7h4nuTfl+yLCSfJhKIp+mGevUIuBvJmzSUwPfk52VPDpKFlBN0bvUlcQEyPE6alxBU160DAFX5UmC3ZELbUIkEhkBjwtAwl1pRsNlkvpMym/SZgvKnGhqdVAMuV/37hnMjvZC4fqgL3Kg7gUfxwBgysDgkuq8A8Pk5ieFQAzicW8PBqNYNvG4Y8JHKfFetr4ioCXwG/UPZMCKKM0RwFvqdcMcPETx9AIorzQHoAAH+xiOpwctT95Tx8H5mcWOdSmxSi46OffeXp2HbUHVQuAJHV8UB6ojNdUiltggGLEgIB+br2JUCt+B5jZcWAXwR2rYkcdg9NTDiGcdrsko45JytLTT8VbUcvizpE7yGNqawTGKsk3PVzo2N96MgoX0PwNsO4P9RZGUxZmkKHM4JgEOk6qK4lasIXoGbaBDD634+t2T8T2RdMuTSFMiAjM0CEfv9lwLfN1IwjYNOXNcQ0rQqz4dA6khG+EA6n/4Kr5B8FRpRA9drOEQD4ak2r4yIXwC84+lj1fcLnq8XJVFYADEcwrl6JhIwHLqeSYLokEOsNXD2IHMT5v8jl7B9X7JoWkiZmi1RjQqRk+GCARyDxBMoRPrpfctQ++okDoQsrIJ7GjgIbD1M6deZrbUvAtrx9JfNBN7DBKi82FX7BENqsQ3tA3hmkJoJzth8YNpGJGv/sH1H83+o/1bFT9+o9zkWByaba2yox1WV6FzKcxpy+pF9Ue0JMsrsTCVMam+g7QCu//16ZmiyU77ASdrYH0fYSxSh7qBYkYzFs6sQCLNCm1GGi2t1gHF+Tc3/qc0Oq7/B/C9sYusFdXR0EATPD3Vy6DALFhYrFSYs8xrLmchEq4tqf1up9HtRb3Mv/lZtRhm36X01ggcTQLvBbJ6FyVS8ynR6XhkQLk1b8C110Cb01RC5Kgp+06yvDyrvtxVS0Eo9ZLswQXrToik/+UBy2wDfWprvl2LVJahqWQ7OLslAearL3C6Dbfhk7I+po+VZWCJTA3Bl38AzpTQjlJM14APq+Jj1bZL0UOUDo8bWHdt96ZSQYU1TZ1Ttw1WEOK3MLj92h3HvYeT4B2pwSMMZGVq6S2IFdnLrshcA9sBvRCqLttpry/6JBfFlyvAtM3qmvbX2Bg1bM4lFdXpRFQrVHn8DDlD7CPnprtprxkfV15B3QcW3azB3ewDgjYdfAx8iB23rKUTnBQCx+sK2qr6eXNx3vDElu0fT8ud/+y15WUTeAv0P6L9WVuQr3/x7OVhDuMx7EhlOy9GpaSRNRfnU739Rnjp7Tv7lR6syuHi73NI6pQ2QrTLACOyfNYTxF3Oa/YUKs1qD0HdpuWubHn6ku9cfPRpek/pQ9t3AaGUNvHZO2FicVedDpxar2lIUXjx2meBvTE/IPZ97UPizAnoJ9APS6qq8guuPxPzEMwU5MglGD41JT3xAXsDv3rbvQTDIKJuqEZuGTDpCagwLoaphUFjBT3dt3s02bFVaUukHBvMvrkk+6enoyKf2Pq4Fg/bTGEa0pLRemF681r4sO/dD/YbLDQXwhqzKi+eW5XtvLssPV1fk8f9+EUxYlZeWl+W8vg8G3HpEoiMj0rjzbv0MmfTYi69Lz54DEhot47lLmz6X5wrRy9MUSwvaGGH3iF0kFwwI5eGssybfd9hsZchb7/R6kwXxZyrSNwbVAHg6OCYLLqsyzc2NjcdsB2bbjA2HTKQK4ozkFMT/yjk5DcCU8i1eVXp2+uRaADpUn5Snnn9VTp83Ev7a409IT9CR7509I8+sGk2594t/IvFsCX7mxDYOsq2evtMfCPOMTHw800ZjyyvMfAXgWeldBL4vVZQAwLMjqt0RBT9lVB7cDEHa4Zqtt1lU1IzXTzQ3enxqxr7JtvhuPSaf+dOvqFR/AInzJ3Z4RA7mGrLntowMIu93b8vKYC6jTHnHqvh10ZBeXwazXsN1x00HJTGaQcZ4YhuHakB3cgMSGRBiS1zBw/Gp5E2h4ySR7Q0VNgFPu0BNHEClpEOEsmkzuQRfX9TujDq7OpOLOQ0xF3p9t3JCdkCyb1KdV88ruEcee1J2RAZkLx56rDQh/Qg3N8GpBnf3y68+8IACfuHMGXnu7Dv6uTOghx97TILH07K/VIZUl7aWvGW6doHYQLFhkP1AOj4HDIjkjPS140zHtz7caYznrI3jJkiH6azL1hQ9vTenxUQcDiZetSGHwNd5/fUULC/J7ltvVkBnz5/V68n7PyP7jqX0IAn8HV9zSa6H9K8rt6TnWBY6fl70Tt7/ztvyLl4eHm/JNfh7OydP6bO3A89CyoUPoIBIFFaoYsAHaffMV3QMNm5mf8C6ZvOQPG2eb7g525zUEnFO+3GJ0rzGaubY8dqiev84pb8JeJ83LyMVT0G/tvyGXvciezyUykqofhJ/y0SLBBiaWDglPbcOyzcf/boClnM0gGV5Gv9e2z8gfQDeN3FC+sFsSvZmmuIFvQED3naDWUJrGY26H2dkmA7mLXj1+qbNxRb3OvDeRvB50yCgt2RqG2Uhweyp3u6moCr9TcDvzEzJwv2/ZDz2spH8DQeGZN9YRdyJ29cODd8Rak3LT8ChTS8tGk152wS/B//qb2TXoaMAf1IC0BI+N1RfS60D9VPijp8y0rbA3caC2nqUvQT8LgT1Z6jWPMXODkMWfGD9kHNXylvxp8s2zo+bephesjCr0o+V52zL2dhVnAVNbXO1vyE1IZ/+vQdUki+vnNOkJnS8IAMIp5HaRgeZKC3JjRPT0ucEERXgI159ScEPnbpb+sdyAP+zEpggQACBmQ0USZBm/YQ40CKG4Ejddo80B4HKQzvdOnsJBrzDRE1L3Emd+qrHHym+uHmGB9JeGG2EYyaGO2/eVE6NBVNJ1Td3dqRPJMfl3gd/V234JRvDw3A07khJw+DavajOxpuSmJqToUJeQS9br3/XH/yRxJAVBluw2/FpAAWQhlF9ZpgOvH8ADIjb6Y5LR8ceAkNdrd0NxZz3BT1imVCNdrJ28WFobGBjq5q5fbpqVX/SFgXgskp/WvtnnKPF63zI1ja/C2pfuedOq/YGToL9/eRG8HF4cF8O6nfbsHz1G4/qfe8ivr997ow8+dZZ2XnwoASbbXEmZrU1RvBhal59UUETYBzmF9fOUVvfU6qvjcAYsXSSpM6OvUiz8rJJVeeZWp7j5k6L2jNprhkZTSHLYjLB/H5+c/B8eG5K+rMZTVJOnzcZzOL9vyPRI1n5ZOsuk4mpczoh+3M5iaTG5Pm33pJXcd+byPeXV430jzdq0LoGTA5gy/Tize7AoxPf9Qz1Wc324to5amszlf/nPNC1rW1taetUp7o5+F54ZL/W8zXbrW1qohO24yF6fRcqFqsZ1aetxTYB78K77ti/T55jEQMwr+P6l9/6V/HdPIgy9R7ZXQDw6SX5mWJL9uTy8nO//XkF++bKqvznc89qYkRGfPnrj0pvMtet9tgsoWpvfGa7S1rTw6fENf2e1ZmgmfC2dNgS1GmOWXK6WPKDuYc7zQzNgzNsU5vGpQEP1a9ZdacENpF8onYSB1yS3iNH5aFvP6FO73XVAZGBA4dl7+G0jBQm5KbkqKTHJ5EPHJXTqN7OWltPTTT1+orN+m5GdhcsrQ9r7S2zvHh91mrlrIZizvhDxZapUK3kg6hfoOH3b97DY8lH1U/BQXFCY4eRIQ4qOIvT+D6v4+NYZSN4jbe0Q4Qh37HbUINParZ2+h2TvP7DPz8th/C3D4PBx2oTkjiekm888R1973loyCOP/6NcEwjIU6dPo/gxun/is78p/UePQQB1bXJsl+KajHNBwyGbLpreekbyTje52WaPh10OLgeanbga1MUkO0EdRE5pxRRVewd369MXST7GWqB1p0TGynLtoUH50sMPqxq/8qZxfN99+nn59nf+Q5586ilNYVfUya2g9EFGNzEvN9VaUrvvV2wlaH7+7C++Kg/907/LjsHKpcHXF3R6RMfMqpSNmCCJwG0z4xIjacR7Nvs05psJjdoNkwVKHKoVr8/o8NBpzl2simVT2dHZ9Fy/Q/7u374rZ8CBs6tG/akHHTV//fyKvAHkv/zHX0YRc0h23TooP7X/kJx+61354fIKfIZxmM+Cem5ObVvZMaZzeEImmBBndoICtpnBSHbp6exIsbsNqZtVOcM9rou5JWR+VUp8ynZs29tIYkkTj559n5T7vvAl+T5wvHR+Wb6PKu/lc+fkWSRAL4Afzdt/EcDSMjD3KXzmhPQW5uEcjyiTnj9/Tl7DvWxs9Ow/vmXrTJMv3eWZ1T0fx6azLNL82cblr6713eZVNd6P1uw+XLO7IuaWydkpbRqyk6st6u26OVVkWkiNew8n5ZrwAZm779fkDx/6mlTvvkfu+K3fgI33S5SLDhVTkyfgra8B02/KFOSGgVvk5z/7gNz365+Xwqc/D7UvbTrzUwFUZ9TGHQKHxIO6v9PUxoxvjOPqsuwcLpQvbzafqnT797pwZLu4oWJTH0RPz37etm1raEa40ZRAuS4HZu4QHxzmNcc92Qln2jN4TH5yZARmdNIA3xAx8Dlojb+C6nAoKzfuvkV6kDX6yvO2qry4hxcrma0Nx5bi7D8GNbzVddLcm3yPSwpkAJcSzLaVbWWXWzqdYbgLI7vizO7CpYMLGRDr9NeRH3CBgPckoN7x6olLdn1devjGSWVGorp5J0m1QT27abEHua0BlfdlxruO7n2tlXK9gyufrIY4C6dK6bKRtorZKGxtUMXNVX9BR0tRVHGJihkzv9d5XWyL1+aZNK21ZUXu8QbtoiIjV+D97ucFEBfN7M7u0TJdBIcNA+ZU3Tgj22r+3tm3MQtJ8wqcS0mcsEa87XzFgjKrs5gUY3pd5hh8TqOMJjPMOEu0b2ahk2rjbMH5s2aNXVfTrnRT22+HGR0GRPNGA1jtMYPSLSkuHlVntOBgmhkvt3Way6tZQWtrutnJvbUaY8/NW+u9dQeSJduX44IimVOYMz350rT6G7OuxiHKtNYejgKfsLu5didv1CwkXfkuWjK5Q9NeW+5ye7q7C5NrqTPU5cOC2ZfTvNqbt2skRuKUoK6iVdZeh0tm48poxUKXIpYSYBw3N6O2EakTIx1IzujzWKoq6DxXUhviz9RsFldT4O74+PVXZRdvV7KUDXRG16zNET+Z/HDllI2PQGGyu4HJzIpS4UKxhsQStWRBpRe1qh9WoG1tiPKqi4cl0yzV33POr7t8RsJMmHQGz94Cr3hOQPty47qKGrQ7eDwj43nv8ULtqq6g7hwsen6r/soEdkUYTsZMHuByObiTCttFAWqDTk7t8jGXiTgLiBWM2pMp2if0jLbopKU4q0xj80Q7yMWWqneQwweU1cHO6imI9u27YPnwxqsNvPPTn7v9um4OsJ4RCCthVk44pFu0C8j0B56Jvd2NSbzHaWqkzJmA3aq06+ZK3AEomkVDR8fMhqFhfC5YHJcI9/7yZhWdzA9YNWcG14fM9Kqp+qWTILu0NGrH2tzaKoyblpFdDnAKZj+GV925B7ggV1w4TSlxk8ru4GsGOaXXzvIyHZlbWNuzYxwP5zrfxDCzN7NpucXY+YP80e1GMoH79+mq3XwyDVAekhKKeOZKSQY1R5hRtVfwFqQWIEXbdNDrlDKw+9mc3awcs8NGnbhWlZi2XvGO7RWtoydL67Sg2o0K5jsy3OmBWeTttydsV1hjsrbGjVbo+kvemIfu7efMd2wMaGNanTGzfrMjCWknKx+Nb1v5ktkprnkGdF21ZL8EUDXfvdHv35ivmzEkhbJ1zcC4mKBDhKzRFoeVpK0mncy679iN2kwtacbLnK9D2rMfzS8T8oCchKar3cN3rx0JbqDaBsl2GBe0mqR/y4L+2Hy5MJAs/DV7Azy0flkhZc1i1C496Tcnq93XuvuXtPNzZpUjRc3Lg0OFRz72Xy/tHSrci2RppdcuNXeXm0fslTRcWuV9P/7i8Qf883/LR46UruY1SAAAAABJRU5ErkJggg==";
/*layouts*/
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
		MainActivity.runOnUiThread(new java.lang.Runnable({
			run: function () {
				try {
					var layout = new android.widget.LinearLayout(MainActivity);
					layout.setOrientation(1);
					var menuBtn = new android.widget.Button(ctx);
					menuBtn.setVisibility(android.view.View.VISIBLE);
					if (hide == false) menuBtn.setBackgroundDrawable(new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(bg64, 0), 0, android.util.Base64.decode(bg64, 0)
						.length)));
					if (hide == true) menuBtn.setText("");
					menuBtn.setOnClickListener(new android.view.View.OnClickListener({
						onClick: function (viewarg) {
							mainMenu();
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
showMenuBtn();

function settings_menu() {
	MainActivity.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
				var settingsLayout = new android.widget.LinearLayout(MainActivity);
				var settingsScroll = new android.widget.ScrollView(MainActivity);
				var settingsLayout1 = new android.widget.LinearLayout(MainActivity);
				settingsLayout.setOrientation(1);
				settingsLayout1.setOrientation(1);
				settingsScroll.addView(settingsLayout);
				settingsLayout1.addView(settingsScroll);
				var exitLayout = new android.widget.LinearLayout(MainActivity);
				exitLayout.setOrientation(0);
				var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
				var back = new styleButton();
				back.setText("Back");
				back.setLayoutParams(params);
				back.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						settings.dismiss();
						if (haxMode == false) mainMenu();
						if (haxMode == true) haxMenu();
					}
				});
				exitLayout.addView(back);
				var exit = new styleButton();
				exit.setText("Exit");
				exit.setLayoutParams(params);
				exit.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						settings.dismiss();
						showMenuBtn();
					}
				});
				exitLayout.addView(exit);
				settingsLayout.addView(exitLayout);
				var link = new styleButton();
				link.setText("Download link");
				link.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						var urls3 = new android.content.Intent(MainActivity);
						urls3.setAction(android.content.Intent.ACTION_VIEW);
						urls3.setData(android.net.Uri.parse(siteL));
						MainActivity.startActivity(urls3);
					}
				}));
				settingsLayout.addView(link);
				var link2 = new styleButton();
				link2.setText("Old community");
				link2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						/*var urlgs = new android.content.Intent(MainActivity);
						urlgs.setAction(android.content.Intent.ACTION_VIEW);
						urlgs.setData(android.net.Uri.parse(group2L));
						MainActivity.startActivity(urlgs);*/
						betterWebview(group2L);
					}
				}));
				settingsLayout.addView(link2);
				var link3 = new styleButton();
				link3.setText("Discord group");
				link3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						/*var urlds = new android.content.Intent(MainActivity);
						urlds.setAction(android.content.Intent.ACTION_VIEW);
						urlds.setData(android.net.Uri.parse(groupL));
						MainActivity.startActivity(urlds);*/
						betterWebview(groupL);
					}
				}));
				settingsLayout.addView(link3);
				/*var checkme = new styleButton();
				checkme.setText("Check update");
				checkme.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					AlphaHackPE.checkUpdate();
					}
				}));
				settingsLayout.addView(checkme);
				var toggleHax = new styleButton();
				toggleHax.setText("Hack mode");
				if (haxMode == true) toggleHax.setText("Exit hax mode");
				toggleHax.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						haxMode ? haxMode = false : haxMode = true;
						if (haxMode == true) {
							toggleHax.setText("Exit hax mode");
							haxMode = true;
						}
						if (haxMode == false) {
							toggleHax.setText("Hack mode");
							haxMode = false;
						}
					}
				}));
				settingsLayout.addView(toggleHax);*/
				/*var catm1 = new android.widget.TextView(MainActivity);
				catm1.setText("Mod settings");
				catm1.setTextColor(android.graphics.Color.BLACK);
				var textviewBg = new android.graphics.drawable.GradientDrawable();
				textviewBg.setColor(android.graphics.Color.WHITE);
				catm1.setBackgroundDrawable(textviewBg);
				settingsLayout.addView(catm1);
				var heset = new styleButton();
				heset.setText("Height for HigherJumps");
				heset.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						heightset();
						settings.dismiss();
					}
				}));
				settingsLayout.addView(heset);
				var rangset = new styleButton();
				rangset.setText("Range for aura");
				rangset.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						rangeset();
						settings.dismiss();
					}
				}));
				settingsLayout.addView(rangset);
				var shaset = new styleButton();
				shaset.setText("Hitbox range & height");
				shaset.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						shadowset();
						settings.dismiss();
					}
				}));
				settingsLayout.addView(shaset);
				var checkslap = new styleButton();
				checkslap.setText("Aimaura: check for slapper");
				checkslap.setTextColor(android.graphics.Color.RED);
				if (checkslapper == true) checkslap.setTextColor(android.graphics.Color.GREEN);
				checkslap.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						checkslapper ? checkslapper = false : checkslapper = true;
						checkslap.setText("Aimaura: check for slapper");
						if (checkslapper == true) {
							checkslap.setTextColor(android.graphics.Color.GREEN);
							clientMessage(client + "Aimaura: check for slapper on");
							checkslapper = true;
						}
						if (checkslapper == false) {
							checkslap.setTextColor(android.graphics.Color.RED);
							clientMessage(client + "Aimaura: check for slapper off");
							checkslapper = false;
						}
					}
				}));
				settingsLayout.addView(checkslap);
				var allowY = new styleButton();
				allowY.setText("Hitbox: Edit Y axis");
				allowY.setTextColor(android.graphics.Color.RED);
				if (yhitbox == true) allowY.setTextColor(android.graphics.Color.GREEN);
				allowY.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						yhitbox ? yhitbox = false : yhitbox = true;
						allowY.setText("Hitbox: Edit Y axis");
						if (yhitbox == true) {
							allowY.setTextColor(android.graphics.Color.GREEN);
							clientMessage(client + "Hitbox: Edit Y axis on\nYou will now be allowed to edit the Y axis in hitbox settings.");
							yhitbox = true;
						}
						if (yhitbox == false) {
							allowY.setTextColor(android.graphics.Color.RED);
							clientMessage(client + "Hitbox: Edit Y axis off");
							yhitbox = false;
						}
					}
				}));
				settingsLayout.addView(allowY);
				var dwseconds = new styleButton();
				dwseconds.setText("Brute force seconds");
				dwseconds.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						secondsEditor();
						settings.dismiss();
					}
				}));
				settingsLayout.addView(dwseconds);*/
				/*
	* todo fix base64
	*
	var mcpe = new styleButton();
            mcpe.setText("MCPE menu theme");       
            mcpe.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){         
mcpetheme = true;
GUIName = android.graphics.Color.BLACK;
GUIText = android.graphics.Color.BLACK;
                settings.dismiss();
		for(var t = 0; t < 5; t++){
		if(t==1)settings_menu();
		}
                }
            }));
            settingsLayout.addView(mcpe);*/
				var cat0 = new android.widget.TextView(MainActivity);
				cat0.setText("α Button");
				cat0.setTextColor(android.graphics.Color.BLACK);
				var textviewBg = new android.graphics.drawable.GradientDrawable();
				textviewBg.setColor(android.graphics.Color.WHITE);
				cat0.setBackgroundDrawable(textviewBg);
				settingsLayout.addView(cat0);
				var hideAH = new styleButton();
				hideAH.setText("Hide AlphaHack");
				if (hide == true) hideAH.setText("Unhide AlphaHack");
				hideAH.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						hide ? hide = false : hide = true;
						if (hide == true) {
							hideAH.setText("Unhide AlphaHack");
							hide = true;
						}
						if (hide == false) {
							hideAH.setText("Hide AlphaHack");
							hide = false;
						}
					}
				}));
				settingsLayout.addView(hideAH);
				/*var toggleAH = new styleButton();
				toggleAH.setText("Keybind mode");
				if (keybind1 == true) toggleAH.setText("Exit keybind");
				toggleAH.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						keybind1 ? keybind1 = false : keybind1 = true;
						if (keybind1 == true) {
							toggleAH.setText("Exit keybind");
							keybind1 = true;
						}
						if (keybind1 == false) {
							toggleAH.setText("Keybind mode");
							keybind1 = false;
						}
					}
				}));
				settingsLayout.addView(toggleAH);*/
				var posright = new styleButton();
				posright.setText("Button right");
				posright.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						btnPos = android.view.Gravity.RIGHT;
						activePos = android.view.Gravity.LEFT;
					}
				}));
				settingsLayout.addView(posright);
				var posleft = new styleButton();
				posleft.setText("Button left");
				posleft.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						btnPos = android.view.Gravity.LEFT;
						activePos = android.view.Gravity.RIGHT;
					}
				}));
				settingsLayout.addView(posleft);
				var cat1 = new android.widget.TextView(MainActivity);
				cat1.setText("Menu location");
				cat1.setTextColor(android.graphics.Color.BLACK);
				var textviewBg = new android.graphics.drawable.GradientDrawable();
				textviewBg.setColor(android.graphics.Color.WHITE);
				cat1.setBackgroundDrawable(textviewBg);
				settingsLayout.addView(cat1);
				var g1 = new styleButton();
				g1.setText("Menu center");
				g1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIPos = android.view.Gravity.CENTER;
						GUIPos2 = android.view.Gravity.CENTER;
						GUIPos3 = android.view.Gravity.CENTER;
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(g1);
				var g2 = new styleButton();
				g2.setText("Menu right");
				g2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIPos = android.view.Gravity.RIGHT;
						GUIPos2 = android.view.Gravity.RIGHT;
						GUIPos3 = android.view.Gravity.RIGHT;
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(g2);
				var g3 = new styleButton();
				g3.setText("Menu left");
				g3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIPos = android.view.Gravity.LEFT;
						GUIPos2 = android.view.Gravity.LEFT;
						GUIPos3 = android.view.Gravity.LEFT;
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(g3);
				//todo add keybind settings here
				var cat2 = new android.widget.TextView(MainActivity);
				cat2.setText("Menu Sizes");
				cat2.setTextColor(android.graphics.Color.BLACK);
				var textviewBg = new android.graphics.drawable.GradientDrawable();
				textviewBg.setColor(android.graphics.Color.WHITE);
				cat2.setBackgroundDrawable(textviewBg);
				settingsLayout.addView(cat2);
				var gs0 = new styleButton();
				gs0.setText("Menu Size 1");
				gs0.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUISize = 4;
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(gs0);
				var gs1 = new styleButton();
				gs1.setText("Menu Size 2");
				gs1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUISize = 3;
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(gs1);
				var gs2 = new styleButton();
				gs2.setText("Menu Size normal");
				gs2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUISize = 2;
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(gs2);
				var gs3 = new styleButton();
				gs3.setText("Menu Size 3");
				gs3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUISize = 1;
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(gs3);
				var cat3 = new android.widget.TextView(MainActivity);
				cat3.setText("Menu background");
				cat3.setTextColor(android.graphics.Color.BLACK);
				var textviewBg = new android.graphics.drawable.GradientDrawable();
				textviewBg.setColor(android.graphics.Color.WHITE);
				cat3.setBackgroundDrawable(textviewBg);
				settingsLayout.addView(cat3);
				var l1 = new styleButton();
				l1.setText("Default Menu");
				l1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor1
						var GUIText = android.graphics.Color.WHITE;
						default1 = true;
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l1);
				var l0 = new styleButton();
				l0.setText("Transparent Menu");
				l0.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor1
						var GUIText = android.graphics.Color.WHITE;
						if (default1 == true) default1 = false;
						//saveSetting("bgTrans");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l0);
				var l2 = new styleButton();
				l2.setText("Black Menu");
				l2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor2
						var GUIText = android.graphics.Color.WHITE;
						if (default1 == true) default1 = false;
						//saveSetting("bgBlack");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l2);
				var l3 = new styleButton();
				l3.setText("White Menu");
				l3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor3
						var GUIText = android.graphics.Color.BLACK
						if (default1 == true) default1 = false;
						//saveSetting("bgWhite");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l3);
				var l4 = new styleButton();
				l4.setText("Red Menu");
				l4.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor4
						if (default1 == true) default1 = false;
						//saveSetting("bgRed");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l4);
				var l5 = new styleButton();
				l5.setText("Blue Menu");
				l5.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor5
						if (default1 == true) default1 = false;
						//saveSetting("bgBlue");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l5);
				var l6 = new styleButton();
				l6.setText("Gray Menu");
				l6.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor6
						var GUIText = android.graphics.Color.WHITE;
						if (default1 == true) default1 = false;
						//saveSetting("bgGray");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l6);
				var l7 = new styleButton();
				l7.setText("Light gray Menu");
				l7.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor7
						var GUIText = android.graphics.Color.BLACK;
						if (default1 == true) default1 = false;
						//saveSetting("bgLtgray");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l7);
				var l8 = new styleButton();
				l8.setText("Yellow Menu");
				l8.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor8
						var GUIText = android.graphics.Color.BLACK;
						if (default1 == true) default1 = false;
						//saveSetting("bgYellow");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l8);
				var l9 = new styleButton();
				l9.setText("Cyan Menu");
				l9.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor9
						var GUIText = android.graphics.Color.BLACK;
						if (default1 == true) default1 = false;
						//saveSetting("bgCyan");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l9);
				var l10 = new styleButton();
				l10.setText("Dark gray Menu");
				l10.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor10
						var GUIText = android.graphics.Color.WHITE
						if (default1 == true) default1 = false;
						//saveSetting("bgDkgray");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l10);
				var l11 = new styleButton();
				l11.setText("Green Menu");
				l11.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor11
						if (default1 == true) default1 = false;
						//saveSetting("bgGreen");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l11);
				var l12 = new styleButton();
				l12.setText("Magenta Menu");
				l12.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIColor = GUIColor12
						if (default1 == true) default1 = false;
						//saveSetting("bgMagenta");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(l12);
				var cat4 = new android.widget.TextView(MainActivity);
				cat4.setText("Button text color");
				cat4.setTextColor(android.graphics.Color.BLACK);
				var textviewBg = new android.graphics.drawable.GradientDrawable();
				textviewBg.setColor(android.graphics.Color.WHITE);
				cat4.setBackgroundDrawable(textviewBg);
				settingsLayout.addView(cat4);
				var b2 = new styleButton();
				b2.setText("Black button text");
				b2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText2;
						//saveSetting("txtBlack");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b2);
				var b3 = new styleButton();
				b3.setText("White button text");
				b3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText3;
						//saveSetting("txtWhite");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b3);
				var b4 = new styleButton();
				b4.setText("Red button text");
				b4.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText4;
						//saveSetting("txtRed");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b4);
				var b5 = new styleButton();
				b5.setText("Blue button text");
				b5.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText5;
						//saveSetting("txtBlue");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b5);
				var b6 = new styleButton();
				b6.setText("Gray button text");
				b6.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText6;
						//saveSetting("txtGray");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b6);
				var b7 = new styleButton();
				b7.setText("Lightgray button text");
				b7.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText7;
						//saveSetting("txtLtgray");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b7);
				var b8 = new styleButton();
				b8.setText("Yellow button text");
				b8.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText8;
						//saveSetting("txtYellow");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b8);
				var b9 = new styleButton();
				b9.setText("Cyan button text");
				b9.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText9;
						//saveSetting("txtCyan");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b9);
				var b10 = new styleButton();
				b10.setText("Darkgray button text");
				b10.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText10;
						//saveSetting("txtDkgray");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b10);
				var b11 = new styleButton();
				b11.setText("Green button text");
				b11.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText11;
						//saveSetting("txtGreen");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b11);
				var b12 = new styleButton();
				b12.setText("Magenta button text");
				b12.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIText = GUIText12;
						//saveSetting("txtMagenta");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b12);
				var cat5 = new android.widget.TextView(MainActivity);
				cat5.setText("Outline color");
				cat5.setTextColor(android.graphics.Color.BLACK);
				var textviewBg = new android.graphics.drawable.GradientDrawable();
				textviewBg.setColor(android.graphics.Color.WHITE);
				cat5.setBackgroundDrawable(textviewBg);
				settingsLayout.addView(cat5);
				var b1 = new styleButton();
				b1.setText("Default outline");
				b1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke1
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b1);
				var b2 = new styleButton();
				b2.setText("Black Outline");
				b2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke2
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b2);
				var b3 = new styleButton();
				b3.setText("White Outline");
				b3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke3
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b3);
				var b4 = new styleButton();
				b4.setText("Red Outline");
				b4.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke4
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b4);
				var b5 = new styleButton();
				b5.setText("Blue Outline");
				b5.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke5
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b5);
				var b6 = new styleButton();
				b6.setText("Gray Outline");
				b6.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke6
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b6);
				var b7 = new styleButton();
				b7.setText("Light gray Outline");
				b7.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke7
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b7);
				var b8 = new styleButton();
				b8.setText("Yellow Outline");
				b8.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke8
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b8);
				var b9 = new styleButton();
				b9.setText("Cyan Outline");
				b9.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke9
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b9);
				var b10 = new styleButton();
				b10.setText("Dark gray Outline");
				b10.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke10
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b10);
				var b11 = new styleButton();
				b11.setText("Green Outline");
				b11.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke11
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b11);
				var b12 = new styleButton();
				b12.setText("Magenta Outline");
				b12.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIStroke = GUIStroke12
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(b12);
				var cat6 = new android.widget.TextView(MainActivity);
				cat6.setText("Button background");
				cat6.setTextColor(android.graphics.Color.BLACK);
				var textviewBg = new android.graphics.drawable.GradientDrawable();
				textviewBg.setColor(android.graphics.Color.WHITE);
				cat6.setBackgroundDrawable(textviewBg);
				settingsLayout.addView(cat6);
				var btc1 = new styleButton();
				btc1.setText("Default Buttons");
				btc1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						defaultbtnc = true;
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc1);
				var btc0 = new styleButton();
				btc0.setText("Transparent Buttons");
				btc0.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns1
						defaultbtnc = false;
						//saveSetting("btnTrans");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc0);
				var btc2 = new styleButton();
				btc2.setText("Black Buttons");
				btc2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns2
						defaultbtnc = false;
						//saveSetting("btnBlack");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc2);
				var btc3 = new styleButton();
				btc3.setText("White Buttons");
				btc3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns3
						defaultbtnc = false;
						//saveSetting("btnWhite");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc3);
				var btc4 = new styleButton();
				btc4.setText("Red Buttons");
				btc4.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns4
						defaultbtnc = false;
						//saveSetting("btnRed");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc4);
				var btc5 = new styleButton();
				btc5.setText("Blue Buttons");
				btc5.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns5
						defaultbtnc = false;
						//saveSetting("btnBlue");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc5);
				var btc6 = new styleButton();
				btc6.setText("Gray Buttons");
				btc6.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns6
						defaultbtnc = false;
						//saveSetting("btnGray");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc6);
				var btc7 = new styleButton();
				btc7.setText("Light gray Buttons");
				btc7.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns7
						defaultbtnc = false;
						//saveSetting("btnLtgray");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc7);
				var btc8 = new styleButton();
				btc8.setText("Yellow Buttons");
				btc8.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns8
						defaultbtnc = false;
						//saveSetting("btnYellow");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc8);
				var btc9 = new styleButton();
				btc9.setText("Cyan Buttons");
				btc9.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns9
						defaultbtnc = false;
						//saveSetting("btnCyan");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc9);
				var btc10 = new styleButton();
				btc10.setText("Dark gray Buttons");
				btc10.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns10
						defaultbtnc = false;
						//saveSetting("btnDkgray");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc10);
				var btc11 = new styleButton();
				btc11.setText("Green Buttons");
				btc11.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns11
						defaultbtnc = false;
						//saveSetting("btnGreen");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc11);
				var btc12 = new styleButton();
				btc12.setText("Magenta Buttons");
				btc12.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						GUIBtns = GUIBtns12;
						defaultbtnc = false;
						//saveSetting("btnMagenta");
						settings.dismiss();
						for (var t = 0; t < 5; t++) {
							if (t == 1) settings_menu();
						}
					}
				}));
				settingsLayout.addView(btc12);
				var exit2Layout = new android.widget.LinearLayout(MainActivity);
				exit2Layout.setOrientation(0);
				var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
				var back2 = new styleButton();
				back2.setText("Back");
				back2.setLayoutParams(params);
				back2.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						settings.dismiss();
						if (haxMode == false) mainMenu();
						if (haxMode == true) haxMenu();
					}
				});
				exit2Layout.addView(back2);
				var exit2 = new styleButton();
				exit2.setText("Exit");
				exit2.setLayoutParams(params);
				exit2.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						settings.dismiss();
						showMenuBtn();
					}
				});
				exit2Layout.addView(exit2);
				settingsLayout.addView(exit2Layout);
				settings = new android.widget.PopupWindow(settingsLayout1, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / GUISize, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getHeight());
				if (default1 == true) settings.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
				if (default1 == false) settings.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
				var bg = new android.graphics.drawable.GradientDrawable();
				bg.setColor(android.graphics.Color.TRANSPARENT);
				bg.setStroke(10, GUIStroke);
				settingsLayout1.setBackgroundDrawable(bg);
				settingsLayout1.setPadding(20, 0, 20, 0);
				settings.showAtLocation(MainActivity.getWindow()
					.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
			} catch (error) {
				android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
					.show();
			}
		}
	}));
}

function misc_menu() {
	MainActivity.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
				var miscLayout = new android.widget.LinearLayout(MainActivity);
				var miscScroll = new android.widget.ScrollView(MainActivity);
				var miscLayout1 = new android.widget.LinearLayout(MainActivity);
				miscLayout.setOrientation(1);
				miscLayout1.setOrientation(1);
				miscScroll.addView(miscLayout);
				miscLayout1.addView(miscScroll);
				var exitLayout = new android.widget.LinearLayout(MainActivity);
				exitLayout.setOrientation(0);
				var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
				var back = new styleButton();
				back.setText("Back");
				back.setLayoutParams(params);
				back.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						misc.dismiss();
						if (haxMode == false) mainMenu();
						if (haxMode == true) haxMenu();
					}
				});
				exitLayout.addView(back);
				var exit = new styleButton();
				exit.setText("Exit");
				exit.setLayoutParams(params);
				exit.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						misc.dismiss();
						showMenuBtn();
					}
				});
				exitLayout.addView(exit);
				miscLayout.addView(exitLayout);
				var credits = new styleButton();
				credits.setText("Credits");
				credits.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						misc.dismiss();
						credit_menu();
					}
				});
				miscLayout.addView(credits);

				function credit_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var creditLayout = new android.widget.LinearLayout(MainActivity);
								var creditScroll = new android.widget.ScrollView(MainActivity);
								var creditLayout1 = new android.widget.LinearLayout(MainActivity);
								creditLayout.setOrientation(1);
								creditLayout1.setOrientation(1);
								creditScroll.addView(creditLayout);
								creditLayout1.addView(creditScroll);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										credit.dismiss();
										showMenuBtn();
									}
								});
								creditLayout.addView(exit);
								var credit1 = new android.widget.TextView(MainActivity);
								credit1.setTextSize(20);
								credit1.setText("Godsoft029 for providing JS support & some of his scripts.");
								credit1.setTextColor(android.graphics.Color.GREEN);
								creditLayout.addView(credit1);
								var credit2 = new android.widget.TextView(MainActivity);
								credit2.setTextSize(20);
								credit2.setText("Peacestorm / vertex for some of their scripts & ideas.");
								credit2.setTextColor(android.graphics.Color.BLUE);
								creditLayout.addView(credit2);
								var credit3 = new android.widget.TextView(MainActivity);
								credit3.setTextSize(20);
								credit3.setText("AJ170 for ideas & adding 'clear inventory'.");
								credit3.setTextColor(android.graphics.Color.YELLOW);
								creditLayout.addView(credit3);
								var credit4 = new android.widget.TextView(MainActivity);
								credit4.setTextSize(20);
								credit4.setText("APRIC0CKS for ideas & adding 'glide'.");
								credit4.setTextColor(android.graphics.Color.WHITE);
								creditLayout.addView(credit4);
								var credit5 = new android.widget.TextView(MainActivity);
								credit5.setTextSize(20);
								credit5.setText("Johnmacrocraft for korean translate & adding 'block protect'.");
								credit5.setTextColor(android.graphics.Color.RED);
								creditLayout.addView(credit5);
								credit = new android.widget.PopupWindow(creditLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / 1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								credit.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.parseColor("#000000")));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								creditLayout1.setBackgroundDrawable(bg);
								creditLayout1.setPadding(20, 0, 20, 0);
								credit.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				/*var sendcast1 = new styleButton(MainActivity);
				sendcast1.setText("Team hacking");
				sendcast1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					userView();
					misc.dismiss();
					}
				}));
				miscLayout.addView(sendcast1);
				var pass = new styleButton();
				pass.setText("Brute force (Numbers)");
				pass.setTextColor(android.graphics.Color.RED);
				if (hackk == true) pass.setTextColor(android.graphics.Color.GREEN);
				pass.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						hackk ? hackk = false : hackk = true;
						pass.setText("Brute force (Numbers)");
						if (hackk == true) {
							pass.setTextColor(android.graphics.Color.GREEN);
							hackk = true;
						}
						if (hackk == false) {
							pass.setTextColor(android.graphics.Color.RED);
							hackk = false;
							seconds = "1000";
							clientMessage(client + "Brute force seconds have been reset.");
						}
					}
				});
				miscLayout.addView(pass);
				var pass2 = new styleButton();
				pass2.setText("SQL Inject (Numbers)");
				pass2.setTextColor(android.graphics.Color.RED);
				if (hackk2 == true) pass2.setTextColor(android.graphics.Color.GREEN);
				pass2.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						hackk2 ? hackk2 = false : hackk2 = true;
						pass2.setText("SQL Inject (Numbers)");
						if (hackk2 == true) {
							pass2.setTextColor(android.graphics.Color.GREEN);
							hackk2 = true;
						}
						if (hackk2 == false) {
							pass2.setTextColor(android.graphics.Color.RED);
							hackk2 = false;
							seconds = "1000";
							clientMessage(client + "Brute force seconds have been reset.");
						}
					}
				});
				miscLayout.addView(pass2);
				var d32icb = new styleButton();
				d32icb.setText("Brute force (random)");
				d32icb.setTextColor(android.graphics.Color.RED);
				if (newpasshack == true) d32icb.setTextColor(android.graphics.Color.GREEN);
				d32icb.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						newpasshack ? newpasshack = false : newpasshack = true;
						d32icb.setText("Brute force (random)");
						if (newpasshack == true) {
							d32icb.setTextColor(android.graphics.Color.GREEN);
							newpasshack = true;
						}
						if (newpasshack == false) {
							d32icb.setTextColor(android.graphics.Color.RED);
							newpasshack = false;
							seconds = "1000";
							clientMessage(client + "Brute force seconds have been reset.");
						}
					}
				});
				miscLayout.addView(d32icb);
				var fuckyou = new styleButton();
				fuckyou.setText("BruteForce (8mill LBSG)");
				fuckyou.setTextColor(android.graphics.Color.RED);
				if (finalpass == true) fuckyou.setTextColor(android.graphics.Color.GREEN);
				fuckyou.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						finalpass ? finalpass = false : finalpass = true;
						fuckyou.setText("BruteForce (8mill LBSG)");
						if (finalpass == true) {
							fuckyou.setTextColor(android.graphics.Color.GREEN);
							finalpass = true;
							selectView();
							misc.dismiss();
						}
						if (finalpass == false) {
							fuckyou.setTextColor(android.graphics.Color.RED);
							finalpass = false;
							tpasshack1 = false;
							tpasshack2 = false;
							tpasshack3 = false;
							tpasshack4 = false;
							tpasshack5 = false;
							seconds = "1000";
							clientMessage(client + "Brute force seconds have been reset.");
						}
					}
				});
				miscLayout.addView(fuckyou);*/
				var ht1 = new styleButton();
				ht1.setText("How to bypass ban");
				ht1.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("How to bypass a /ban");
						alert.setMessage("OP ban you with /ban\nTo get unbanned:\n#1 let an OP unban you\n#2 Server reset can unban all players\n#3 Change your username\n/ban only bans your username.\n-ArceusMatt");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(ht1);
				var ht2 = new styleButton();
				ht2.setText("How to bypass ip ban");
				ht2.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("How to bypass a /ban-ip");
						alert.setMessage("OP ip ban you with /ban-ip\nTo get unbanned:\n#1 let an OP unban you\n#2 Server reset can unban all players\n#3 Change IP with a VPN\n/ban-ip only bans your public ip address");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(ht2);
				var ht3 = new styleButton();
				ht3.setText("How to bypass CID/devban");
				ht3.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("How to bypass a /devban");
						alert.setMessage("You can get out of a cid ban in 3 ways.\n#1 get Unbanned\n#2 server resets\n#3 Go in your file storage and go to Games > com.mojang > minecraftpe > clientId.txt and change the id to any number\nWhen an OP uses /devban on you it bans your device(MCPE Client ID) in the server and puts your ID in a type of saving system that doesn't allow you to join, /devban is a command the server has if they download a plugin\n-ArceusMatt");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(ht3);
				var ht4 = new styleButton();
				ht4.setText("How to bypass Alias");
				ht4.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("How to bypass /alias");
						alert.setMessage("Eventually you'll get banned by username,\nYou can hide your username from alias\n#1 Change IP\n#2 server resets\n#3 no longer targeted\nWhen an OP uses /alias on you it shows your usernames by IP in the server, /alias is a command the server has if they download a plugin\n-ArceusMatt");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(ht4);
				var ht5 = new styleButton();
				ht5.setText("How to delete pg chests");
				ht5.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("How to delete pg chests");
						alert.setMessage("To delete chests that are locked with /pg command\nPlace water on the block the chest is placed on,\nThen the chest will disappear along with the items inside of the chest.\nThere is no possible way to take the items.-ArceusMatt\n(This may get patched soon last checked was 9/10/2016)");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(ht5);
				var ht6 = new styleButton();
				ht6.setText("How to clear players items");
				ht6.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("How to clear players items");
						alert.setMessage("To clear the inventory of a player you'll need AlphaHack\ngo on the server with the players username\nOpen AlphaHack and select 'clear inventory'\nThen when you log off all the items will drop or disappear.-ArceusMatt\n(This may get patched soon last checked was 9/10/2016)");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(ht6);
				var ht7 = new styleButton();
				ht7.setText("How to get into claim land");
				ht7.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("How to get into claim land");
						alert.setMessage("If you're using AH V2 Open the single player menu\nOnce it's opened turn on grief, pick ID 0\nFace the way you want inside the land then turn it off\nPut blocks behind you then go inside the land and relog.\nOnce you join you should be inside the claimed house/base/land.-ArceusMatt\n(This may get patched soon last checked was 12/10/2016)");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(ht7);
				var ht8 = new styleButton();
				ht8.setText("How to get players XYZ");
				ht8.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("How to get players XYZ");
						alert.setMessage("If you're using AH V2 Open the online menu\nOnce open pick coords OR use toolboxs mini map coords\nChange your username to the player you want XYZ of\nOnce you join you should see their coords. -ArceusMatt\nThis cant be used if the server has:\nAlways spawn or xbox login only.");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(ht8);
				var ht9 = new styleButton();
				ht9.setText("How to bypass time ban");
				ht9.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("How to bypass time ban");
						alert.setMessage("Eventually you'll get banned by your IP time,\nYou can change your time since servers don't have timers\n#1 Wait untill unbanned\n#2 Change device\n#3 open time/date settings\nYou can set the date/time past the ban time, time ban is a command the server has if they download a plugin\n-ArceusMatt");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(ht9);
				/*var cidban = new styleButton();
				cidban.setText("CID/dev pardon");
				cidban.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						devpardon();
					}
				}));
				miscLayout.addView(cidban);*/
				var sit = new styleButton();
				sit.setText("Image lookup");
				sit.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						web3();
						//print("Loading web page");
					}
				});
				miscLayout.addView(sit);

				function web3() {
					var urls2 = new android.content.Intent(MainActivity);
					urls2.setAction(android.content.Intent.ACTION_VIEW);
					urls2.setData(android.net.Uri.parse("http://www.tineye.com"));
					MainActivity.startActivity(urls2);
				}
				var sid = new styleButton();
				sid.setText("View website code");
				sid.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						misc.dismiss();
						scc();
					}
				});
				miscLayout.addView(sid);
				var aniview = new styleButton();
				aniview.setText("Watch anime on MCPE");
				aniview.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						misc.dismiss();
						betterWebview('https://watch-anime.net');
						android.widget.Toast.makeText(MainActivity, "Please avoid ads & adjust your zoom", 1)
							.show();
					}
				});
				miscLayout.addView(aniview);
				var ip0 = new styleButton();
				ip0.setText("IP lookup");
				ip0.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						misc.dismiss();
						iplu();
					}
				}));
				miscLayout.addView(ip0);
				var ip1 = new styleButton();
				ip1.setText("Server query");
				ip1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						misc.dismiss();
						pip();
					}
				}));
				miscLayout.addView(ip1);
				/*var getCid = new styleButton();
				getCid.setText("What's my CID?");
				getCid.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						AlphaHackPE.returnClient();
					}
				}));
				miscLayout.addView(getCid);*/
				var yrip = new styleButton();
				yrip.setText("What's my IP?");
				yrip.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						AlphaHackPE.returnAddress();
						clientMessage("§cDo Not Share! for your safety.");
					}
				}));
				miscLayout.addView(yrip);
				var dejs = new styleButton();
				dejs.setText("Decrypt JavaScript");
				dejs.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						betterWebview('http://alexstar.ru/tools/jsunpack/');
						misc.dismiss();
					}
				}));
				miscLayout.addView(dejs);

				function djs() {
					ctx.runOnUiThread(new java.lang.Runnable({
						run: function () {
							var webs = new android.webkit.WebView(ctx);
							var webset = webs.getSettings();
							webset.setJavaScriptEnabled(true);
							webs.setWebChromeClient(new android.webkit.WebChromeClient());
							webs.setWebViewClient(new android.webkit.WebViewClient());
							webs.loadUrl('http://alexstar.ru/tools/jsunpack/');
							/*Site URL*/
							new android.app.AlertDialog.Builder(ctx)
								.setView(webs)
								.show();
						}
					}));
				}
				/*var doping = new styleButton();
				doping.setText("Ping / fps");
				doping.setTextColor(android.graphics.Color.RED);
				if (checkping == true) doping.setTextColor(android.graphics.Color.GREEN);
				doping.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						checkping ? checkping = false : checkping = true;
						doping.setText("Ping / fps");
						if (checkping == true) {
							doping.setTextColor(android.graphics.Color.GREEN);
							clientMessage(client + "Ping / fps on");
							checkping = true;
						}
						if (checkping == false) {
							doping.setTextColor(android.graphics.Color.RED);
							clientMessage(client + "Ping / fps off");
							checkping = false;
						}
					}
				}));
				miscLayout.addView(doping);*/
				var devsett = new styleButton(MainActivity);
				devsett.setText("Device developer settings");
				devsett.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						var access1d = new android.content.Intent(MainActivity);
						access1d.setAction(android.provider.Settings.ACTION_APPLICATION_DEVELOPMENT_SETTINGS);
						MainActivity.startActivity(access1d);
					}
				}));
				miscLayout.addView(devsett);
				var timedate = new styleButton(MainActivity);
				timedate.setText("Device date/time settings");
				timedate.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						var access2d = new android.content.Intent(MainActivity);
						access2d.setAction(android.provider.Settings.ACTION_DATE_SETTINGS);
						MainActivity.startActivity(access2d);
					}
				}));
				miscLayout.addView(timedate);
				var panicall = new styleButton(MainActivity);
				panicall.setText("Kill launcher");
				panicall.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						android.os.Process.KillProcess(android.os.Process.myPid());
					}
				}));
				miscLayout.addView(panicall);
				var colorlist = new styleButton();
				colorlist.setText("PE Chat color list");
				colorlist.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("PE Chat color list");
						alert.setMessage("§b = aqua\n§0 = black\n§9 = blue\n§l = bold\n§3 = dark aqua\n§2 = dark blue\n§8 = dark gray\n§1 = dark green\n§5 = dark purple\n§4 = dark red\n§6 = gold\n§7 = gray\n§a = green\n§d = purple\n§c = red\n§r = reset\n§f = white\n§e = yellow\n§o = italic\n§k = cryption");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(colorlist);
                var ht10 = new styleButton();
				ht10.setText("How to vote more daily");
				ht10.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var alert = new android.app.AlertDialog.Builder(MainActivity);
						/*alert.setTitle(""); */
						var scroll = new android.widget.ScrollView(MainActivity);
						var layout = new android.widget.LinearLayout(MainActivity);
						layout.setOrientation(1);
						alert.setTitle("How to vote more daily");
						alert.setMessage("Step 1: Enable a vpn\nStep 2: vote as you or anyone\nStep 3: Turn off vpn\nStep 4: choose another vpn ip\nStep 5: Change devices date\nNow you can vote again.-ArceusMatt.\nThis was last checked on 4/23/2017");
						alert.setPositiveButton("Exit all", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
								misc.dismiss();
								showMenuBtn();
							}
						});
						alert.setNegativeButton("Back to menu", new android.content.DialogInterface.OnClickListener() {
							onClick: function (viewarg) {
								dialog.dismiss();
							}
						});
						var dialog = alert.create();
						dialog.show();
					}
				});
				miscLayout.addView(ht10);
				/*var dwbb = new styleButton();
				dwbb.setText("Deepweb");
				dwbb.setTextColor(android.graphics.Color.RED);
				if (fp9x2_ == true) dwbb.setTextColor(android.graphics.Color.GREEN);
				dwbb.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						fp9x2_ ? fp9x2_ = false : fp9x2_ = true;
						dwbb.setText("Deepweb");
						if (fp9x2_ == true) {
							dwbb.setTextColor(android.graphics.Color.GREEN);
							fp9x2_ = true;
							enterAgeK();
							misc.dismiss();
						}
						if (fp9x2_ == false) {
							dwbb.setTextColor(android.graphics.Color.RED);
							fp9x2_ = false;
						}
					}
				});
				miscLayout.addView(dwbb);
				var heyheyfantastic = new styleButton();
				heyheyfantastic.setText("DOS (illegal)");
				heyheyfantastic.setTextColor(android.graphics.Color.RED);
				if (fp9x1_ == true) heyheyfantastic.setTextColor(android.graphics.Color.GREEN);
				heyheyfantastic.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						fp9x1_ ? fp9x1_ = false : fp9x1_ = true;
						heyheyfantastic.setText("DOS (illegal)");
						if (fp9x1_ == true) {
							heyheyfantastic.setTextColor(android.graphics.Color.GREEN);
							fp9x1_ = true;
							enterAgeK();
							misc.dismiss();
						}
						if (fp9x1_ == false) {
							heyheyfantastic.setTextColor(android.graphics.Color.RED);
							fp9x1_ = false;
						}
					}
				});
				miscLayout.addView(heyheyfantastic);
				var newipad = new styleButton();
				newipad.setText('"No ads" bypass');
				newipad.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						adipEditor();
						misc.dismiss();
					}
				}));
				miscLayout.addView(newipad);*/
				var copyip = new styleButton();
				copyip.setText("Copy IP:port");
				copyip.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						 var ClipboardManager = android.content.ClipboardManager;
						var clipboard = ctx.getSystemService(android.content.Context.CLIPBOARD_SERVICE);
						var copy1 = android.content.ClipData.newPlainText("AlphaHack "+Math.random(12 * 7), Server.getAddress()+":"+Server.getPort());
						clipboard.setPrimaryClip(copy1);
						android.widget.Toast.makeText(MainActivity, "Copied to clipboard.", 1)
							.show();
					}
				}));
				miscLayout.addView(copyip);
				var exit2Layout = new android.widget.LinearLayout(MainActivity);
				exit2Layout.setOrientation(0);
				var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
				var back2 = new styleButton();
				back2.setText("Back");
				back2.setLayoutParams(params);
				back2.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						misc.dismiss();
						if (haxMode == false) mainMenu();
						if (haxMode == true) haxMenu();
					}
				});
				exit2Layout.addView(back2);
				var exit2 = new styleButton();
				exit2.setText("Exit");
				exit2.setLayoutParams(params);
				exit2.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						misc.dismiss();
						showMenuBtn();
					}
				});
				exit2Layout.addView(exit2);
				miscLayout.addView(exit2Layout);
				misc = new android.widget.PopupWindow(miscLayout1, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / GUISize, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getHeight());
				if (default1 == true) misc.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
				if (default1 == false) misc.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
				var bg = new android.graphics.drawable.GradientDrawable();
				bg.setColor(android.graphics.Color.TRANSPARENT);
				bg.setStroke(10, GUIStroke);
				miscLayout1.setBackgroundDrawable(bg);
				miscLayout1.setPadding(20, 0, 20, 0);
				misc.showAtLocation(MainActivity.getWindow()
					.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
			} catch (error) {
				android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
					.show();
			}
		}
	}));
}

function selectView() {
	MainActivity.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
				var selectLayout = new android.widget.LinearLayout(MainActivity);
				var selectScroll = new android.widget.ScrollView(MainActivity);
				var selectLayout1 = new android.widget.LinearLayout(MainActivity);
				selectLayout.setOrientation(1);
				selectLayout1.setOrientation(1);
				selectScroll.addView(selectLayout);
				selectLayout1.addView(selectScroll);
				var exit = new styleButton();
				if(ccolors)exit.setText("Exit");
				exit.setTextColor(android.graphics.Color.RED);
				exit.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						select.dismiss();
						showMenuBtn();
					}
				}));
				if(ccolors)selectLayout.addView(exit);
				var co1 = new styleButton(); //aqua §b
				var co0 = new styleButton(); //begin §
				var co2 = new styleButton(); //black §0
				var co3 = new styleButton(); //blue §9
				var co4 = new styleButton(); //bold §l
				var co5 = new styleButton(); //dark_aqua §3
				var co6 = new styleButton(); //dark_blue §2
				var co7 = new styleButton(); //dark_gray §8
				var co8 = new styleButton(); //dark_green §1
				var co9 = new styleButton(); //dark_purple §5
				var co10 = new styleButton(); //dark_red §4
				var co11 = new styleButton(); //gold §6
				var co12 = new styleButton(); //gray §7
				var co13 = new styleButton(); //green §a
				var co14 = new styleButton(); //light_purple §d
				var co15 = new styleButton(); //red §c
				var co16 = new styleButton(); //reset §r
				var co17 = new styleButton(); //white §f
				var co18 = new styleButton(); //yellow §e
				var co19 = new styleButton(); //italic §o
				var co20 = new styleButton(); //crypt §k
				var enti1 = new styleButton(); //lightning
				var enti2 = new styleButton(); //tnt
				var enti3 = new styleButton(); //arrow
				var enti4 = new styleButton(); //exp
				var enti5 = new styleButton(); //fireball
				var enti6 = new styleButton(); //egg
				var enti7 = new styleButton(); //endereye
				var enti8 = new styleButton(); //shulker
				var enti9 = new styleButton(); //snowball
				var enti10 = new styleButton(); //witherskull
				var s10k = new styleButton();
				var s20k = new styleButton();
				var s30k = new styleButton();
				var s40k = new styleButton();
				var s50k = new styleButton();
				if(finalpass){
				s10k.setText("1st 10k passes");
				s10k.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					select.dismiss();
					showMenuBtn();
						tpasshack1 = true;
					}
				}));
				selectLayout.addView(s10k);
				s20k.setText("2nd 10k passes");
				s20k.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					select.dismiss();
					showMenuBtn();
						tpasshack2 = true;
					}
				}));
				selectLayout.addView(s20k);
				s30k.setText("3rd 10k passes");
				s30k.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					select.dismiss();
					showMenuBtn();
						tpasshack3 = true;
					}
				}));
				selectLayout.addView(s30k);
				s40k.setText("4th 10k passes");
				s40k.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					select.dismiss();
					showMenuBtn();
						tpasshack4 = true;
					}
				}));
				selectLayout.addView(s40k);
				s50k.setText("5th 10k passes");
				s50k.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					select.dismiss();
					showMenuBtn();
						tpasshack5 = true;
					}
				}));
				selectLayout.addView(s50k);
				}
				if(entselect){
				enti1.setText("Lightning");
				enti1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					lightning = true;
					select.dismiss();
					showMenuBtn();
					}
				}));
				selectLayout.addView(enti1);
				enti2.setText("Primed tnt");
				enti2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					primedtnt = true;
					select.dismiss();
					showMenuBtn();
					}
				}));
				selectLayout.addView(enti2);
				enti3.setText("Arrow");
				enti3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					arrow = true;
					select.dismiss();
					showMenuBtn();
					}
				}));
				selectLayout.addView(enti3);
				enti4.setText("Exp orb");
				enti4.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					exporb = true;
					select.dismiss();
					showMenuBtn();
					}
				}));
				selectLayout.addView(enti4);
				enti5.setText("Fireball");
				enti5.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					fireball = true;
					select.dismiss();
					showMenuBtn();
					}
				}));
				selectLayout.addView(enti5);
				enti6.setText("Egg");
				enti6.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					egg = true;
					select.dismiss();
					showMenuBtn();
					}
				}));
				selectLayout.addView(enti6);
				enti7.setText("Ender eye");
				enti7.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					endersignal = true;
					select.dismiss();
					showMenuBtn();
					}
				}));
				selectLayout.addView(enti7);
				enti8.setText("Shulker bullet");
				enti8.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					shulkerbullet = true;
					select.dismiss();
					showMenuBtn();
					}
				}));
				selectLayout.addView(enti8);
				enti9.setText("Snowball");
				enti9.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					snowball = true;
					select.dismiss();
					showMenuBtn();
					}
				}));
				selectLayout.addView(enti9);
				enti10.setText("Wither skull");
				enti10.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
					witherskull = true;
					select.dismiss();
					showMenuBtn();
					}
				}));
				selectLayout.addView(enti10);
				}
				if(ccolors){
				co1.setText("Aqua");
				co1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors1;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co1);
				co2.setText("Black");
				co2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors2;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co2);
				co3.setText("Blue");
				co3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors3;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co3);
				co4.setText("Bold");
				co4.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors4;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co4);
				co5.setText("Dark aqua");
				co5.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors5;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co5);
				co6.setText("Dark blue");
				co6.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors6;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co6);
				co7.setText("Dark gray");
				co7.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors7;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co7);
				co8.setText("Dark green");
				co8.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors8;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co8);
				co9.setText("Dark purple");
				co9.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors9;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co9);
				co10.setText("Dark red");
				co10.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors10;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co10);
				co11.setText("Gold");
				co11.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors11;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co11);
				co12.setText("Gray");
				co12.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors12;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co12);
				co13.setText("Green");
				co13.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors13;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co13);
				co14.setText("Light purple");
				co14.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors14;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co14);
				co15.setText("Red");
				co15.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors15;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co15);
				co16.setText("Reset");
				co16.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors16;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co16);
				co17.setText("White");
				co17.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors17;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co17);
				co18.setText("Yellow");
				co18.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors18;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co18);
				co19.setText("Italic");
				co19.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors19;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co19);
				co20.setText("Crypted");
				co20.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						chatColors = chatColors20;
						android.widget.Toast.makeText(MainActivity, "Message color set.", 1)
							.show();
					}
				}));
				selectLayout.addView(co20);
				}
				select = new android.widget.PopupWindow(selectLayout1, dip2px(500), dip2px(500));
				select = new android.widget.PopupWindow(selectLayout1, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / 2, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getHeight() / 1);
				var bg = new android.graphics.drawable.GradientDrawable();
				bg.setColor(android.graphics.Color.TRANSPARENT);
				bg.setStroke(10, GUIStroke);
				selectLayout1.setBackgroundDrawable(bg);
				selectLayout1.setPadding(20, 0, 20, 0);
				select.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
				select.showAtLocation(MainActivity.getWindow()
					.getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
			} catch (error) {
				android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
					.show();
			}
		}
	}));
}

function jresultView(text) {
	MainActivity.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
				var jresultLayout = new android.widget.LinearLayout(MainActivity);
				var jresultScroll = new android.widget.ScrollView(MainActivity);
				var jresultLayout1 = new android.widget.LinearLayout(MainActivity);
				jresultLayout.setOrientation(1);
				jresultLayout1.setOrientation(1);
				jresultScroll.addView(jresultLayout);
				jresultLayout1.addView(jresultScroll);
				var exit = new styleButton();
				exit.setText("Exit");
				exit.setTextColor(android.graphics.Color.RED);
				exit.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						jresult.dismiss();
						showMenuBtn();
						isIpJson = false;
						isServerJson = false;
					}
				}));
				jresultLayout.addView(exit);
				var refresh = new styleButton();
				refresh.setText("Refresh");
				refresh.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function (viewarg) {
						jresult.dismiss();
						for (var t = 0; t < 5; t++) {
							if (isIpJson) {
								var daurl1 = "http://ip-api.com/json/" + text.query;
								var dajson1 = ModPE.getFromUrl(daurl1);
								var iperesult = ModPE.JSON.parse(dajson1);
								isIpJson = true;
								jresultView(iperesult);
							}
							if (isServerJson) {
								var daurl2 = "http://mcapi.ca/query/'+text.hostname+':'+text.port+'/list";
								var dajson2 = ModPE.getFromUrl(daurl2);
								var servresult = ModPE.JSON.parse(dajson2);
								isServerJson = true;
								jresultView(servresult);
							}
						}
					}
				}));
				jresultLayout.addView(refresh);
				var jsontext = new android.widget.TextView(MainActivity);
				if (isServerJson) jsontext.setText("IP: " + text.hostname + " " + text.port + "\nMotd: " + text.motd + "\nSoftware: " + text.software + "\nVersion: " + text.version + "\nStatus: " + text.status + "\nMap: " + text.map + "\nGame type: " + text.game_type + "\nList: " + text.players.online + "/" + text.players.max + "\n" + text.list + "\nPlugins: " + text.plugins);
				if (isIpJson) jsontext.setText("IP: " + text.query + "\nISP: " + text.isp + "\nISP location: " + text.country + "\n" + text.regionName + "\n" + text.city);
				jsontext.setTextColor(android.graphics.Color.WHITE);
				jresultLayout.addView(jsontext);
				jresult = new android.widget.PopupWindow(jresultLayout1, dip2px(500), dip2px(500));
				jresult = new android.widget.PopupWindow(jresultLayout1, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getWidth() / 2, MainActivity.getWindowManager()
					.getDefaultDisplay()
					.getHeight() / 1);
				var bg = new android.graphics.drawable.GradientDrawable();
				bg.setColor(android.graphics.Color.TRANSPARENT);
				bg.setStroke(10, GUIStroke);
				jresultLayout1.setBackgroundDrawable(bg);
				jresultLayout1.setPadding(20, 0, 20, 0);
				jresult.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
				jresult.showAtLocation(MainActivity.getWindow()
					.getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
			} catch (error) {
				android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
					.show();
			}
		}
	}));
}

function betterWebview(url) {
	MainActivity.runOnUiThread(new java.lang.Runnable({
		run: function () {
			try {
			showMenuBtn();
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
/*main menu*/
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
				title.setText(trademark + " " + copyright + " v2" + "("+version+")");
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
				exit.setText("Exit AlphαHαck");
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
				group.setText("(New) Community");
				group.setTextColor(GUIText);
				group.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						var urls4 = new android.content.Intent(MainActivity);
						urls4.setAction(android.content.Intent.ACTION_VIEW);
						urls4.setData(android.net.Uri.parse(groupL));
						MainActivity.startActivity(urls4);
					}
				});
				menuLayout.addView(group);
				var settings = new styleButton();
				settings.setText("Settings");
				if (getLanguage == "it_IT") settings.setText("Impostazioni");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") settings.setText("Configuracion");
				if (getLanguage == "ko_KR") settings.setText("설정");
				if (getLanguage == "de_DE") settings.setText("Einstellungen");
				if (getLanguage == "ja_JP") settings.setText("設定");
				if (getLanguage == "nl_NL") settings.setText("Instellingen");
				if (getLanguage == "zh_CN") settings.setText("设置");
				settings.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						settings_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(settings);
				var misc = new styleButton();
				misc.setText("Misc");
				if (getLanguage == "ko_KR") misc.setText("기타");
				if (getLanguage == "de_DE") misc.setText("Verschiedenes");
				if (getLanguage == "nl_NL") misc.setText("Diversen");
				if (getLanguage == "zh_CN") misc.setText("杂物");
				misc.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						misc_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(misc);
				
				var effect = new styleButton();
				effect.setText("Effect menu");
				if (getLanguage == "it_IT") effect.setText("Menu effetti");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") effect.setText("Menu de efectos");
				if (getLanguage == "ko_KR") effect.setText("효과 메뉴");
				if (getLanguage == "de_DE") effect.setText("Effekte menu");
				if (getLanguage == "ja_JP") effect.setText("エフェクトメニュー");
				if (getLanguage == "zh_CN") effect.setText("效果菜单");
				effect.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						effect_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(effect);

				function effect_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var effectLayout = new android.widget.LinearLayout(MainActivity);
								var effectScroll = new android.widget.ScrollView(MainActivity);
								var effectLayout1 = new android.widget.LinearLayout(MainActivity);
								effectLayout.setOrientation(1);
								effectLayout1.setOrientation(1);
								effectScroll.addView(effectLayout);
								effectLayout1.addView(effectScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										effect.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										effect.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								effectLayout.addView(exitLayout);
								var mov = new styleButton();
								mov.setText("Remove all effect");
								mov.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										//Entity.removeAllEffects(player);
										Entity.removeAllEffects(getPlayerEnt());
									}
								}));
								effectLayout.addView(mov);
								var rmeft = new styleButton();
								rmeft.setText("Hit remove effects");
								rmeft.setTextColor(android.graphics.Color.RED);
								if (hitrmef == true) rmeft.setTextColor(android.graphics.Color.GREEN);
								rmeft.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										hitrmef ? hitrmef = false : hitrmef = true;
										rmeft.setText("Hit remove effects");
										if (hitrmef == true) {
											rmeft.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "Hit remove effects on");
											hitrmef = true;
										}
										if (hitrmef == false) {
											rmeft.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Hit remove effects off");
											hitrmef = false;
										}
									}
								}));
								effectLayout.addView(rmeft);
								var e1 = new styleButton();
								e1.setText("Saturation");
								e1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ea();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e1);

								function ea() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn1();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn1() {
									Entity.addEffect(getPlayerEnt(), MobEffect.saturation, s * l, 0, false, true);
								}
								var e2 = new styleButton();
								e2.setText("Absorption");
								e2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										eb();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e2);

								function eb() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn2();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn2() {
									Entity.addEffect(getPlayerEnt(), MobEffect.absorption, s * l, 0, false, true);
								}
								var e3 = new styleButton();
								e3.setText("Health boost");
								e3.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ec();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e3);

								function ec() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn3();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn3() {
									Entity.addEffect(getPlayerEnt(), MobEffect.healthBoost, s * l, 0, false, true);
								}
								var e4 = new styleButton();
								e4.setText("Wither");
								e4.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ed();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e4);

								function ed() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn4();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn4() {
									Entity.addEffect(getPlayerEnt(), MobEffect.wither, s * l, 0, false, true);
								}
								var e5 = new styleButton();
								e5.setText("Poison");
								e5.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ee();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e5);

								function ee() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn5();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn5() {
									Entity.addEffect(getPlayerEnt(), MobEffect.poison, s * l, 0, false, true);
								}
								var e6 = new styleButton();
								e6.setText("Weakness");
								e6.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ef();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e6);

								function ef() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn6();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn6() {
									Entity.addEffect(getPlayerEnt(), MobEffect.weakness, s * l, 0, false, true);
								}
								var e7 = new styleButton();
								e7.setText("Hunger");
								e7.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										eg();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e7);

								function eg() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn7();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn7() {
									Entity.addEffect(getPlayerEnt(), MobEffect.hunger, s * l, 0, false, true);
								}
								var e8 = new styleButton();
								e8.setText("Night vision");
								e8.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										eh();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e8);

								function eh() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn8();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn8() {
									Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, s * l, 0, false, true);
								}
								var e9 = new styleButton();
								e9.setText("Blindness");
								e9.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ei();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e9);

								function ei() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn9();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn9() {
									Entity.addEffect(getPlayerEnt(), MobEffect.blindness, s * l, 0, false, true);
								}
								var e10 = new styleButton();
								e10.setText("Invisibility");
								e10.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ej();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e10);

								function ej() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn10();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn10() {
									Entity.addEffect(getPlayerEnt(), MobEffect.invisibility, s * l, 0, false, true);
								}
								var e11 = new styleButton();
								e11.setText("Water breathing");
								e11.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ek();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e11);

								function ek() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn11();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn11() {
									Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, s * l, 0, false, true);
								}
								var e12 = new styleButton();
								e12.setText("Fire resistance");
								e12.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										el();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e12);

								function el() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn12();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn12() {
									Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, s * l, 0, false, true);
								}
								var e13 = new styleButton();
								e13.setText("Resistance");
								e13.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										em();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e13);

								function em() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn13();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn13() {
									Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, s * l, 0, false, true);
								}
								var e14 = new styleButton();
								e14.setText("Regeneration");
								e14.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e14);

								function en() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn14();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn14() {
									Entity.addEffect(getPlayerEnt(), MobEffect.regeneration, s * l, 0, false, true);
								}
								var e15 = new styleButton();
								e15.setText("Nausea");
								e15.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										eo();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e15);

								function eo() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn15();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn15() {
									Entity.addEffect(getPlayerEnt(), MobEffect.confusion, s * l, 0, false, true);
								}
								var e16 = new styleButton();
								e16.setText("Jump boost");
								e16.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ep();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e16);

								function ep() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn16();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn16() {
									Entity.addEffect(getPlayerEnt(), MobEffect.jump, s * l, 0, false, true);
								}
								var e17 = new styleButton();
								e17.setText("Harm");
								e17.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										eq();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e17);

								function eq() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn17();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn17() {
									Entity.addEffect(getPlayerEnt(), MobEffect.harm, s * l, 0, false, true);
								}
								var e18 = new styleButton();
								e18.setText("Heal");
								e18.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										er();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e18);

								function er() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn18();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn18() {
									Entity.addEffect(getPlayerEnt(), MobEffect.heal, s * l, 0, false, true);
								}
								var e19 = new styleButton();
								e19.setText("Strength");
								e19.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										es();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e19);

								function es() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn19();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn19() {
									Entity.addEffect(getPlayerEnt(), MobEffect.damageBoost, s * l, 0, false, true);
								}
								var e20 = new styleButton();
								e20.setText("Mining fatigue");
								e20.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										et();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e20);

								function et() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn20();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn20() {
									Entity.addEffect(getPlayerEnt(), MobEffect.digSlowdown, s * l, 0, false, true);
								}
								var e21 = new styleButton();
								e21.setText("Haste");
								e21.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										eu();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e21);

								function eu() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn21();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn21() {
									Entity.addEffect(getPlayerEnt(), MobEffect.digSpeed, s * l, 0, false, true);
								}
								var e22 = new styleButton();
								e22.setText("Slowness");
								e22.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ev();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e22);

								function ev() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn22();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn22() {
									Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, s * l, 0, false, true);
								}
								var e23 = new styleButton();
								e23.setText("Speed boost");
								e23.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ew();
										effect.dismiss();
									}
								}));
								effectLayout.addView(e23);

								function ew() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var sec = new styleInput();
												sec.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Time & Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(sec);
												Layer.addView(lvl);
												Layer.addView(Exit);
												sec.setText("");
												sec.setHint("Seconds");
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														s = sec.getText();
														l = lvl.getText();
														Dialog.dismiss();
														inn23();
														showMenuBtn();
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Effect Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function inn23() {
									Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, s * l, 0, false, true);
								}
								var exit2Layout = new android.widget.LinearLayout(MainActivity);
								exit2Layout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back2 = new styleButton();
								back2.setText("Back");
								back2.setLayoutParams(params);
								back2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										effect.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exit2Layout.addView(back2);
								var exit2 = new styleButton();
								exit2.setText("Exit");
								exit2.setLayoutParams(params);
								exit2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										effect.dismiss();
										showMenuBtn();
									}
								});
								exit2Layout.addView(exit2);
								effectLayout.addView(exit2Layout);
								effect = new android.widget.PopupWindow(effectLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) effect.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) effect.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								effectLayout1.setBackgroundDrawable(bg);
								effectLayout1.setPadding(20, 0, 20, 0);
								effect.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				var enchant = new styleButton();
				enchant.setText("Enchant menu");
				if (getLanguage == "it_IT") enchant.setText("Menu incantamenti");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") enchant.setText("Menu de experiencia");
				if (getLanguage == "ko_KR") enchant.setText("마법 부여 메뉴");
				if (getLanguage == "de_DE") enchant.setText("Verzauberungs menu");
				if (getLanguage == "ja_JP") enchant.setText("エンチャントメニュー");
				if (getLanguage == "nl_NL") enchant.setText("Betoveringen menu");
				if (getLanguage == "zh_CN") enchant.setText("附魔菜单");
				enchant.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						enchant_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(enchant);

				function enchant_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var enchantLayout = new android.widget.LinearLayout(MainActivity);
								var enchantScroll = new android.widget.ScrollView(MainActivity);
								var enchantLayout1 = new android.widget.LinearLayout(MainActivity);
								enchantLayout.setOrientation(1);
								enchantLayout1.setOrientation(1);
								enchantScroll.addView(enchantLayout);
								enchantLayout1.addView(enchantScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										enchant.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										enchant.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								enchantLayout.addView(exitLayout);
								var button = new styleButton();
								button.setText("Add experience");
								button.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										XGive();
										enchant.dismiss();
									}
								}));
								enchantLayout.addView(button);
								var checker = new styleButton();
								checker.setText("illegal enchant checker");
								checker.setTextColor(android.graphics.Color.RED);
								if (legalenchant == true) checker.setTextColor(android.graphics.Color.GREEN);
								checker.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										legalenchant ? legalenchant = false : legalenchant = true;
										checker.setText("illegal enchant checker");
										if (legalenchant == true) {
											checker.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "illegal enchant checker on");
											legalenchant = true;
										}
										if (legalenchant == false) {
											checker.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "illegal enchant checker off");
											legalenchant = false;
										}
									}
								}));
								enchantLayout.addView(checker);
								/*mcpe adverage enchantment level is below 5 but in the coding it allows a level 10 and under.*/
								var god1 = new styleButton();
								god1.setText("God sword");
								god1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										godsword()
									}
								}));
								enchantLayout.addView(god1);

								function godsword() {
									if (Player.getSelectedSlotId() != null) {
										var tysplvl = "29000";
										Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, tysplvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, tysplvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, tysplvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, tysplvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, tysplvl);
										//Player.setLevel(Math.round(tysplvl));
										Player.setItemCustomName(Player.getSelectedSlotId(), "God sword");
									}
								}
								var god2 = new styleButton();
								god2.setText("God pickaxe");
								god2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										godpickaxe()
									}
								}));
								enchantLayout.addView(god2);

								function godpickaxe() {
									if (Player.getSelectedSlotId() != null) {
										var tysplvl = "29000";
										var fortuneLvl = "80";
										Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, tysplvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, fortuneLvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, tysplvl);
										//Player.setLevel(Math.round(tysplvl));
										Player.setItemCustomName(Player.getSelectedSlotId(), "God pickaxe");
									}
								}
								var god4 = new styleButton();
								god4.setText("God axe");
								god4.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										godaxe()
									}
								}));
								enchantLayout.addView(god4);

								function godaxe() {
									if (Player.getSelectedSlotId() != null) {
										var tysplvl = "29000";
										var fortuneLvl = "80";
										Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, tysplvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, fortuneLvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, tysplvl);
										//Player.setLevel(Math.round(tysplvl));
										Player.setItemCustomName(Player.getSelectedSlotId(), "God axe");
									}
								}
								var god5 = new styleButton();
								god5.setText("God bow");
								god5.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										godbow();
									}
								}));
								enchantLayout.addView(god5);

								function godbow() {
									if (Player.getSelectedSlotId() != null) {
										var tysplvl = "29000";
										var flamelvl = '80';
										Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, flamelvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, tysplvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, tysplvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, tysplvl);
										//Player.setLevel(Math.round(tysplvl));
										Player.setItemCustomName(Player.getSelectedSlotId(), "God bow");
									}
								}
								var god3 = new styleButton();
								god3.setText("God armor");
								god3.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										godarmor()
									}
								}));
								enchantLayout.addView(god3);

								function godarmor() {
									if (Player.getSelectedSlotId() != null) {
										var tysplvl = "29000";
										Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, tysplvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, tysplvl);
										Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, tysplvl);
										//Player.setLevel(Math.round(tysplvl));
										Player.setItemCustomName(Player.getSelectedSlotId(), "God armor");
									}
								}
								var wearing = new styleButton(MainActivity);
								wearing.setText("God armor (wearing)");
								wearing.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										wearGodArmor()
									}
								}));
								enchantLayout.addView(wearing);

								function wearGodArmor() {
									var tysplvl = "29000";
									if (Player.getArmorSlot(0) != null) {
										Player.enchant(Player.getArmorSlot(0), Enchantment.PROTECTION, tysplvl);
										Player.enchant(Player.getArmorSlot(0), Enchantment.THORNS, tysplvl);
										Player.enchant(Player.getArmorSlot(0), Enchantment.UNBREAKING, tysplvl);
										Player.setItemCustomName(Player.getArmorSlot(0), "God armor");
									}
									if (Player.getArmorSlot(1) != null) {
										Player.enchant(Player.getArmorSlot(1), Enchantment.PROTECTION, tysplvl);
										Player.enchant(Player.getArmorSlot(1), Enchantment.THORNS, tysplvl);
										Player.enchant(Player.getArmorSlot(1), Enchantment.UNBREAKING, tysplvl);
										Player.setItemCustomName(Player.getArmorSlot(1), "God armor");
									}
									if (Player.getArmorSlot(2) != null) {
										Player.enchant(Player.getArmorSlot(2), Enchantment.PROTECTION, tysplvl);
										Player.enchant(Player.getArmorSlot(2), Enchantment.THORNS, tysplvl);
										Player.enchant(Player.getArmorSlot(2), Enchantment.UNBREAKING, tysplvl);
										Player.setItemCustomName(Player.getArmorSlot(2), "God armor");
									}
									if (Player.getArmorSlot(3) != null) {
										Player.enchant(Player.getArmorSlot(3), Enchantment.PROTECTION, tysplvl);
										Player.enchant(Player.getArmorSlot(3), Enchantment.THORNS, tysplvl);
										Player.enchant(Player.getArmorSlot(3), Enchantment.UNBREAKING, tysplvl);
										Player.setItemCustomName(Player.getArmorSlot(3), "God armor");
									}
								}
								var ena = new styleButton();
								ena.setText("Aqua Affinity");
								ena.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en1();
									}
								}));
								enchantLayout.addView(ena);

								function en1() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add1();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add1();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add1();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add1() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.AQUA_AFFINITY, ench);
								}
								var enb = new styleButton();
								enb.setText("Bane Of Athropods");
								enb.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en2();
									}
								}));
								enchantLayout.addView(enb);

								function en2() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add2();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add2();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add2();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add2() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.BANE_OF_ARTHROPODS, ench);
								}
								var enc = new styleButton();
								enc.setText("Blast Protection");
								enc.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en3();
									}
								}));
								enchantLayout.addView(enc);

								function en3() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add3();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add3();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add3();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add3() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.BLAST_PROTECTION, ench);
								}
								var enf = new styleButton();
								enf.setText("Depth Strider");
								enf.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en5();
									}
								}));
								enchantLayout.addView(enf);

								function en5() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add5();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add5();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add5();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add5() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.DEPTH_STRIDER, ench);
								}
								var ene = new styleButton();
								ene.setText("Efficiency");
								ene.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en6();
									}
								}));
								enchantLayout.addView(ene);

								function en6() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add6();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add6();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add6();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add6() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, ench);
								}
								var eng = new styleButton();
								eng.setText("Feather Falling");
								eng.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en7();
									}
								}));
								enchantLayout.addView(eng);

								function en7() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add7();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add7();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add7();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add7() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, ench);
								}
								var enh = new styleButton();
								enh.setText("Fire Aspect");
								enh.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en8();
									}
								}));
								enchantLayout.addView(enh);

								function en8() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add8();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add8();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add8();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add8() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, ench);
								}
								var eni = new styleButton();
								eni.setText("Fire Protection");
								eni.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en9();
									}
								}));
								enchantLayout.addView(eni);

								function en9() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add9();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add9();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add9();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add9() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, ench);
								}
								var enj = new styleButton();
								enj.setText("Flame");
								enj.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en10();
									}
								}));
								enchantLayout.addView(enj);

								function en10() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add10();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add10();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add10();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add10() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, ench);
								}
								var enk = new styleButton();
								enk.setText("Fortune");
								enk.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en11();
									}
								}));
								enchantLayout.addView(enk);

								function en11() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add11();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add11();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add11();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add11() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.FORTUNE, ench);
								}
								var enl = new styleButton();
								enl.setText("Infinity");
								enl.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en12();
									}
								}));
								enchantLayout.addView(enl);

								function en12() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add12();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add12();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add12();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add12() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, ench);
								}
								var enm = new styleButton();
								enm.setText("Knockback");
								enm.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en13();
									}
								}));
								enchantLayout.addView(enm);

								function en13() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add13();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add13();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add13();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add13() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, ench);
								}
								var enn = new styleButton();
								enn.setText("Looting");
								enn.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en14();
									}
								}));
								enchantLayout.addView(enn);

								function en14() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add14();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add14();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add14();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add14() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, ench);
								}
								var eno = new styleButton();
								eno.setText("Luck of the sea");
								eno.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en15();
									}
								}));
								enchantLayout.addView(eno);

								function en15() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add15();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add15();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add15();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add15() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.LUCK_OF_THE_SEA, ench);
								}
								var enp = new styleButton();
								enp.setText("Lure");
								enp.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en16();
									}
								}));
								enchantLayout.addView(enp);

								function en16() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add16();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add16();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add16();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add16() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.LURE, ench);
								}
								var enq = new styleButton();
								enq.setText("Power");
								enq.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en17();
									}
								}));
								enchantLayout.addView(enq);

								function en17() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add17();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add17();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add17();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add17() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, ench);
								}
								var enr = new styleButton();
								enr.setText("Projectile protection");
								enr.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en18();
									}
								}));
								enchantLayout.addView(enr);

								function en18() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add18();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add18();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add18();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add18() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, ench);
								}
								var ens = new styleButton();
								ens.setText("Protection");
								ens.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en19();
									}
								}));
								enchantLayout.addView(ens);

								function en19() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add19();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add19();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add19();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add19() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, ench);
								}
								var ent = new styleButton();
								ent.setText("Punch");
								ent.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en20();
									}
								}));
								enchantLayout.addView(ent);

								function en20() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add20();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add20();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add20();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add20() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, ench);
								}
								var enu = new styleButton();
								enu.setText("Respiration");
								enu.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en21();
									}
								}));
								enchantLayout.addView(enu);

								function en21() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add21();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add21();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add21();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add21() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.RESPIRATION, ench);
								}
								var env = new styleButton();
								env.setText("Sharpness");
								env.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en22();
									}
								}));
								enchantLayout.addView(env);

								function en22() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add22();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add22();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add22();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add22() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, ench);
								}
								var enw = new styleButton();
								enw.setText("Silk touch");
								enw.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en23();
									}
								}));
								enchantLayout.addView(enw);

								function en23() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add23();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add23();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add23();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add23() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH, ench);
								}
								var enx = new styleButton();
								enx.setText("Smite");
								enx.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en24();
									}
								}));
								enchantLayout.addView(enx);

								function en24() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add24();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add24();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add24();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add24() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.SMITE, ench);
								}
								var eny = new styleButton();
								eny.setText("Thorns");
								eny.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en25();
									}
								}));
								enchantLayout.addView(eny);

								function en25() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add25();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add25();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add25();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog Is Malfunctioning:" + e);
											}
										}
									});
								}

								function add25() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, ench);
								}
								var enz = new styleButton();
								enz.setText("Unbreaking");
								enz.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en26();
									}
								}));
								enchantLayout.addView(enz);

								function en26() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add26();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add26();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add26();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog :" + e);
											}
										}
									});
								}

								function add26() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, ench);
								}
								var enz1 = new styleButton();
								enz1.setText("Mending");
								enz1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en27();
									}
								}));
								enchantLayout.addView(enz1);

								function en27() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 5;
																Dialog.dismiss();
																add27();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add27();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add27();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog :" + e);
											}
										}
									});
								}

								function add27() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.MENDING, ench);
								}
								var enz2 = new styleButton();
								enz2.setText("Frost walker");
								enz2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										en28();
									}
								}));
								enchantLayout.addView(enz2);

								function en28() {
									MainActivity.runOnUiThread(new java.lang.Runnable() {
										run: function () {
											try {
												GetText = new android.widget.PopupWindow();
												var Layer = new android.widget.LinearLayout(MainActivity);
												var lvl = new styleInput();
												lvl.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
												var Dialog = new android.app.Dialog(MainActivity);
												var Exit = new styleButton();
												Dialog.setTitle("Enter Level");
												Dialog.setContentView(Layer);
												Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
												Dialog.show();
												Layer.addView(lvl);
												Layer.addView(Exit);
												lvl.setText("");
												lvl.setHint("Level");
												Exit.setText("Done");
												Exit.setOnClickListener(new android.view.View.OnClickListener() {
													onClick: function (view) {
														if (legalenchant == true) {
															ench = lvl.getText();
															if (ench >= 10) {
																ench = 10;
																Dialog.dismiss();
																add28();
																clientMessage(client + "That enchantment is illegal in vanilla.");
															}
															if (ench <= 10) {
																Dialog.dismiss();
																add28();
															}
														}
														if (legalenchant == false) {
															ench = lvl.getText();
															Dialog.dismiss();
															add28();
														}
													}
												});
												GetText.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
												GetText.showAtLocation(MainActivity.getWindow()
													.getDecorView(), android.view.Gravity.TOP, 0, 0);
											} catch (e) {
												print("The Enchant Dialog :" + e);
											}
										}
									});
								}

								function add28() {
									Player.enchant(Player.getSelectedSlotId(), Enchantment.FROST_WALKER, ench);
								}
								//Enchantment.AQUA_AFFINITY;
								//Enchantment.BANE_OF_ARTHROPODS;
								//Enchantment.BLAST_PROTECTION;
								//Enchantment.DEPTH_STRIDER;
								//Enchantment.EFFICIENCY;
								//Enchantment.FEATHER_FALLING;
								//Enchantment.FIRE_ASPECT;
								//Enchantment.FIRE_PROTECTION;
								//Enchantment.FLAME;
								//Enchantment.FORTUNE;
								//Enchantment.INFINITY;
								//Enchantment.KNOCKBACK;
								//Enchantment.LOOTING;
								//Enchantment.LUCK_OF_THE_SEA;
								//Enchantment.LURE;
								//Enchantment.POWER;
								//Enchantment.PROJECTILE_PROTECTION;
								//Enchantment.PROTECTION;
								//Enchantment.PUNCH;
								//Enchantment.RESPIRATION;
								//Enchantment.SHARPNESS;
								//Enchantment.SILK_TOUCH;
								//Enchantment.SMITE;
								//Enchantment.THORNS;
								//Enchantment.UNBREAKING;
								//Enchantment.MENDING;
								//Enchantment.FROST_WALKER;
								var exit2Layout = new android.widget.LinearLayout(MainActivity);
								exit2Layout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back2 = new styleButton();
								back2.setText("Back");
								back2.setLayoutParams(params);
								back2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										enchant.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exit2Layout.addView(back2);
								var exit2 = new styleButton();
								exit2.setText("Exit");
								exit2.setLayoutParams(params);
								exit2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										enchant.dismiss();
										showMenuBtn();
									}
								});
								exit2Layout.addView(exit2);
								enchantLayout.addView(exit2Layout);
								enchant = new android.widget.PopupWindow(enchantLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) enchant.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) enchant.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								enchantLayout1.setBackgroundDrawable(bg);
								enchantLayout1.setPadding(20, 0, 20, 0);
								enchant.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				var give = new styleButton();
				give.setText("Give menu");
				if (getLanguage == "it_IT") give.setText("Menu give");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") give.setText("Menu de dar");
				if (getLanguage == "ko_KR") give.setText("아이템 주기 메뉴");
				if (getLanguage == "de_DE") give.setText("Item-manager");
				if (getLanguage == "ja_JP") give.setText("アイテムの付与");
				if (getLanguage == "nl_NL") give.setText("Geef items menu");
				if (getLanguage == "zh_CN") give.setText("给予菜单");
				give.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						give_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(give);

				function give_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var giveLayout = new android.widget.LinearLayout(MainActivity);
								var giveScroll = new android.widget.ScrollView(MainActivity);
								var giveLayout1 = new android.widget.LinearLayout(MainActivity);
								giveLayout.setOrientation(1);
								giveLayout1.setOrientation(1);
								giveScroll.addView(giveLayout);
								giveLayout1.addView(giveScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										give.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										give.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								giveLayout.addView(exitLayout);
								var button = new styleButton();
								button.setText("Custom Give");
								button.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Give();
										give.dismiss();
									}
								}));
								giveLayout.addView(button);
								var button90 = new styleButton();
								button90.setText("Block ID list");
								button90.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										betterWebview('https://ArceusMatt.github.io/minecraftid.html');
										give.dismiss();
									}
								}));
								giveLayout.addView(button90);
								var nameitem = new styleButton();
								nameitem.setText("Custom item name");
								nameitem.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										give.dismiss();
										cusitem();
									}
								}));
								giveLayout.addView(nameitem);

								function idList() {
									MainActivity.runOnUiThread(new java.lang.Runnable({
										run: function () {
											var webs = new android.webkit.WebView(MainActivity);
											var webset = webs.getSettings();
											webset.setJavaScriptEnabled(true);
											webs.setWebChromeClient(new android.webkit.WebChromeClient());
											webs.setWebViewClient(new android.webkit.WebViewClient());
											webs.loadUrl('https://ArceusMatt.github.io/minecraftid.html');
											/*Site URL*/
											new android.app.AlertDialog.Builder(MainActivity)
												.setView(webs)
												.show();
										}
									}));
								}
								var butto = new styleButton();
								butto.setText("Special creative inventory");
								butto.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										clientMessage(client + "§7Adding all items to creative inventory");
										for (var j = 0; j < 901; j++) {
											Player.addItemCreativeInv(j, 5, 0);
										}
										if (j == 900) clientMessage(client + "§7Done, all items added.");
									}
								}));
								giveLayout.addView(butto);
								var clear = new styleButton();
								clear.setText("Clear inventory");
								clear.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										clientMessage(client + "§7Inventory cleared.");
										for (var k = 0; k < 50; k++) {
											Player.clearInventorySlot(k);
										}
									}
								}));
								giveLayout.addView(clear);
								var k1 = new styleButton();
								k1.setText("Leather kit");
								k1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Player.setArmorSlot(0, 298, 0);
										Player.setArmorSlot(1, 299, 0);
										Player.setArmorSlot(2, 300, 0);
										Player.setArmorSlot(3, 301, 0);
										clientMessage(client + "§6Leather §fkit equipped check inventory!");
										addItemInventory(268, 1, 0);
										addItemInventory(269, 1, 0);
										addItemInventory(270, 1, 0);
										addItemInventory(271, 1, 0);
										addItemInventory(290, 1, 0);
									}
								}));
								giveLayout.addView(k1);
								var k2 = new styleButton();
								k2.setText("Chain kit");
								k2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Player.setArmorSlot(0, 302, 0);
										Player.setArmorSlot(1, 303, 0);
										Player.setArmorSlot(2, 304, 0);
										Player.setArmorSlot(3, 305, 0);
										clientMessage(client + "§7Chain §fkit equipped check inventory!");
										addItemInventory(272, 1, 0);
										addItemInventory(273, 1, 0);
										addItemInventory(274, 1, 0);
										addItemInventory(275, 1, 0);
										addItemInventory(291, 1, 0);
									}
								}));
								giveLayout.addView(k2);
								var k3 = new styleButton();
								k3.setText("Iron kit");
								k3.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Player.setArmorSlot(0, 306, 0);
										Player.setArmorSlot(1, 307, 0);
										Player.setArmorSlot(2, 308, 0);
										Player.setArmorSlot(3, 309, 0);
										clientMessage(client + "§fIron §fkit equipped check inventory!");
										addItemInventory(267, 1, 0);
										addItemInventory(256, 1, 0);
										addItemInventory(257, 1, 0);
										addItemInventory(258, 1, 0);
										addItemInventory(292, 1, 0);
									}
								}));
								giveLayout.addView(k3);
								var k4 = new styleButton();
								k4.setText("Gold kit");
								k4.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Player.setArmorSlot(0, 314, 0);
										Player.setArmorSlot(1, 315, 0);
										Player.setArmorSlot(2, 316, 0);
										Player.setArmorSlot(3, 317, 0);
										clientMessage(client + "§eGold §fkit equipped check inventory!");
										addItemInventory(283, 1, 0);
										addItemInventory(284, 1, 0);
										addItemInventory(285, 1, 0);
										addItemInventory(286, 1, 0);
										addItemInventory(294, 1, 0);
									}
								}));
								giveLayout.addView(k4);
								var k5 = new styleButton();
								k5.setText("Diamond kit");
								k5.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Player.setArmorSlot(0, 310, 0);
										Player.setArmorSlot(1, 311, 0);
										Player.setArmorSlot(2, 312, 0);
										Player.setArmorSlot(3, 313, 0);
										clientMessage(client + "§bDiamond §fkit equipped check inventory!");
										addItemInventory(276, 1, 0);
										addItemInventory(277, 1, 0);
										addItemInventory(278, 1, 0);
										addItemInventory(279, 1, 0);
										addItemInventory(293, 1, 0);
									}
								}));
								giveLayout.addView(k5);
								var exit2Layout = new android.widget.LinearLayout(MainActivity);
								exit2Layout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back2 = new styleButton();
								back2.setText("Back");
								back2.setLayoutParams(params);
								back2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										give.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exit2Layout.addView(back2);
								var exit2 = new styleButton();
								exit2.setText("Exit");
								exit2.setLayoutParams(params);
								exit2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										give.dismiss();
										showMenuBtn();
									}
								});
								exit2Layout.addView(exit2);
								giveLayout.addView(exit2Layout);
								give = new android.widget.PopupWindow(giveLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) give.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) give.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								giveLayout1.setBackgroundDrawable(bg);
								giveLayout1.setPadding(20, 0, 20, 0);
								give.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				var morph = new styleButton();
				morph.setText("Morph menu");
				if (getLanguage == "it_IT") morph.setText("Menu trasformazioni");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") morph.setText("Menu de morph");
				if (getLanguage == "ko_KR") morph.setText("변신 메뉴");
				if (getLanguage == "de_DE") morph.setText("Morph-manager");
				if (getLanguage == "ja_JP") morph.setText("変身");
				if (getLanguage == "zh_CN") morph.setText("变形菜单");
				morph.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						morph_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(morph);

				function morph_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var morphLayout = new android.widget.LinearLayout(MainActivity);
								var morphScroll = new android.widget.ScrollView(MainActivity);
								var morphLayout1 = new android.widget.LinearLayout(MainActivity);
								morphLayout.setOrientation(1);
								morphLayout1.setOrientation(1);
								morphScroll.addView(morphLayout);
								morphLayout1.addView(morphScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										morph.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										morph.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								morphLayout.addView(exitLayout);
								var mne = new styleButton();
								mne.setText("Morph enhance");
								mne.setTextColor(android.graphics.Color.RED);
								if (morphEnhance == true) mne.setTextColor(android.graphics.Color.GREEN);
								mne.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										morphEnhance ? morphEnhance = false : morphEnhance = true;
										mne.setText("Morph enhance");
										if (morphEnhance == true) {
											mne.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "Morph enhance adds effects and more to what mob you morph into!");
											morphEnhance = true;
										}
										if (morphEnhance == false) {
											mne.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Morph enhance off");
											morphEnhance = false;
										}
									}
								}));
								morphLayout.addView(mne);
								var morphit = new styleButton();
								morphit.setText("Hit'n'morph");
								morphit.setTextColor(android.graphics.Color.RED);
								if (hitmorph == true) morphit.setTextColor(android.graphics.Color.GREEN);
								morphit.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										hitmorph ? hitmorph = false : hitmorph = true;
										morphit.setText("Hit'n'morph");
										if (hitmorph == true) {
											morphit.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "Hit'n'morph on, hit a mob to morph!");
											hitmorph = true;
										}
										if (hitmorph == false) {
											morphit.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Hit'n'morph off");
											hitmorph = false;
										}
									}
								}));
								morphLayout.addView(morphit);
								var mm1 = new styleButton();
								mm1.setText("Player");
								mm1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
										}
										Entity.setRenderType(Player.getEntity(), 27);
										/*Entity.setMobSkin(Player.getEntity(),"assets/mob/char.png");*/
									}
								}));
								morphLayout.addView(mm1);
								var mm = new styleButton();
								mm.setText("Bat");
								mm.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.2, 0.2, 0.2);
										}
										Entity.setRenderType(Player.getEntity(), 10);
										/*Entity.setMobSkin(Player.getEntity(),"mob/bat.png");*/
									}
								}));
								morphLayout.addView(mm);
								var mm0 = new styleButton();
								mm0.setText("Blaze");
								mm0.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
											Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 20);
										/*Entity.setMobSkin(Player.getEntity(),"mob/blaze.png");*/
									}
								}));
								morphLayout.addView(mm0);
								var mm2 = new styleButton();
								mm2.setText("Chicken");
								mm2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.4, 0.4, 0.4);
										}
										Entity.setRenderType(Player.getEntity(), 5);
										/*Entity.setMobSkin(Player.getEntity(),"mob/chicken.png");*/
									}
								}));
								morphLayout.addView(mm2);
								var mm3 = new styleButton();
								mm3.setText("Cow");
								mm3.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.8, 1.7, 0.8);
										}
										Entity.setRenderType(Player.getEntity(), 6);
										/*Entity.setMobSkin(Player.getEntity(),"mob/cow.png");*/
									}
								}));
								morphLayout.addView(mm3);
								var mm4 = new styleButton();
								mm4.setText("Creeper");
								mm4.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
										}
										Entity.setRenderType(Player.getEntity(), 24);
										/*Entity.setMobSkin(Player.getEntity(),"mob/creeper.png");*/
									}
								}));
								morphLayout.addView(mm4);
								var mn4 = new styleButton();
								mn4.setText("Ender dragon");
								mn4.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Entity.setRenderType(Player.getEntity(), 12);
									}
								}));
								morphLayout.addView(mn4);
								var mm5 = new styleButton();
								mm5.setText("Enderman");
								mm5.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.7, 3, 0.7);
										}
										Entity.setRenderType(Player.getEntity(), 26);
										/*Entity.setMobSkin(Player.getEntity(),"mob/enderman.tga");*/
									}
								}));
								morphLayout.addView(mm5);
								var mn1 = new styleButton();
								mn1.setText("Endermite");
								mn1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Entity.setRenderType(Player.getEntity(), 71);
									}
								}));
								morphLayout.addView(mn1);
								var mm6 = new styleButton();
								mm6.setText("Ghast");
								mm6.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 4, 4, 4);
											Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 19);
										/*Entity.setMobSkin(Player.getEntity(),"mob/ghast.png");*/
									}
								}));
								morphLayout.addView(mm6);
								var mmH = new styleButton();
								mmH.setText("Horse");
								mmH.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 54);
										/*Entity.setMobSkin(Player.getEntity(),"mob/horse.png");*/
									}
								}));
								morphLayout.addView(mmH);
								var mmH2 = new styleButton();
								mmH2.setText("Husk");
								mmH2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25 * 10, 0, false, true);
											Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 66);
										/*Entity.setMobSkin(Player.getEntity(),"mob/husk.png");*/
									}
								}));
								morphLayout.addView(mmH2);
								var mm7 = new styleButton();
								mm7.setText("Iron golem");
								mm7.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 1, 3, 1);
										}
										Entity.setRenderType(Player.getEntity(), 47);
										/*Entity.setMobSkin(Player.getEntity(),"mob/iron_golem.png");*/
									}
								}));
								morphLayout.addView(mm7);
								var mm8 = new styleButton();
								mm8.setText("Magma cube");
								mm8.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 2, 2, 2);
											Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25 * 10, 0, false, true);
											Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 18);
										/*Entity.setMobSkin(Player.getEntity(),"mob/magmacube.png");*/
									}
								}));
								morphLayout.addView(mm8);
								var mm9 = new styleButton();
								mm9.setText("Ocelot");
								mm9.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5, 0.5);
											Entity.addEffect(getPlayerEnt(), MobEffect.movementSpeed, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 48);
										/*Entity.setMobSkin(Player.getEntity(),"mob/cat/ocelot.png");*/
									}
								}));
								morphLayout.addView(mm9);
								var mm10 = new styleButton();
								mm10.setText("Pig");
								mm10.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.8, 1, 0.8);
										}
										Entity.setRenderType(Player.getEntity(), 8);
										/*Entity.setMobSkin(Player.getEntity(),"mob/pig.png");*/
									}
								}));
								morphLayout.addView(mm10);
								var mn2 = new styleButton();
								mn2.setText("Polar bear");
								mn2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Entity.setRenderType(Player.getEntity(), 13);
									}
								}));
								morphLayout.addView(mn2);
								var mmR = new styleButton();
								mmR.setText("Rabbit");
								mmR.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 52);
										/*Entity.setMobSkin(Player.getEntity(),"mob/rabbit.png");*/
									}
								}));
								morphLayout.addView(mmR);
								var mm11 = new styleButton();
								mm11.setText("Sheep");
								mm11.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.8, 1.7, 0.8);
										}
										Entity.setRenderType(Player.getEntity(), 9);
										/*Entity.setMobSkin(Player.getEntity(),"mob/sheep.tga");*/
									}
								}));
								morphLayout.addView(mm11);
								var mn3 = new styleButton();
								mn3.setText("Shulker");
								mn3.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Entity.setRenderType(Player.getEntity(), 50);
									}
								}));
								morphLayout.addView(mn3);
								var mm12 = new styleButton();
								mm12.setText("Silverfish");
								mm12.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.3, 0.4, 0.3);
											Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 23);
										/*Entity.setMobSkin(Player.getEntity(),"mob/silverfish.png");*/
									}
								}));
								morphLayout.addView(mm12);
								var mm13 = new styleButton();
								mm13.setText("Skeleton");
								mm13.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
											Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25 * 10, 0, false, true);
											Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 21);
										/*Entity.setMobSkin(Player.getEntity(),"mob/skeleton.png");*/
									}
								}));
								morphLayout.addView(mm13);
								var mm14 = new styleButton();
								mm14.setText("Slime");
								mm14.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 2, 2, 2);
											Entity.addEffect(getPlayerEnt(), MobEffect.jump, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 25);
										/*Entity.setMobSkin(Player.getEntity(),"mob/slime.png");*/
									}
								}));
								morphLayout.addView(mm14);
								var mm15 = new styleButton();
								mm15.setText("Snow golem");
								mm15.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.7, 2, 0.7);
										}
										Entity.setRenderType(Player.getEntity(), 49);
										/*Entity.setMobSkin(Player.getEntity(),"mob/snow_golem.png");*/
									}
								}));
								morphLayout.addView(mm15);
								var mmS = new styleButton();
								mmS.setText("Stray");
								mmS.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25 * 10, 0, false, true);
											Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 67);
										/*Entity.setMobSkin(Player.getEntity(),"mob/stray.png");*/
									}
								}));
								morphLayout.addView(mmS);
								var mm16 = new styleButton();
								mm16.setText("Spider");
								mm16.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 1, 0.4, 1);
										}
										Entity.setRenderType(Player.getEntity(), 22);
										/*Entity.setMobSkin(Player.getEntity(),"mob/spider.tga");*/
									}
								}));
								morphLayout.addView(mm16);
								var mm17 = new styleButton();
								mm17.setText("Squid");
								mm17.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5, 0.5);
											Entity.addEffect(getPlayerEnt(), MobEffect.waterBreathing, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 40);
										/*Entity.setMobSkin(Player.getEntity(),"mob/squid.png");*/
									}
								}));
								morphLayout.addView(mm17);
								var mm18 = new styleButton();
								mm18.setText("Villager");
								mm18.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
										}
										Entity.setRenderType(Player.getEntity(), 14);
										/*Entity.setMobSkin(Player.getEntity(),"mob/villager/villager.png");*/
									}
								}));
								morphLayout.addView(mm18);
								var mm19 = new styleButton();
								mm19.setText("Villager zombie");
								mm19.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
											Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25 * 10, 0, false, true);
											Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 44);
										/*Entity.setMobSkin(Player.getEntity(),"mob/zombieVillager.png");*/
									}
								}));
								morphLayout.addView(mm19);
								var mmW = new styleButton();
								mmW.setText("Witch");
								mmW.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Entity.setRenderType(Player.getEntity(), 53);
										/*Entity.setMobSkin(Player.getEntity(),"mob/witch.png");*/
									}
								}));
								morphLayout.addView(mmW);
								var mm20 = new styleButton();
								mm20.setText("Wolf");
								mm20.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.8, 0.7, 0.8);
										}
										Entity.setRenderType(Player.getEntity(), 11);
										/*Entity.setMobSkin(Player.getEntity(),"mob/wolf.png");*/
									}
								}));
								morphLayout.addView(mm20);
								var mn5 = new styleButton();
								mn5.setText("Wither");
								mn5.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Entity.setRenderType(Player.getEntity(), 63);
									}
								}));
								morphLayout.addView(mn5);
								var mmW2 = new styleButton();
								mmW2.setText("Wither skeleton");
								mmW2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 25 * 10, 0, false, true);
											Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25 * 10, 0, false, true);
											Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 68);
										/*Entity.setMobSkin(Player.getEntity(),"mob/witherSkeleton.tga");*/
									}
								}));
								morphLayout.addView(mmW2);
								var mm21 = new styleButton();
								mm21.setText("Zombie");
								mm21.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
											Entity.addEffect(getPlayerEnt(), MobEffect.hunger, 25 * 10, 0, false, true);
											Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 16);
										/*Entity.setMobSkin(Player.getEntity(),"mob/zombie.png");*/
									}
								}));
								morphLayout.addView(mm21);
								var mm22 = new styleButton();
								mm22.setText("Zombie pigman");
								mm22.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										if (morphEnhance == true) {
											Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
											Entity.addEffect(getPlayerEnt(), MobEffect.fireResistance, 25 * 10, 0, false, true);
										}
										Entity.setRenderType(Player.getEntity(), 17);
										/*Entity.setMobSkin(Player.getEntity(),"mob/pigzombie.png*/
									}
								}));
								morphLayout.addView(mm22);
								var exit2Layout = new android.widget.LinearLayout(MainActivity);
								exit2Layout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back2 = new styleButton();
								back2.setText("Back");
								back2.setLayoutParams(params);
								back2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										morph.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exit2Layout.addView(back2);
								var exit2 = new styleButton();
								exit2.setText("Exit");
								exit2.setLayoutParams(params);
								exit2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										morph.dismiss();
										showMenuBtn();
									}
								});
								exit2Layout.addView(exit2);
								morphLayout.addView(exit2Layout);
								morph = new android.widget.PopupWindow(morphLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) morph.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) morph.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								morphLayout1.setBackgroundDrawable(bg);
								morphLayout1.setPadding(20, 0, 20, 0);
								morph.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				var nuke = new styleButton();
				nuke.setText("Nuke menu");
				if (getLanguage == "it_IT") nuke.setText("Menu esplosioni");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") nuke.setText("Menu de bomba nuclear");
				if (getLanguage == "ko_KR") nuke.setText("핵폭탄 메뉴");
				if (getLanguage == "de_DE") nuke.setText("Vernichtungs menu");
				if (getLanguage == "ja_JP") nuke.setText("爆発メニュー");
				if (getLanguage == "zh_CN") nuke.setText("爆炸菜单");
				nuke.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						nuke_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(nuke);

				function nuke_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var nukeLayout = new android.widget.LinearLayout(MainActivity);
								var nukeScroll = new android.widget.ScrollView(MainActivity);
								var nukeLayout1 = new android.widget.LinearLayout(MainActivity);
								nukeLayout.setOrientation(1);
								nukeLayout1.setOrientation(1);
								nukeScroll.addView(nukeLayout);
								nukeLayout1.addView(nukeScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										nuke.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										nuke.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								nukeLayout.addView(exitLayout);
								var tn = new styleButton();
								tn.setText("Tap nuke");
								tn.setTextColor(android.graphics.Color.RED);
								if (tapnuke == true) tn.setTextColor(android.graphics.Color.GREEN);
								tn.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										tapnuke ? tapnuke = false : tapnuke = true;
										tn.setText("Tap nuke");
										if (tapnuke == true) {
											tn.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "Tap nuke on");
											tapnuke = true;
										}
										if (tapnuke == false) {
											tn.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Tap nuke off");
											tapnuke = false;
										}
									}
								}));
								nukeLayout.addView(tn);
								var ann = new styleButton();
								ann.setText("Auto nuke");
								ann.setTextColor(android.graphics.Color.RED);
								if (autonuke == true) ann.setTextColor(android.graphics.Color.GREEN);
								ann.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										autonuke ? autonuke = false : autonuke = true;
										ann.setText("Auto nuke");
										if (autonuke == true) {
											ann.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "Auto nuke on");
											autonuke = true;
										}
										if (autonuke == false) {
											ann.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Auto nuke off");
											autonuke = false;
										}
									}
								}));
								nukeLayout.addView(ann);
								var n1 = new styleButton();
								n1.setText("Nuke 1%");
								n1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 1);
									}
								}));
								nukeLayout.addView(n1);
								var n2 = new styleButton();
								n2.setText("Nuke 5%");
								n2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 5);
									}
								}));
								nukeLayout.addView(n2);
								var n3 = new styleButton();
								n3.setText("Nuke 10%");
								n3.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 10);
									}
								}));
								nukeLayout.addView(n3);
								var n4 = new styleButton();
								n4.setText("Nuke 15%");
								n4.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 15);
									}
								}));
								nukeLayout.addView(n4);
								var n5 = new styleButton();
								n5.setText("Nuke 20%");
								n5.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 20);
									}
								}));
								nukeLayout.addView(n5);
								var n6 = new styleButton();
								n6.setText("Nuke 25%");
								n6.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 25);
									}
								}));
								nukeLayout.addView(n6);
								var n7 = new styleButton();
								n7.setText("Nuke 30%");
								n7.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 30);
									}
								}));
								nukeLayout.addView(n7);
								var n8 = new styleButton();
								n8.setText("Nuke 35%");
								n8.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 35);
									}
								}));
								nukeLayout.addView(n8);
								var n9 = new styleButton();
								n9.setText("Nuke 40%");
								n9.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 40);
									}
								}));
								nukeLayout.addView(n9);
								var n10 = new styleButton();
								n10.setText("Nuke 45%");
								n10.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 45);
									}
								}));
								nukeLayout.addView(n10);
								var n11 = new styleButton();
								n11.setText("Nuke 50%");
								n11.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										explode(getPlayerX(), getPlayerY(), getPlayerZ(), 50);
									}
								}));
								nukeLayout.addView(n11);
								var cn = new styleButton();
								cn.setText("Custom nuke");
								cn.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										nuke.dismiss();
										newn();
									}
								}));
								nukeLayout.addView(cn);
								var exit2Layout = new android.widget.LinearLayout(MainActivity);
								exit2Layout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back2 = new styleButton();
								back2.setText("Back");
								back2.setLayoutParams(params);
								back2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										nuke.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exit2Layout.addView(back2);
								var exit2 = new styleButton();
								exit2.setText("Exit");
								exit2.setLayoutParams(params);
								exit2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										nuke.dismiss();
										showMenuBtn();
									}
								});
								exit2Layout.addView(exit2);
								nukeLayout.addView(exit2Layout);
								nuke = new android.widget.PopupWindow(nukeLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) nuke.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) nuke.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								nukeLayout1.setBackgroundDrawable(bg);
								nukeLayout1.setPadding(20, 0, 20, 0);
								nuke.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				var particle = new styleButton();
				particle.setText("Particle menu");
				if (getLanguage == "it_IT") particle.setText("Menu particelle");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") particle.setText("Menu de partícula");
				if (getLanguage == "ko_KR") particle.setText("파티클 메뉴");
				if (getLanguage == "de_DE") particle.setText("Partikel menu");
				if (getLanguage == "ja_JP") particle.setText("パーティクルメニュー");
				if (getLanguage == "nl_NL") particle.setText("Partikel menu");
				if (getLanguage == "zh_CN") particle.setText("粒子菜单");
				particle.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						particle_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(particle);

				function particle_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var particleLayout = new android.widget.LinearLayout(MainActivity);
								var particleScroll = new android.widget.ScrollView(MainActivity);
								var particleLayout1 = new android.widget.LinearLayout(MainActivity);
								particleLayout.setOrientation(1);
								particleLayout1.setOrientation(1);
								particleScroll.addView(particleLayout);
								particleLayout1.addView(particleScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										particle.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										particle.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								particleLayout.addView(exitLayout);
								var hitpart = new styleButton();
								hitpart.setText("Hit particles");
								hitpart.setTextColor(android.graphics.Color.RED);
								if (hitparticles == true) hitpart.setTextColor(android.graphics.Color.GREEN);
								hitpart.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										hitparticles ? hitparticles = false : hitparticles = true;
										hitpart.setText("Hit particles");
										if (hitparticles == true) {
											hitpart.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "Hit particles enables the selected particle to show when you hit a player~");
											hitparticles = true;
										}
										if (hitparticles == false) {
											hitpart.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Hit particles off");
											hitparticles = false;
										}
									}
								}));
								particleLayout.addView(hitpart);
								var parti2l = new styleButton();
								parti2l.setText("Tap particles");
								parti2l.setTextColor(android.graphics.Color.RED);
								if (tapParti == true) parti2l.setTextColor(android.graphics.Color.GREEN);
								parti2l.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										tapParti ? tapParti = false : tapParti = true;
										parti2l.setText("Tap particles");
										if (tapParti == true) {
											parti2l.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "Tap particles on, enable a particle!");
											tapParti = true;
										}
										if (tapParti == false) {
											parti2l.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Tap particles off");
											tapParti = false;
										}
									}
								}));
								particleLayout.addView(parti2l);
								var p1 = new styleButton();
								p1.setText("Angry villager: " + (particle1 ? "on" : "off"));
								p1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle1 ? particle1 = false : particle1 = true;
										p1.setText("Angry villager: " + (particle1 ? "on" : "off"));
										if (particle1 == true) {
											clientMessage(client + "§7Particle 1 is true");
										}
										if (particle1 == false) {
											clientMessage(client + "§7Particle 1 is false");
										}
									}
								}));
								particleLayout.addView(p1);
								var p2 = new styleButton();
								p2.setText("bubble: " + (particle2 ? "on" : "off"));
								p2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle2 ? particle2 = false : particle2 = true;
										p2.setText("bubble: " + (particle2 ? "on" : "off"));
										if (particle2 == true) {
											clientMessage(client + "§7Particle 2 is true");
										}
										if (particle2 == false) {
											clientMessage(client + "§7Particle 2 is false");
										}
									}
								}));
								particleLayout.addView(p2);
								var p3 = new styleButton();
								p3.setText("cloud: " + (particle3 ? "on" : "off"));
								p3.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle3 ? particle3 = false : particle3 = true;
										p3.setText("cloud: " + (particle3 ? "on" : "off"));
										if (particle3 == true) {
											clientMessage(client + "§7Particle 3 is true");
										}
										if (particle3 == false) {
											clientMessage(client + "§7Particle 3 is false");
										}
									}
								}));
								particleLayout.addView(p3);
								var p4 = new styleButton();
								p4.setText("crit: " + (particle4 ? "on" : "off"));
								p4.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle4 ? particle4 = false : particle4 = true;
										p4.setText("crit: " + (particle4 ? "on" : "off"));
										if (particle4 == true) {
											clientMessage(client + "§7Particle 4 is true");
										}
										if (particle4 == false) {
											clientMessage(client + "§7Particle 4 is false");
										}
									}
								}));
								particleLayout.addView(p4);
								var p5 = new styleButton();
								p5.setText("drip lava: " + (particle5 ? "on" : "off"));
								p5.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle5 ? particle5 = false : particle5 = true;
										p5.setText("drip lava: " + (particle5 ? "on" : "off"));
										if (particle5 == true) {
											clientMessage(client + "§7Particle 5 is true");
										}
										if (particle5 == false) {
											clientMessage(client + "§7Particle 5 is false");
										}
									}
								}));
								particleLayout.addView(p5);
								var p6 = new styleButton();
								p6.setText("drip water: " + (particle6 ? "on" : "off"));
								p6.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle6 ? particle6 = false : particle6 = true;
										p6.setText("drip water: " + (particle6 ? "on" : "off"));
										if (particle6 == true) {
											clientMessage(client + "§7Particle 6 is true");
										}
										if (particle6 == false) {
											clientMessage(client + "§7Particle 6 is false");
										}
									}
								}));
								particleLayout.addView(p6);
								var p7 = new styleButton();
								p7.setText("enchanting table: " + (particle7 ? "on" : "off"));
								p7.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle7 ? particle7 = false : particle7 = true;
										p7.setText("enchanting table: " + (particle7 ? "on" : "off"));
										if (particle7 == true) {
											clientMessage(client + "§7Particle 7 is true");
										}
										if (particle7 == false) {
											clientMessage(client + "§7Particle 7 is false");
										}
									}
								}));
								particleLayout.addView(p7);
								var p8 = new styleButton();
								p8.setText("falling dust: " + (particle8 ? "on" : "off"));
								p8.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle8 ? particle8 = false : particle8 = true;
										p8.setText("falling dust: " + (particle8 ? "on" : "off"));
										if (particle8 == true) {
											clientMessage(client + "§7Particle 8 is true");
										}
										if (particle8 == false) {
											clientMessage(client + "§7Particle 8 is false");
										}
									}
								}));
								particleLayout.addView(p8);
								var p9 = new styleButton();
								p9.setText("flame: " + (particle9 ? "on" : "off"));
								p9.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle9 ? particle9 = false : particle9 = true;
										p9.setText("flame: " + (particle9 ? "on" : "off"));
										if (particle9 == true) {
											clientMessage(client + "§7Particle 9 is true");
										}
										if (particle9 == false) {
											clientMessage(client + "§7Particle 9 is false");
										}
									}
								}));
								particleLayout.addView(p9);
								var p10 = new styleButton();
								p10.setText("Happy villager: " + (particle10 ? "on" : "off"));
								p10.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle10 ? particle10 = false : particle10 = true;
										p10.setText("Happy villager: " + (particle10 ? "on" : "off"));
										if (particle10 == true) {
											clientMessage(client + "§7Particle 10 is true");
										}
										if (particle10 == false) {
											clientMessage(client + "§7Particle 10 is false");
										}
									}
								}));
								particleLayout.addView(p10);
								var p11 = new styleButton();
								p11.setText("heart: " + (particle11 ? "on" : "off"));
								p11.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle11 ? particle11 = false : particle11 = true;
										p11.setText("heart: " + (particle11 ? "on" : "off"));
										if (particle11 == true) {
											clientMessage(client + "§7Particle 11 is true");
										}
										if (particle11 == false) {
											clientMessage(client + "§7Particle 11 is false");
										}
									}
								}));
								particleLayout.addView(p11);
								var p12 = new styleButton();
								p12.setText("Huge explosion: " + (particle12 ? "on" : "off"));
								p12.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle12 ? particle12 = false : particle12 = true;
										p12.setText("Huge explosion: " + (particle12 ? "on" : "off"));
										if (particle12 == true) {
											clientMessage(client + "§7Particle 12 is true");
										}
										if (particle12 == false) {
											clientMessage(client + "§7Particle 12 is false");
										}
									}
								}));
								particleLayout.addView(p12);
								var p13 = new styleButton();
								p13.setText("Explosion seed: " + (particle13 ? "on" : "off"));
								p13.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle13 ? particle13 = false : particle13 = true;
										p13.setText("Explosion seed: " + (particle13 ? "on" : "off"));
										if (particle13 == true) {
											clientMessage(client + "§7Particle 13 is true");
										}
										if (particle13 == false) {
											clientMessage(client + "§7Particle 13 is false");
										}
									}
								}));
								particleLayout.addView(p13);
								var p14 = new styleButton();
								p14.setText("ink: " + (particle14 ? "on" : "off"));
								p14.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle14 ? particle14 = false : particle14 = true;
										p14.setText("ink: " + (particle14 ? "on" : "off"));
										if (particle14 == true) {
											clientMessage(client + "§7Particle 14 is true");
										}
										if (particle14 == false) {
											clientMessage(client + "§7Particle 14 is false");
										}
									}
								}));
								particleLayout.addView(p14);
								var p15 = new styleButton();
								p15.setText("Item break: " + (particle15 ? "on" : "off"));
								p15.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle15 ? particle15 = false : particle15 = true;
										p15.setText("Item break: " + (particle15 ? "on" : "off"));
										if (particle15 == true) {
											clientMessage(client + "§7Particle 15 is true");
										}
										if (particle15 == false) {
											clientMessage(client + "§7Particle 15 is false");
										}
									}
								}));
								particleLayout.addView(p15);
								var p16 = new styleButton();
								p16.setText("Lava: " + (particle16 ? "on" : "off"));
								p16.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle16 ? particle16 = false : particle16 = true;
										p16.setText("Lava: " + (particle16 ? "on" : "off"));
										if (particle16 == true) {
											clientMessage(client + "§7Particle 16 is true");
										}
										if (particle16 == false) {
											clientMessage(client + "§7Particle 16 is false");
										}
									}
								}));
								particleLayout.addView(p16);
								var p17 = new styleButton();
								p17.setText("Mob flame: " + (particle17 ? "on" : "off"));
								p17.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle17 ? particle17 = false : particle17 = true;
										p17.setText("Mob flame: " + (particle17 ? "on" : "off"));
										if (particle17 == true) {
											clientMessage(client + "§7Particle 17 is true");
										}
										if (particle17 == false) {
											clientMessage(client + "§7Particle 17 is false");
										}
									}
								}));
								particleLayout.addView(p17);
								var p18 = new styleButton();
								p18.setText("Note: " + (particle18 ? "on" : "off"));
								p18.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle18 ? particle18 = false : particle18 = true;
										p18.setText("Note: " + (particle18 ? "on" : "off"));
										if (particle18 == true) {
											clientMessage(client + "§7Particle 18 is true");
										}
										if (particle18 == false) {
											clientMessage(client + "§7Particle 18 is false");
										}
									}
								}));
								particleLayout.addView(p18);
								var p19 = new styleButton();
								p19.setText("Portal: " + (particle19 ? "on" : "off"));
								p19.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle19 ? particle19 = false : particle19 = true;
										p19.setText("Portal: " + (particle19 ? "on" : "off"));
										if (particle19 == true) {
											clientMessage(client + "§7Particle 19 is true");
										}
										if (particle19 == false) {
											clientMessage(client + "§7Particle 19 is false");
										}
									}
								}));
								particleLayout.addView(p19);
								var p20 = new styleButton();
								p20.setText("Rain splash: " + (particle20 ? "on" : "off"));
								p20.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle20 ? particle20 = false : particle20 = true;
										p20.setText("Rain splash: " + (particle20 ? "on" : "off"));
										if (particle20 == true) {
											clientMessage(client + "§7Particle 20 is true");
										}
										if (particle20 == false) {
											clientMessage(client + "§7Particle 20 is false");
										}
									}
								}));
								particleLayout.addView(p20);
								var p21 = new styleButton();
								p21.setText("Redstone: " + (particle21 ? "on" : "off"));
								p21.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle21 ? particle21 = false : particle21 = true;
										p21.setText("Redstone: " + (particle21 ? "on" : "off"));
										if (particle21 == true) {
											clientMessage(client + "§7Particle 21 is true");
										}
										if (particle21 == false) {
											clientMessage(client + "§7Particle 21 is false");
										}
									}
								}));
								particleLayout.addView(p21);
								var p22 = new styleButton();
								p22.setText("Slime: " + (particle22 ? "on" : "off"));
								p22.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle22 ? particle22 = false : particle22 = true;
										p22.setText("Slime: " + (particle22 ? "on" : "off"));
										if (particle22 == true) {
											clientMessage(client + "§7Particle 22 is true");
										}
										if (particle22 == false) {
											clientMessage(client + "§7Particle 22 is false");
										}
									}
								}));
								particleLayout.addView(p22);
								var p23 = new styleButton();
								p23.setText("Smoke: " + (particle23 ? "on" : "off"));
								p23.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle23 ? particle23 = false : particle23 = true;
										p23.setText("Smoke: " + (particle23 ? "on" : "off"));
										if (particle23 == true) {
											clientMessage(client + "§7Particle 23 is true");
										}
										if (particle23 == false) {
											clientMessage(client + "§7Particle 23 is false");
										}
									}
								}));
								particleLayout.addView(p23);
								var p24 = new styleButton();
								p24.setText("Snow ball poof: " + (particle24 ? "on" : "off"));
								p24.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle24 ? particle24 = false : particle24 = true;
										p24.setText("Snow ball poof: " + (particle24 ? "on" : "off"));
										if (particle24 == true) {
											clientMessage(client + "§7Particle 24 is true");
										}
										if (particle24 == false) {
											clientMessage(client + "§7Particle 24 is false");
										}
									}
								}));
								particleLayout.addView(p24);
								var p25 = new styleButton();
								p25.setText("Spell: " + (particle25 ? "on" : "off"));
								p25.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle25 ? particle25 = false : particle25 = true;
										p25.setText("Spell: " + (particle25 ? "on" : "off"));
										if (particle25 == true) {
											clientMessage(client + "§7Particle 25 is true");
										}
										if (particle25 == false) {
											clientMessage(client + "§7Particle 25 is false");
										}
									}
								}));
								particleLayout.addView(p25);
								var p26 = new styleButton();
								p26.setText("Splash: " + (particle26 ? "on" : "off"));
								p26.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle26 ? particle26 = false : particle26 = true;
										p26.setText("Splash: " + (particle26 ? "on" : "off"));
										if (particle26 == true) {
											clientMessage(client + "§7Particle 26 is true");
										}
										if (particle26 == false) {
											clientMessage(client + "§7Particle 26 is false");
										}
									}
								}));
								particleLayout.addView(p26);
								var p27 = new styleButton();
								p27.setText("Suspended town: " + (particle27 ? "on" : "off"));
								p27.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle27 ? particle27 = false : particle27 = true;
										p27.setText("Suspended town: " + (particle27 ? "on" : "off"));
										if (particle27 == true) {
											clientMessage(client + "§7Particle 27 is true");
										}
										if (particle27 == false) {
											clientMessage(client + "§7Particle 27 is false");
										}
									}
								}));
								particleLayout.addView(p27);
								var p28 = new styleButton();
								p28.setText("Terrain: " + (particle28 ? "on" : "off"));
								p28.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle28 ? particle28 = false : particle28 = true;
										p28.setText("Terrain: " + (particle28 ? "on" : "off"));
										if (particle28 == true) {
											clientMessage(client + "§7Particle 28 is true");
										}
										if (particle28 == false) {
											clientMessage(client + "§7Particle 28 is false");
										}
									}
								}));
								particleLayout.addView(p28);
								var p29 = new styleButton();
								p29.setText("Water wake: " + (particle29 ? "on" : "off"));
								p29.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle29 ? particle29 = false : particle29 = true;
										p29.setText("Water wake: " + (particle29 ? "on" : "off"));
										if (particle29 == true) {
											clientMessage(client + "§7Particle 29 is true");
										}
										if (particle29 == false) {
											clientMessage(client + "§7Particle 29 is false");
										}
									}
								}));
								particleLayout.addView(p29);
								var p30 = new styleButton();
								p30.setText("Large explosion: " + (particle30 ? "on" : "off"));
								p30.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle30 ? particle30 = false : particle30 = true;
										p30.setText("Large explosion: " + (particle30 ? "on" : "off"));
										if (particle30 == true) {
											clientMessage(client + "§7Particle 30 is true");
										}
										if (particle30 == false) {
											clientMessage(client + "§7Particle 30 is false");
										}
									}
								}));
								particleLayout.addView(p30);
								var p31 = new styleButton();
								p31.setText("Spell 2: " + (particle31 ? "on" : "off"));
								p31.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle31 ? particle31 = false : particle31 = true;
										p31.setText("Spell 2: " + (particle31 ? "on" : "off"));
										if (particle31 == true) {
											clientMessage(client + "§7Particle 31 is true");
										}
										if (particle31 == false) {
											clientMessage(client + "§7Particle 31 is false");
										}
									}
								}));
								particleLayout.addView(p31);
								var p32 = new styleButton();
								p32.setText("Spell 3: " + (particle32 ? "on" : "off"));
								p32.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle32 ? particle32 = false : particle32 = true;
										p32.setText("Spell 3: " + (particle32 ? "on" : "off"));
										if (particle32 == true) {
											clientMessage(client + "§7Particle 32 is true");
										}
										if (particle32 == false) {
											clientMessage(client + "§7Particle 32 is false");
										}
									}
								}));
								particleLayout.addView(p32);
								var p33 = new styleButton();
								p33.setText("Carrot boost: " + (particle33 ? "on" : "off"));
								p33.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle33 ? particle33 = false : particle33 = true;
										p33.setText("Carrot boost: " + (particle33 ? "on" : "off"));
										if (particle33 == true) {
											clientMessage(client + "§7Particle 33 is true");
										}
										if (particle33 == false) {
											clientMessage(client + "§7Particle 33 is false");
										}
									}
								}));
								particleLayout.addView(p33);
								var p34 = new styleButton();
								p34.setText("Witch spell: " + (particle34 ? "on" : "off"));
								p34.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										particle34 ? particle34 = false : particle34 = true;
										p34.setText("Witch spell: " + (particle34 ? "on" : "off"));
										if (particle34 == true) {
											clientMessage(client + "§7Particle 34 is true");
										}
										if (particle34 == false) {
											clientMessage(client + "§7Particle 34 is false");
										}
									}
								}));
								particleLayout.addView(p34);
								var exit2Layout = new android.widget.LinearLayout(MainActivity);
								exit2Layout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back2 = new styleButton();
								back2.setText("Back");
								back2.setLayoutParams(params);
								back2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										particle.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exit2Layout.addView(back2);
								var exit2 = new styleButton();
								exit2.setText("Exit");
								exit2.setLayoutParams(params);
								exit2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										particle.dismiss();
										showMenuBtn();
									}
								});
								exit2Layout.addView(exit2);
								particleLayout.addView(exit2Layout);
								particle = new android.widget.PopupWindow(particleLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) particle.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) particle.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								particleLayout1.setBackgroundDrawable(bg);
								particleLayout1.setPadding(20, 0, 20, 0);
								particle.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				var spawn = new styleButton();
				spawn.setText("Spawn menu");
				if (getLanguage == "it_IT") spawn.setText("Menu spawner");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") spawn.setText("Menu de spawn");
				if (getLanguage == "ko_KR") spawn.setText("소환 메뉴");
				if (getLanguage == "de_DE") spawn.setText("Spawn-manager");
				if (getLanguage == "ja_JP") spawn.setText("スポーンメニュー");
				if (getLanguage == "zh_CN") spawn.setText("生成菜单");
				spawn.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						spawn_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(spawn);

				function spawn_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var spawnLayout = new android.widget.LinearLayout(MainActivity);
								var spawnScroll = new android.widget.ScrollView(MainActivity);
								var spawnLayout1 = new android.widget.LinearLayout(MainActivity);
								spawnLayout.setOrientation(1);
								spawnLayout1.setOrientation(1);
								spawnScroll.addView(spawnLayout);
								spawnLayout1.addView(spawnScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										spawn.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										spawn.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								spawnLayout.addView(exitLayout);
								var spawn10 = new styleButton();
								spawn10.setText("Spawn Chicken");
								spawn10.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 10);
									}
								}));
								spawnLayout.addView(spawn10);
								var spawn11 = new styleButton();
								spawn11.setText("Spawn Cow");
								spawn11.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11);
									}
								}));
								spawnLayout.addView(spawn11);
								var spawn12 = new styleButton();
								spawn12.setText("Spawn Pig");
								spawn12.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 12);
									}
								}));
								spawnLayout.addView(spawn12);
								var spawn13 = new styleButton();
								spawn13.setText("Spawn Sheep");
								spawn13.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 13);
									}
								}));
								spawnLayout.addView(spawn13);
								var spawn14 = new styleButton();
								spawn14.setText("Spawn Wolf");
								spawn14.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 14);
									}
								}));
								spawnLayout.addView(spawn14);
								var spawn15 = new styleButton();
								spawn15.setText("Spawn Villager");
								spawn15.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 15);
									}
								}));
								spawnLayout.addView(spawn15);
								var spawn16 = new styleButton();
								spawn16.setText("Spawn Mushrom cow");
								spawn16.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 16);
									}
								}));
								spawnLayout.addView(spawn16);
								var spawn17 = new styleButton();
								spawn17.setText("Spawn Squid");
								spawn17.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 17);
									}
								}));
								spawnLayout.addView(spawn17);
								var spawn18 = new styleButton();
								spawn18.setText("Spawn Rabbit");
								spawn18.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 18);
									}
								}));
								spawnLayout.addView(spawn18);
								var spawn19 = new styleButton();
								spawn19.setText("Spawn Bat");
								spawn19.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 19);
									}
								}));
								spawnLayout.addView(spawn19);
								var spawn20 = new styleButton();
								spawn20.setText("Spawn Iron golem");
								spawn20.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 20);
									}
								}));
								spawnLayout.addView(spawn20);
								var spawn21 = new styleButton();
								spawn21.setText("Spawn Snow golem");
								spawn21.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 21);
									}
								}));
								spawnLayout.addView(spawn21);
								var spawn22 = new styleButton();
								spawn22.setText("Spawn Ocelot");
								spawn22.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 22);
									}
								}));
								spawnLayout.addView(spawn22);
								var spaw28 = new styleButton();
								spaw28.setText("Spawn polar bear");
								spaw28.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 28);
									}
								}));
								spawnLayout.addView(spaw28);
								var spawn32 = new styleButton();
								spawn32.setText("Spawn Zombie");
								spawn32.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 32);
									}
								}));
								spawnLayout.addView(spawn32);
								var spawn33 = new styleButton();
								spawn33.setText("Spawn Creeper");
								spawn33.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 33);
									}
								}));
								spawnLayout.addView(spawn33);
								var spawn34 = new styleButton();
								spawn34.setText("Spawn Skeleton");
								spawn34.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 34);
									}
								}));
								spawnLayout.addView(spawn34);
								var spawn35 = new styleButton();
								spawn35.setText("Spawn Spider");
								spawn35.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 35);
									}
								}));
								spawnLayout.addView(spawn35);
								var spawn36 = new styleButton();
								spawn36.setText("Spawn Zombie pigman");
								spawn36.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 36);
									}
								}));
								spawnLayout.addView(spawn36);
								var spawn37 = new styleButton();
								spawn37.setText("Spawn Slime");
								spawn37.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 37);
									}
								}));
								spawnLayout.addView(spawn37);
								var spawn38 = new styleButton();
								spawn38.setText("Spawn Enderman");
								spawn38.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 38);
									}
								}));
								spawnLayout.addView(spawn38);
								var spawn39 = new styleButton();
								spawn39.setText("Spawn Silverfish");
								spawn39.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 39);
									}
								}));
								spawnLayout.addView(spawn39);
								var spawn40 = new styleButton();
								spawn40.setText("Spawn Cave spider");
								spawn40.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 40);
									}
								}));
								spawnLayout.addView(spawn40);
								var spawn41 = new styleButton();
								spawn41.setText("Spawn Ghast");
								spawn41.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 41);
									}
								}));
								spawnLayout.addView(spawn41);
								var spawn42 = new styleButton();
								spawn42.setText("Spawn Magma cube");
								spawn42.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 42);
									}
								}));
								spawnLayout.addView(spawn42);
								var spawn43 = new styleButton();
								spawn43.setText("Spawn Blaze");
								spawn43.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 43);
									}
								}));
								spawnLayout.addView(spawn43);
								var spawn44 = new styleButton();
								spawn44.setText("Spawn Zombie villager");
								spawn44.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 44);
									}
								}));
								spawnLayout.addView(spawn44);
								var spawn66 = new styleButton();
								spawn66.setText("Spawn Witch");
								spawn66.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 45);
									}
								}));
								spawnLayout.addView(spawn66);
								var spawn68 = new styleButton();
								spawn68.setText("Spawn Guardian");
								spawn68.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 49);
									}
								}));
								spawnLayout.addView(spawn68);
								var spawn70 = new styleButton();
								spawn70.setText("Spawn Horse");
								spawn70.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 23);
									}
								}));
								spawnLayout.addView(spawn70);
								var spawn71 = new styleButton();
								spawn71.setText("Spawn Donkey");
								spawn71.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 24);
									}
								}));
								spawnLayout.addView(spawn71);
								var spawn72 = new styleButton();
								spawn72.setText("Spawn Mule");
								spawn72.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 25);
									}
								}));
								spawnLayout.addView(spawn72);
								var spawn73 = new styleButton();
								spawn73.setText("Spawn Skeleton Horse");
								spawn73.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 26);
									}
								}));
								spawnLayout.addView(spawn73);
								var spawn74 = new styleButton();
								spawn74.setText("Spawn Zombie Horse");
								spawn74.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 27);
									}
								}));
								spawnLayout.addView(spawn74);
								var spawn75 = new styleButton();
								spawn75.setText("Spawn Wither skeleton");
								spawn75.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 48);
									}
								}));
								spawnLayout.addView(spawn75);
								var spawn76 = new styleButton();
								spawn76.setText("Spawn Stray");
								spawn76.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 46);
									}
								}));
								spawnLayout.addView(spawn76);
								var spawn77 = new styleButton();
								spawn77.setText("Spawn Husk");
								spawn77.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 47);
									}
								}));
								spawnLayout.addView(spawn77);
								var spawn78 = new styleButton();
								spawn78.setText("Spawn Elder guardian");
								spawn78.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 50);
									}
								}));
								spawnLayout.addView(spawn78);
								var spawn79 = new styleButton();
								spawn79.setText("Spawn Wither");
								spawn79.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 52);
									}
								}));
								spawnLayout.addView(spawn79);
								var spawn80 = new styleButton();
								spawn80.setText("Spawn NPC");
								spawn80.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 51);
									}
								}));
								spawnLayout.addView(spawn80);
								var spawnP = new styleButton();
								spawnP.setText("Spawn Player");
								spawnP.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 63);
									}
								}));
								spawnLayout.addView(spawnP);
								var spawnT = new styleButton();
								spawnT.setText("Spawn Item");
								spawnT.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 64);
									}
								}));
								spawnLayout.addView(spawnT);
								var spaw54 = new styleButton();
								spaw54.setText("Spawn shulker");
								spaw54.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 54);
									}
								}));
								spawnLayout.addView(spaw54);
								var spaw55 = new styleButton();
								spaw55.setText("Spawn endermite");
								spaw55.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 55);
									}
								}));
								spawnLayout.addView(spaw55);
								var spawn53 = new styleButton();
								spawn53.setText("Spawn ender dragon");
								spawn53.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 53);
									}
								}));
								spawnLayout.addView(spawn53);
								var spawn29 = new styleButton();
								spawn29.setText("Spawn Llama");
								spawn29.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 29);
									}
								}));
								spawnLayout.addView(spawn29);
								var spawn57 = new styleButton();
								spawn57.setText("Spawn Vindicator");
								spawn57.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 57);
									}
								}));
								spawnLayout.addView(spawn57);
								var spawn104 = new styleButton();
								spawn104.setText("Spawn Evoker");
								spawn104.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 104);
									}
								}));
								spawnLayout.addView(spawn104);
								var spawn105 = new styleButton();
								spawn105.setText("Spawn Vex");
								spawn105.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 105);
									}
								}));
								spawnLayout.addView(spawn105);
								var exit2Layout = new android.widget.LinearLayout(MainActivity);
								exit2Layout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back2 = new styleButton();
								back2.setText("Back");
								back2.setLayoutParams(params);
								back2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										spawn.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exit2Layout.addView(back2);
								var exit2 = new styleButton();
								exit2.setText("Exit");
								exit2.setLayoutParams(params);
								exit2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										spawn.dismiss();
										showMenuBtn();
									}
								});
								exit2Layout.addView(exit2);
								spawnLayout.addView(exit2Layout);
								spawn = new android.widget.PopupWindow(spawnLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) spawn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) spawn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								spawnLayout1.setBackgroundDrawable(bg);
								spawnLayout1.setPadding(20, 0, 20, 0);
								spawn.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				var speed = new styleButton();
				speed.setText("Speed menu");
				if (getLanguage == "it_IT") speed.setText("Menu velocita");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") speed.setText("Menu de velocidad");
				if (getLanguage == "ko_KR") speed.setText("속도 메뉴");
				if (getLanguage == "de_DE") speed.setText("Schnelligkeits menu");
				if (getLanguage == "ja_JP") speed.setText("ゲームスピードメニュー");
				if (getLanguage == "nl_NL") speed.setText("Snelheid menu");
				if (getLanguage == "zh_CN") speed.setText("速度菜单");
				speed.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						speed_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(speed);

				function speed_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var speedLayout = new android.widget.LinearLayout(MainActivity);
								var speedScroll = new android.widget.ScrollView(MainActivity);
								var speedLayout1 = new android.widget.LinearLayout(MainActivity);
								speedLayout.setOrientation(1);
								speedLayout1.setOrientation(1);
								speedScroll.addView(speedLayout);
								speedLayout1.addView(speedScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										speed.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										speed.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								speedLayout.addView(exitLayout);
								var d1 = new styleButton();
								d1.setText("Normal speed");
								d1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(20);
									}
								}));
								speedLayout.addView(d1);
								var d0 = new styleButton();
								d0.setText("Speed 0%");
								d0.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(0);
									}
								}));
								speedLayout.addView(d0);
								var d2 = new styleButton();
								d2.setText("Speed 5%");
								d2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(5);
									}
								}));
								speedLayout.addView(d2);
								var d3 = new styleButton();
								d3.setText("Speed 10%");
								d3.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(10);
									}
								}));
								speedLayout.addView(d3);
								var d4 = new styleButton();
								d4.setText("Speed 15%");
								d4.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(15);
									}
								}));
								speedLayout.addView(d4);
								var d5 = new styleButton();
								d5.setText("Speed 20%");
								d5.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(20);
									}
								}));
								speedLayout.addView(d5);
								var d6 = new styleButton();
								d6.setText("Speed 25%");
								d6.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(25);
									}
								}));
								speedLayout.addView(d6);
								var d7 = new styleButton();
								d7.setText("Speed 30%");
								d7.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(30);
									}
								}));
								speedLayout.addView(d7);
								var d8 = new styleButton();
								d8.setText("Speed 35%");
								d8.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(35);
									}
								}));
								speedLayout.addView(d8);
								var d9 = new styleButton();
								d9.setText("Speed 40%");
								d9.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(40);
									}
								}));
								speedLayout.addView(d9);
								var d10 = new styleButton();
								d10.setText("Speed 45%");
								d10.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(45);
									}
								}));
								speedLayout.addView(d10);
								var d11 = new styleButton();
								d11.setText("Speed 50%");
								d11.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(50);
									}
								}));
								speedLayout.addView(d11);
								var d12 = new styleButton();
								d12.setText("Speed 55%");
								d12.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(55);
									}
								}));
								speedLayout.addView(d12);
								var d13 = new styleButton();
								d13.setText("Speed 60%");
								d13.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(60);
									}
								}));
								speedLayout.addView(d13);
								var d14 = new styleButton();
								d14.setText("Speed 65%");
								d14.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(65);
									}
								}));
								speedLayout.addView(d14);
								var d15 = new styleButton();
								d15.setText("Speed 70%");
								d15.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(70);
									}
								}));
								speedLayout.addView(d15);
								var d16 = new styleButton();
								d16.setText("Speed 75%");
								d16.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(75);
									}
								}));
								speedLayout.addView(d16);
								var d17 = new styleButton();
								d17.setText("Speed 80%");
								d17.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(80);
									}
								}));
								speedLayout.addView(d17);
								var d18 = new styleButton();
								d18.setText("Speed 85%");
								d18.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(85);
									}
								}));
								speedLayout.addView(d18);
								var d19 = new styleButton();
								d19.setText("Speed 90%");
								d19.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(90);
									}
								}));
								speedLayout.addView(d19);
								var d20 = new styleButton();
								d20.setText("Speed 95%");
								d20.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(95);
									}
								}));
								speedLayout.addView(d20);
								var d21 = new styleButton();
								d21.setText("Speed 100%");
								d21.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										ModPE.setGameSpeed(100);
									}
								}));
								speedLayout.addView(d21);
								var d22 = new styleButton();
								d22.setText("Custom speed");
								d22.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										newspeed();
										speed.dismiss();
									}
								}));
								speedLayout.addView(d22);
								var exit2 = new styleButton();
								exit2.setText("Exit");
								exit2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										speed.dismiss();
										showMenuBtn();
									}
								});
								speedLayout.addView(exit2);
								speed = new android.widget.PopupWindow(speedLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) speed.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) speed.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								speedLayout1.setBackgroundDrawable(bg);
								speedLayout1.setPadding(20, 0, 20, 0);
								speed.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				var teleport = new styleButton();
				teleport.setText("Teleport menu");
				if (getLanguage == "it_IT") teleport.setText("Menu teletrasporto");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") teleport.setText("Menu de teletransportacion");
				if (getLanguage == "ko_KR") teleport.setText("순간이동 메뉴");
				if (getLanguage == "de_DE") teleport.setText("Teleporter menu");
				if (getLanguage == "ja_JP") teleport.setText("テレポートメニュー");
				if (getLanguage == "nl_NL") teleport.setText("Teleporteer menu");
				if (getLanguage == "zh_CN") teleport.setText("传送菜单");
				teleport.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						teleport_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(teleport);

				function teleport_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var teleportLayout = new android.widget.LinearLayout(MainActivity);
								var teleportScroll = new android.widget.ScrollView(MainActivity);
								var teleportLayout1 = new android.widget.LinearLayout(MainActivity);
								teleportLayout.setOrientation(1);
								teleportLayout1.setOrientation(1);
								teleportScroll.addView(teleportLayout);
								teleportLayout1.addView(teleportScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										teleport.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										teleport.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								teleportLayout.addView(exitLayout);
								var button = new styleButton();
								button.setText("Select coords");
								button.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Tsele();
										teleport.dismiss();
									}
								}));
								teleportLayout.addView(button);
								var Uspawn = new styleButton();
								Uspawn.setText("Set home");
								Uspawn.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										xhome = Player.getX();
										yhome = Player.getY() + 1;
										zhome = Player.getZ();
										save();
										clientMessage(client + "§7Home set to: " + Math.round(xhome) + ", " + Math.round(yhome) + ", " + Math.round(zhome) + ".");
									}
								}));
								teleportLayout.addView(Uspawn);
								var Rspawn = new styleButton();
								Rspawn.setText("Return to home");
								Rspawn.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										load();
										clientMessage(client + "§7Returning to your saved home file");
									}
								}));
								teleportLayout.addView(Rspawn);
								var sspawn = new styleButton();
								sspawn.setText("Set spawn");
								sspawn.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ())
										clientMessage(client + "§7Spawn set to " + Math.round(getPlayerX()) + ", " + Math.round(getPlayerY()) + ", " + Math.round(getPlayerZ()) + ".");
									}
								}));
								teleportLayout.addView(sspawn);
								var randomtp = new styleButton();
								randomtp.setText("Random TP");
								randomtp.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Entity.setPosition(Player.getEntity(), (Math.floor(Math.random() * (5000 - 100 + 1)) + 100), 70, (Math.floor(Math.random() * (5000 - 100 + 1)) + 100));
										clientMessage(client + "Woah!\n" + "Teleported to: " + getPlayerX() + " " + getPlayerY() + " " + getPlayerZ());
									}
								}));
								teleportLayout.addView(randomtp);
								var ttp = new styleButton();
								ttp.setText("Tap teleport");
								ttp.setTextColor(android.graphics.Color.RED);
								if (taptp == true) ttp.setTextColor(android.graphics.Color.GREEN);
								ttp.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										taptp ? taptp = false : taptp = true;
										ttp.setText("Tap teleport");
										if (taptp == true) {
											ttp.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "Tap teleport on");
											taptp = true;
										}
										if (taptp == false) {
											ttp.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Tap teleport off");
											taptp = false;
										}
									}
								}));
								teleportLayout.addView(ttp);
								var et = new android.widget.TextView(MainActivity);
								et.setGravity(android.view.Gravity.CENTER);
								et.setText("You may crash while tping because blocks do not load correctly.");
								et.setTextColor(android.graphics.Color.BLACK);
								var textviewBg = new android.graphics.drawable.GradientDrawable();
								textviewBg.setColor(android.graphics.Color.WHITE);
								et.setBackgroundDrawable(textviewBg);
								et.setTextSize(20);
								teleportLayout.addView(et);
								teleport = new android.widget.PopupWindow(teleportLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) teleport.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) teleport.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								teleportLayout1.setBackgroundDrawable(bg);
								teleportLayout1.setPadding(20, 0, 20, 0);
								teleport.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				var time = new styleButton();
				time.setText("Time menu");
				if (getLanguage == "it_IT") time.setText("Menu tempo");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") time.setText("Menu de momento");
				if (getLanguage == "ko_KR") time.setText("시간 메뉴");
				if (getLanguage == "de_DE") time.setText("Zeit-Einstellungen");
				if (getLanguage == "ja_JP") time.setText("時間設定");
				if (getLanguage == "nl_NL") time.setText("Tijd menu");
				if (getLanguage == "zh_CN") time.setText("时间菜单");
				time.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						time_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(time);

				function time_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var timeLayout = new android.widget.LinearLayout(MainActivity);
								var timeScroll = new android.widget.ScrollView(MainActivity);
								var timeLayout1 = new android.widget.LinearLayout(MainActivity);
								timeLayout.setOrientation(1);
								timeLayout1.setOrientation(1);
								timeScroll.addView(timeLayout);
								timeLayout1.addView(timeScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										time.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										time.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								timeLayout.addView(exitLayout);
								var aa = new styleButton();
								aa.setText("Only day");
								aa.setTextColor(android.graphics.Color.RED);
								if (onlyday == true) aa.setTextColor(android.graphics.Color.GREEN);
								aa.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										onlyday ? onlyday = false : onlyday = true;
										aa.setText("Only day");
										if (onlyday == true) {
											aa.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "Only day on");
											onlyday = true;
										}
										if (onlyday == false) {
											aa.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Only day off");
											onlyday = false;
										}
									}
								}));
								timeLayout.addView(aa);
								var aa2 = new styleButton();
								aa2.setText("Only night");
								aa2.setTextColor(android.graphics.Color.RED);
								if (onlynight == true) aa2.setTextColor(android.graphics.Color.GREEN);
								aa2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										onlynight ? onlynight = false : onlynight = true;
										aa2.setText("Only night");
										if (onlynight == true) {
											aa2.setTextColor(android.graphics.Color.GREEN);
											clientMessage(client + "Only night on");
											onlynight = true;
										}
										if (onlynight == false) {
											aa2.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Only night off");
											onlynight = false;
										}
									}
								}));
								timeLayout.addView(aa2);
								var a1 = new styleButton();
								a1.setText("Time: 6:00am");
								a1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(0);
									}
								}));
								timeLayout.addView(a1);
								var a2 = new styleButton();
								a2.setText("Time: 7:00am");
								a2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(1000);
									}
								}));
								timeLayout.addView(a2);
								var a3 = new styleButton();
								a3.setText("Time: 8:00am");
								a3.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(2000);
									}
								}));
								timeLayout.addView(a3);
								var a4 = new styleButton();
								a4.setText("Time: 9:00am");
								a4.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(3000);
									}
								}));
								timeLayout.addView(a4);
								var a5 = new styleButton();
								a5.setText("Time: 10:00am");
								a5.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(4000);
									}
								}));
								timeLayout.addView(a5);
								var a6 = new styleButton();
								a6.setText("Time: 11:00am");
								a6.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(5000);
									}
								}));
								timeLayout.addView(a6);
								var a7 = new styleButton();
								a7.setText("Time: 12:00pm");
								a7.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(6000);
									}
								}));
								timeLayout.addView(a7);
								var a8 = new styleButton();
								a8.setText("Time: 1:00pm");
								a8.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(7000);
									}
								}));
								timeLayout.addView(a8);
								var a9 = new styleButton();
								a9.setText("Time: 2:00pm");
								a9.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(8000);
									}
								}));
								timeLayout.addView(a9);
								var a10 = new styleButton();
								a10.setText("Time: 3:00pm");
								a10.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(9000);
									}
								}));
								timeLayout.addView(a10);
								var a11 = new styleButton();
								a11.setText("Time: 4:00pm");
								a11.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(10000);
									}
								}));
								timeLayout.addView(a11);
								var a12 = new styleButton();
								a12.setText("Time: 5:00pm");
								a12.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(11000);
									}
								}));
								timeLayout.addView(a12);
								var a13 = new styleButton();
								a13.setText("Time: 6:00pm");
								a13.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(12000);
									}
								}));
								timeLayout.addView(a13);
								var a14 = new styleButton();
								a14.setText("Time: 7:00pm");
								a14.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(13000);
									}
								}));
								timeLayout.addView(a14);
								var a15 = new styleButton();
								a15.setText("Time: 8:00pm");
								a15.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(14000);
									}
								}));
								timeLayout.addView(a15);
								var a16 = new styleButton();
								a16.setText("Time: 9:00pm");
								a16.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(15000);
									}
								}));
								timeLayout.addView(a16);
								var a17 = new styleButton();
								a17.setText("Time: 10:00pm");
								a17.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(16000);
									}
								}));
								timeLayout.addView(a17);
								var a18 = new styleButton();
								a18.setText("Time: 11:00pm");
								a18.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(17000);
									}
								}));
								timeLayout.addView(a18);
								var a19 = new styleButton();
								a19.setText("Time: 12:00am");
								a19.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(18000);
									}
								}));
								timeLayout.addView(a19);
								var a20 = new styleButton();
								a20.setText("Time: 1:00am");
								a20.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(19000);
									}
								}));
								timeLayout.addView(a20);
								var a21 = new styleButton();
								a21.setText("Time: 2:00am");
								a21.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(20000);
									}
								}));
								timeLayout.addView(a21);
								var a22 = new styleButton();
								a22.setText("Time: 3:00am");
								a22.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(21000);
									}
								}));
								timeLayout.addView(a22);
								var a23 = new styleButton();
								a23.setText("Time: 4:00am");
								a23.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(22000);
									}
								}));
								timeLayout.addView(a23);
								var a24 = new styleButton();
								a24.setText("Time: 5:00am");
								a24.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setTime(23000);
									}
								}));
								timeLayout.addView(a24);
								var ct1 = new styleButton();
								ct1.setText("Custom time");
								ct1.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										custime();
										time.dismiss();
									}
								}));
								timeLayout.addView(ct1);
								var exit2Layout = new android.widget.LinearLayout(MainActivity);
								exit2Layout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back2 = new styleButton();
								back2.setText("Back");
								back2.setLayoutParams(params);
								back2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										time.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exit2Layout.addView(back2);
								var exit2 = new styleButton();
								exit2.setText("Exit");
								exit2.setLayoutParams(params);
								exit2.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										time.dismiss();
										showMenuBtn();
									}
								});
								exit2Layout.addView(exit2);
								timeLayout.addView(exit2Layout);
								time = new android.widget.PopupWindow(timeLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) time.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) time.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								timeLayout1.setBackgroundDrawable(bg);
								timeLayout1.setPadding(20, 0, 20, 0);
								time.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
				var weather = new styleButton();
				weather.setText("Weather menu");
				if (getLanguage == "it_IT") weather.setText("Menu del tempo");
				if (getLanguage == "es_MX" || getLanguage == "es_ES") weather.setText("Menu de tiempo");
				if (getLanguage == "ko_KR") weather.setText("날씨 메뉴");
				if (getLanguage == "de_DE") weather.setText("Wetter menu");
				if (getLanguage == "ja_JP") weather.setText("天候");
				if (getLanguage == "nl_NL") weather.setText("Weer menu");
				if (getLanguage == "zh_CN") weather.setText("天气菜单");
				weather.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function (v) {
						weather_menu();
						menu.dismiss();
					}
				});
				menuLayout.addView(weather);

				function weather_menu() {
					MainActivity.runOnUiThread(new java.lang.Runnable({
						run: function () {
							try {
								var weatherLayout = new android.widget.LinearLayout(MainActivity);
								var weatherScroll = new android.widget.ScrollView(MainActivity);
								var weatherLayout1 = new android.widget.LinearLayout(MainActivity);
								weatherLayout.setOrientation(1);
								weatherLayout1.setOrientation(1);
								weatherScroll.addView(weatherLayout);
								weatherLayout1.addView(weatherScroll);
								var exitLayout = new android.widget.LinearLayout(MainActivity);
								exitLayout.setOrientation(0);
								var params = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1);
								var back = new styleButton();
								back.setText("Back");
								back.setLayoutParams(params);
								back.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										weather.dismiss();
										if (haxMode == false) mainMenu();
										if (haxMode == true) haxMenu();
									}
								});
								exitLayout.addView(back);
								var exit = new styleButton();
								exit.setText("Exit");
								exit.setLayoutParams(params);
								exit.setOnClickListener(new android.view.View.OnClickListener() {
									onClick: function (v) {
										weather.dismiss();
										showMenuBtn();
									}
								});
								exitLayout.addView(exit);
								weatherLayout.addView(exitLayout);
								var button = new styleButton();
								button.setText("Custom weather");
								button.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										setDialogW();
										weather.dismiss();
									}
								}));
								weatherLayout.addView(button);
								var button3 = new styleButton();
								button3.setText("Rain");
								button3.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setRainLevel(1);
									}
								}));
								weatherLayout.addView(button3);
								var button4 = new styleButton();
								button4.setText("Lightning");
								button4.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setLightningLevel(1);
									}
								}));
								weatherLayout.addView(button4);
								var button2 = new styleButton();
								button2.setText("Clear weather");
								button2.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										Level.setRainLevel(0);
										Level.setLightningLevel(0);
									}
								}));
								weatherLayout.addView(button2);
								var itembutton = new styleButton();
								itembutton.setText("Item rain");
								itembutton.setTextColor(android.graphics.Color.RED);
								if (itemrain == true) itembutton.setTextColor(android.graphics.Color.GREEN);
								itembutton.setOnClickListener(new android.view.View.OnClickListener({
									onClick: function (viewarg) {
										itemrain ? itemrain = false : itemrain = true;
										itembutton.setText("Item rain");
										if (itemrain == true) {
											itembutton.setTextColor(android.graphics.Color.GREEN);
											itementer();
											weather.dismiss();
											itemrain = true;
										}
										if (itemrain == false) {
											itembutton.setTextColor(android.graphics.Color.RED);
											clientMessage(client + "Item rain off");
											itemrain = false;
											rainitem = false;
										}
									}
								}));
								weatherLayout.addView(itembutton);
								weather = new android.widget.PopupWindow(weatherLayout1, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getWidth() / GUISize, MainActivity.getWindowManager()
									.getDefaultDisplay()
									.getHeight());
								if (default1 == true) weather.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								if (default1 == false) weather.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(GUIColor));
								var bg = new android.graphics.drawable.GradientDrawable();
								bg.setColor(android.graphics.Color.TRANSPARENT);
								bg.setStroke(10, GUIStroke);
								weatherLayout1.setBackgroundDrawable(bg);
								weatherLayout1.setPadding(20, 0, 20, 0);
								weather.showAtLocation(MainActivity.getWindow()
									.getDecorView(), GUIPos | android.view.Gravity.TOP, 0, 0);
							} catch (error) {
								android.widget.Toast.makeText(MainActivity, "Error! : " + error, 1)
									.show();
							}
						}
					}));
				}
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
/*dialogs*/
