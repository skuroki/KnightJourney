#pragma strict

var style:GUIStyle;

function Start () {
  style = new GUIStyle();
  style.fontSize = 30;
}

function Update () {

}

function OnGUI() {
  // var game:GameBehaviour = GameObject.Find("Game").GetComponent(GameBehaviour);
  GUI.Label(Rect(Screen.width / 2 - 200,Screen.height / 2 - 30,400,30), "あなたは死にました", style);
  var game:GameBehaviour = GameObject.Find("Game").GetComponent(GameBehaviour);
  GUI.Label(Rect(20,20,120,20), parseInt(game.score).ToString(), style);
  if (GUI.Button(Rect(Screen.width / 2 - 100, Screen.height*3/4, 200, 80), 'new game', style)) {
    Application.LoadLevel('main');
  }
}