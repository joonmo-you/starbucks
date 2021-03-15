let tag = document.createElement('script');
let firstScripTag = document.getElementsByTagName('script')[0];

tag.src = "https://www.youtube.com/iframe_api";
firstScripTag.parentNode.insertBefore(tag, firstScripTag);

function onYouTubeIframeAPIReady() {
    // <div id='player'></div>
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8',
        playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8'
        },
        events: {
            onReady: function (event) {
                event.target.mute()
            }
        }
    });
};