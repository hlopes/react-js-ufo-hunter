import { Howl } from 'howler'

// Sounds
import shot from '../sounds/shot.mp3'
import explosion from '../sounds/explosion.mp3'
import ufoDeath from '../sounds/ufo-dead.mp3'

class Sounds {
  constructor() {
    this.muted = false
  }

  init() {
    this.shotSound = new Howl({
      src: shot,
      volume: 0.2,
    })
    this.explosionSound = new Howl({
      src: explosion,
      volume: 0.2,
    })
    this.ufoDeathSound = new Howl({
      src: ufoDeath,
      volume: 0.2,
    })
  }

  playSound(soundName) {
    if (this.muted) {
      return
    }

    switch (soundName) {
      case 'shot':
        this.shotSound.play()
        this.shotSound.currentTime = 0
        break
      case 'ufoDeath':
        this.ufoDeathSound.play()
        this.ufoDeathSound.currentTime = 0
        break
      default:
        this.explosionSound.play()
        this.explosionSound.currentTime = 0
        return
    }
  }

  mute() {
    this.muted = !this.muted
  }
}

export default Sounds
