function formatColor(string) {
  string = string.replace(/\[\d{0,3}m/g, "")
  string = string.replace(/{black}/g, "<span class='black'>")
  string = string.replace(/{red}/g, "<span class='red'>")
  string = string.replace(/{green}/g, "<span class='green'>")
  string = string.replace(/{yellow}/g, "<span class='yellow'>")
  string = string.replace(/{blue}/g, "<span class='blue'>")
  string = string.replace(/{magenta}/g, "<span class='magenta'>")
  string = string.replace(/{cyan}/g, "<span class='cyan'>")
  string = string.replace(/{white}/g, "<span class='white'>")
  string = string.replace(/{map:blue}/g, "<span class='map-blue'>")
  string = string.replace(/{map:brown}/g, "<span class='map-brown'>")
  string = string.replace(/{map:dark-green}/g, "<span class='map-dark-green'>")
  string = string.replace(/{map:green}/g, "<span class='map-green'>")
  string = string.replace(/{map:grey}/g, "<span class='map-grey'>")
  string = string.replace(/{map:light-grey}/g, "<span class='map-light-grey'>")
  string = string.replace(/{npc}/g, "<span class='yellow'>")
  string = string.replace(/{item}/g, "<span class='cyan'>")
  string = string.replace(/{player}/g, "<span class='blue'>")
  string = string.replace(/{skill}/g, "<span class='white'>")
  string = string.replace(/{quest}/g, "<span class='yellow'>")
  string = string.replace(/{room}/g, "<span class='green'>")
  string = string.replace(/{say}/g,  "<span class='green'>")
  string = string.replace(/{command( send='(.*)')?}/g,  "<span class='white'>")
  string = string.replace(/{command click=false}/g,  "<span class='white'>")
  string = string.replace(/{exit}/g,  "<span class='white'>")
  string = string.replace(/{shop}/g,  "<span class='magenta'>")
  string = string.replace(/{hint}/g,  "<span class='cyan'>")
  string = string.replace(/{\/[\w:-]+}/g, "</span>")
  return string;
}

function formatLines(string) {
  string = string.replace(/\n/g, "<br />")
  string = string.replace(/\r/g, "")
  return string;
}

function format(string) {
  return formatLines(formatColor(string));
}

export default format
