#pragma strict

function Start () {

}

function Update () {
  var game:GameBehaviour = GameObject.Find("Game").GetComponent(GameBehaviour);
  transform.position.x -= 0.1 * game.GetSpeed();
  if (transform.position.x < -12) {
    Destroy(gameObject);
  }
}

function OnCollisionEnter2D(col : Collision2D)
{
	if (col.gameObject.tag == "Player")
	{
        var game:GameBehaviour = GameObject.Find("Game").GetComponent(GameBehaviour);
        game.life += 1;
        Destroy(gameObject);
	}
}