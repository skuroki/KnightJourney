#pragma strict

function Start () {

}

function Update () {
  var mousePosition:Vector3 = Input.mousePosition;
  var y:float = Camera.main.ScreenToWorldPoint(mousePosition).y;
  if (y > 4.0) { y = 4.0; }
  if (y < -4.0) { y = -4.0; }
  
  transform.position.x = -6.0;
  transform.position.y = y;
}