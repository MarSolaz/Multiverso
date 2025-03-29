document.addEventListener('DOMContentLoaded', function() {
    const provincias = document.querySelectorAll('.provincia');
    const videoContainer = document.getElementById('video-container');
    const videoFrame = document.getElementById('video');

    const videos = {
        'buenos-aires': 'https://www.youtube.com/embed/videoID1',
        'catamarca': 'https://www.youtube.com/embed/videoID2',
        'chaco': 'https://www.youtube.com/embed/videoID3',
        'chubut': 'https://www.youtube.com/embed/videoID4',
        'cordoba': 'https://www.youtube.com/embed/videoID5',
        'corrientes': 'https://www.youtube.com/embed/videoID6',
        'entre-rios': 'https://www.youtube.com/embed/videoID7',
        'formosa': 'https://www.youtube.com/embed/videoID8',
        'jujuy': 'https://www.youtube.com/embed/videoID9',
        'la-pampa': 'https://www.youtube.com/embed/videoID10',
        'la-rioja': 'https://www.youtube.com/embed/videoID11',
        'mendoza': 'https://www.youtube.com/embed/videoID12',
        'misiones': 'https://www.youtube.com/embed/videoID13',
        'neuquen': 'https://www.youtube.com/embed/videoID14',
        'rio-negro': 'https://www.youtube.com/embed/videoID15',
        'salta': 'https://www.youtube.com/embed/videoID16',
        'san-juan': 'https://www.youtube.com/embed/videoID17',
        'san-luis': 'https://www.youtube.com/embed/videoID18',
        'santa-cruz': 'https://www.youtube.com/embed/videoID19',
        'santa-fe': 'https://www.youtube.com/embed/videoID20',
        'santiago-del-estero': 'https://www.youtube.com/embed/videoID21',
        'tierra-del-fuego': 'https://www.youtube.com/embed/videoID22',
        'tucuman': 'https://www.youtube.com/embed/videoID23'
    };

    provincias.forEach(provincia => {
        provincia.addEventListener('mouseover', function() {
            provincia.style.fill = '#aaa';
        });

        provincia.addEventListener('mouseout', function() {
            provincia.style.fill = '#ccc';
        });

        provincia.addEventListener('click', function() {
            const provinciaId = provincia.id;
            const videoUrl = videos[provinciaId];
            if (videoUrl) {
                videoFrame.src = videoUrl;
                videoContainer.style.display = 'flex';
            }
        });
    });
});
