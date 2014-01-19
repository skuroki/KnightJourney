#pragma strict

var treePrefab:GameObject;
var heartPrefab:GameObject;
var count:int = 0;
var countFromStart:int = 0;
static var score:float;
var life:int = 3;

function Start () {
    if (Application.loadedLevelName == "main") {
    	score = 0;
	}
}

function Update () {
    if (Application.loadedLevelName == "main") {
		count -= 1;
		if (count <= 0) {
		    var pos:Vector3 = new Vector3(10, Random.value * 8 - 4, 0);
		    if (Random.value < (10.0 - life) * 0.01) {
				Instantiate(heartPrefab, pos, transform.rotation);
			} else {
				Instantiate(treePrefab, pos, transform.rotation);
			}
			count = (Random.value * 90 + 10) / GetSpeed();
		}
		score += 1 * GetSpeed();
		countFromStart += 1;
	}
}

function GetSpeed() {
  return 1.0 + countFromStart / 2000.0;
}