let tracks= [

    {url:'./audio/BLANCO, Sfera Ebbasta - MI FAI IMPAZZIRE.mp3',cover:'./Photo/mi fai impazzire.jpeg',artist:'Blanco',title:'Mi fai impazzire feat Sferaebbasta'},

    {url:'./audio/BLANCO - Notti In Bianco.mp3',cover:'./Photo/nottiinbianco.jpeg',artist:'Blanco',title:'Notti in Bianco'},

    {url:'./audio/BLANCO - Lucciole (Visual).mp3',cover:'./Photo/lucciole.jpeg',artist:'Blanco',title:'Lucciole'},

    {url:'./audio/BLANCO - Paraocchi.mp3',cover:'./Photo/Paraocchi.jpeg',artist:'Blanco',title:'Paraocchi'},

    {url:'./audio/BLANCO - Sai Cosa C’è (Visual).mp3',cover:'./Photo/sai cosa c è.jpeg',artist:'Blanco',title:'Sai cosa c è'},

    {url:'./audio/BLANCO - Finché Non Mi Seppelliscono (Visual).mp3',cover:'./Photo/finchè non mi seppelliscono.jpeg',artist:'Blanco',title:'Finchè non mi seppelliscono'},

]

const songListWrapper= document.querySelector('#songListWrapper');

let currentTrack=2;

// BUTTONS

const btnPlay = document.querySelector('#btnPlay');

const btnPause = document.querySelector('#btnPause');

const btnNextTrack = document.querySelector('#btnNextTrack');

const btnPrevTrack = document.querySelector('#btnPrevTrack');


// ELEMENTS

const albumCover=document.querySelector('#albumCover');

const track=document.querySelector('#track');

const trackArtist=document.querySelector('#trackArtist');

const trackTitle=document.querySelector('#trackTitle');

const currentTime=document.querySelector('#currentTime');

const totalTime=document.querySelector('#totalTime');

const progressTimeBar=document.querySelector('#progressTimeBar');






// EVENTS

btnPlay.addEventListener('click', () =>{

    btnPlay.classList.toggle('d-none')

    btnPause.classList.toggle('d-none')

    albumCover.classList.toggle('play')

    track.play()
});

btnPause.addEventListener('click', () =>{

    btnPlay.classList.toggle('d-none')

    btnPause.classList.toggle('d-none')

    albumCover.classList.toggle('play')

    track.pause()

});

btnNextTrack.addEventListener('click',()=>{

    nextTrack()
});

btnPrevTrack.addEventListener('click',()=>{

    prevTrack()
});


track.addEventListener('ended', () =>{

    nextTrack()
});

track.addEventListener('timeupdate', () =>{

    updateProgress()

});

track.addEventListener('loadeddata', () =>{

    currentTime.innerHTML = formatTime('0')

    totalTime.innerHTML = formatTime(track.duration)

    progressTimeBar.style.width = 0 + '%'

    
  
});



// FUNCTIONS

function populateSongList(){

    tracks.forEach(track => {

        let card= document.createElement('div');

        console.log(card);

        card.classList.add('col-12');

        card.innerHTML=` 

         <div class="card-song d-flex justify-content-between align-items-center">
        
         <h3 class="text-gradient">${track.title}</h3>
        
        
           <button class="btn btn-play-song">
        
           <i class="fa-solid fa-play"></i>
        
           </button>
        
         </div>
        
        
         `

        songListWrapper.appendChild(card)

    })

};



function formatTime(sec){

    let minutes = Math.floor(sec / 60);

    let seconds = Math.floor(sec - minutes * 60);

    if (seconds < 10 ) {

        return `${minutes}:0${seconds}`    
    }

    return `${minutes}:${seconds}`

}

function changeTrackDetails(){

    let song=tracks[currentTrack]

    albumCover.src = song.cover

    track.src = song.url

    trackArtist.innerHTML = song.artist

    trackTitle.innerHTML = song.title

}

function updateProgress(){

    let progress = (track.currentTime / track.duration) * 100

    progressTimeBar.style.width = progress + '%'

    currentTime.innerHTML = formatTime(progress)


}


function nextTrack(){

    currentTrack++

    if(currentTrack > tracks.length - 1){

        currentTrack=0
    }

    let playing = !track.paused

    changeTrackDetails()

    if(playing){

        track.play()
    }

}

function prevTrack(){

    currentTrack--

    if(currentTrack < 0 ){

        currentTrack =  tracks.length - 1
    }

    let playing = !track.paused

    changeTrackDetails()

    if(playing){

        track.play()
    }

}


changeTrackDetails()

populateSongList()





