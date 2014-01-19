#pragma strict

var style:GUIStyle;

function Start () {
  style = new GUIStyle();
  style.fontSize = 30;
}

function Update () {

}

function OnGUI() {
  var game:GameBehaviour = GameObject.Find("Game").GetComponent(GameBehaviour);
  GUI.Label(Rect(20,20,120,20), parseInt(game.score).ToString(), style);
  GUI.Label(Rect(20,50,120,20), "Life: " + game.life.ToString(), style);
}