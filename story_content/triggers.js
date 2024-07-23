function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5k7zHpQCn1z":
        Script1();
        break;
      case "6Ce6OxzhZu6":
        Script2();
        break;
      case "5ZB6nWsWEMb":
        Script3();
        break;
      case "6kFnRnvjj8Y":
        Script4();
        break;
      case "5qbahKT6inG":
        Script5();
        break;
      case "6mRmmvCXlZQ":
        Script6();
        break;
      case "5c0sPuh6pKT":
        Script7();
        break;
      case "6aPCk1QCSfb":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('68jXcnTCaNH');
const duration = 750;
const easing = 'ease-out';
const id = '6k6EtGtwHdI';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('68jXcnTCaNH');
const duration = 750;
const easing = 'ease-out';
const id = '6k6EtGtwHdI_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6HSMYT50gpp');
const duration = 750;
const easing = 'ease-out';
const id = '6dN8EIsbvZT';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6HSMYT50gpp');
const duration = 750;
const easing = 'ease-out';
const id = '6dN8EIsbvZT_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6fa2iIWIvt7');
const duration = 750;
const easing = 'ease-out';
const id = '6mnLOxQKCcw';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6fa2iIWIvt7');
const duration = 750;
const easing = 'ease-out';
const id = '6mnLOxQKCcw_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('64I3zsIK5hV');
const duration = 750;
const easing = 'ease-out';
const id = '6UjkvcMzpOm';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('64I3zsIK5hV');
const duration = 750;
const easing = 'ease-out';
const id = '6UjkvcMzpOm_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
