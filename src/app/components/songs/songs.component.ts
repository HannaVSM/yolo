import { Component, OnInit } from '@angular/core';
import { Song } from './song.model';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.sass']
})
export class SongsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.prepararDatos()
  }

  xd = true;
  nameCancion = '';
  idSong = 0;
  tantoPorCiento=0;

  songs: Song[] = [
    {
      id: 0,
      name: 'Radiohead',
      letter: "And true love waits, \n in haunted attics. \n And true love lives \n on lollipops and crisps. \n \n Just don't leave \n Don't leave",
      image: './assets/images/radiohead.jpg',
      cancion: 'True love waits'
    },
    {
      id: 1,
      name: 'Silvio Rodríguez',
      letter: "Estoy buscando melodías, \n para tener como llamarte. \n Quién fuera ruiseñor. \n Quién fuera Lenon y Mc Artney. \n Sindo Garay, violeta, chico barque. \n Quién fuera tu trovador \n \n Corazón, corazón obscuro \n Corazón, corazón con muros \n Corazón que se esconde \n Corazón que esta donde el corazón \n Corazón en fuga herido de dudas de amor (corazón).",
      image: './assets/images/silvio.jpg',
      cancion: 'Quién fuera'
    },
    {
      id: 2,
      name: 'Tame Impala',
      letter: "Seems you're comin' on \n Breathe a little deeper \n Should you need to come undone \n And let those colors run? \n Now you're havin' fun \n So do this and get through this \n And come find me when you're done \n So we can be as one. \n \n Remember those lies you told your friend? \n I was hopin' you could do it once more again \n That rooftop party won't seem to end \n I need you here, alone with me",
      image: './assets/images/Tame-Impala.jpg',
      cancion: 'Breathe deeper'
    },
    {
      id: 3,
      name: 'The Smashing Pumpkins',
      letter: "Believe, believe in me, believe, believe \n That life can change \n That you're not stuck in vain \n We're not the same, we're different tonight \n \n Tonight, tonight \n So bright \n Tonight, tonight",
      image: './assets/images/the-smashing-pumpkins.jpeg',
      cancion: 'Tonight, tonight'
    },
    {
      id: 4,
      name: 'The Strokes',
      letter: "I said, please don't slow me down if I'm going too fast \n You're in a strange part of our town \n \n Yeah, the night's not over, you're not trying hard enough \n Our lives are changing lanes, you ran me off the road \n The wait is over, I'm now taking over \n You're no longer laughing, I'm not drowning fast enough",
      image: './assets/images/the-strokes.jpg',
      cancion: 'Reptilia'
    },
    {
      id: 5,
      name: 'Tool',
      letter: "Bound to this flesh \n This guise, this mask \n This dream \n \n Wake up remember \n We are born of one breath, one word \n We are all one spark, sun becoming \n \n Pneuma \n Reach out and beyond \n Wake up remember \n We are born of one breath, one word \n We are all one spark, eyes full of wonder",
      image: './assets/images/tool.jpg',
      cancion: 'Pneuma'
    },
    {
      id: 6,
      name: 'Andy Shauf',
      letter: "Do you find it gets a little easier \n Each time you make it disappear? \n Oh fools the magician bends the rules \n As the crowd watches his every move \n \n Just a shaking hand without a concrete plan \n \n Do, do do, do do, do do \n Do, do do, do do, do do \n Do, do do, do do, do do \n Do, do do, do do, do do",
      image: './assets/images/andyshauf.jpg',
      cancion: 'Magician'
    }
  ]
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  prepararDatos() {
    for (let s in this.songs) {
      this.songs[s].letter = this.songs[s].letter.split("\n").join("<br />");
    }
    return this.songs;
  }

  songName(event: Event, id: number) {
    const element = event.target as HTMLInputElement;
    this.nameCancion = element.value;
    this.idSong = id;
  }
  verificarCancion() {
    for (let s of this.songs) {
      this.nameCancion != s.cancion ? this.xd = false : this.xd = true;
    }

  }

  increaseProgress(){
    this.tantoPorCiento +=1;
  }
}
