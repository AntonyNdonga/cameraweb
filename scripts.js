const cameraField = document.getElementById('cameraField');
navigator.mediaDevices.getUserMedia({video : true})
.then(stream => {
    cameraField.srcObject = stream;
})

.catch (error => {
    console.error('Error accessing camera:', error);
});