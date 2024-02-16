

interface AudioPlayer {
    audioVolume: number;
    songDuration: number; 
    song:string;
    details:Details;
}

interface Details {
    author: string;
    year:number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran', 
        year: 2015
    }
}

const {song} = audioPlayer
console.log(song)

const {song:anotherSong, songDuration:duration} = audioPlayer
console.log(duration)


//Desestructuracion de arreglos: 
const dbz: string[] = ['Goku','Vegetta','Trunks']
const [p1, p2, p3]: string[] = ['Goku','Vegetta','Trunks']
const trunks = dbz[2] || 'Personaje no encontrado' 

console.error('Personaje 3:',trunks)
console.error('Otro p2:',p2)



export {}