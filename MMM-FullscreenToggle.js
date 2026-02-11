Module.register("MMM-FullscreenToggle", {
  defaults: {},

  getStyles() {
    const css = ["MMM-FullscreenToggle.css"]
    return css
  },


  start: function () {},
    getDom: function() {
        const containerButton = document.createElement('div');
        containerButton.id = 'containerButton';

        const toggleButton = document.createElement('button');
        toggleButton.id = 'toggleButton';

        const img = document.createElement('img');
        img.src = 'icon-fullscreen.png';

        toggleButton.appendChild(img);
        containerButton.appendChild(toggleButton);

        // Event Listener für Fullscreen-Funktionalität
        toggleButton.addEventListener('click', function () {
            if (document.fullscreenElement) {
                // Wenn bereits im Fullscreen-Modus, verlasse diesen
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                // Wechsle in den Fullscreen-Modus für den gesamten Body
                const elem = document.documentElement; // Das gesamte Dokument

                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                }
            }
        });

        return containerButton; // Gibt das DOM-Element zurück
    },
  notificationReceived: function() {},
  socketNotificationReceived: function() {},
})



