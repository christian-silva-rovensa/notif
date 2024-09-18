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

function CreateNotification(){

  const title = 'Simple Title';

  const options = {
    body: 'Simple piece of body text.\nSecond line of body text :)',
  };

  navigator.serviceWorker.ready.then(function(serviceWorker) {
    return serviceWorker.showNotification(title, options);
  });
    
}

