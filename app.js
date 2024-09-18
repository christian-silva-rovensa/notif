if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("serviceworker.js");
}

function RequestPermission(){

    Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          
          console.log('Notification permission granted.');

        } else {
          console.log('Unable to get permission to notify.');
        }
    });

}


if (Notification.permission === "granted") {
    new Notification("Hi there!");
}