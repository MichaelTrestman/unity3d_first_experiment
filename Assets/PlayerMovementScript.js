#pragma strict

var walkAcceleration : float = 5;
var cameraObject : GameObject;

function Update () {

	transform.rotation = Quaternion.Euler(0, cameraObject.GetComponent(MouseLookScript).currentYRotation, 0);
	rigidbody.AddRelativeForce(Input.GetAxis("Horizontal")*walkAcceleration, 0, Input.GetAxis("Vertical")*walkAcceleration);
}