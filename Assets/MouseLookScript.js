#pragma strict

var lookSensitivity : float = 5.0;
var lookSmoothDamp : float = 0.1;

@HideInInspector
var xRotation : float;
@HideInInspector
var yRotation : float;
@HideInInspector
var  currentXRotation : float;
@HideInInspector
var currentYRotation : float;
@HideInInspector
var xRotationV : float;
@HideInInspector
var yRotationV : float;

    
function Update () {
  yRotation += Input.GetAxis("Mouse X") * lookSensitivity;
  xRotation -= Input.GetAxis("Mouse Y") * lookSensitivity;
  xRotation = Mathf.Clamp(xRotation, -80, 80);
  currentXRotation = Mathf.SmoothDamp(currentXRotation, xRotation, xRotationV, lookSmoothDamp);
  currentYRotation = Mathf.SmoothDamp(currentYRotation, yRotation, yRotationV, lookSmoothDamp);
  
  transform.rotation = Quaternion.Euler(currentXRotation, currentYRotation, 0);
}