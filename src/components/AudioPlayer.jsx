import { useState, useRef } from 'react'
import './AudioPlayer.css'

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggle = () => {
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className="audio-player">
      {/* audio src에 음악 파일 경로를 넣으세요 (예: /audio/bgm.mp3) */}
      <audio ref={audioRef} loop src="/audio/bgm.mp3" />
      <button className="audio-btn" onClick={toggle}>
        {playing ? '🔊 음악 끄기' : '🔇 음악 켜기'}
      </button>
    </div>
  )
}
