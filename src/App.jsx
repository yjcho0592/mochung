import AudioPlayer from './components/AudioPlayer'
import NameSection from './components/NameSection'
import PhotoSection from './components/PhotoSection'
import CalendarSection from './components/CalendarSection'
import ImageGallery from './components/ImageGallery'
import MapSection from './components/MapSection'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <AudioPlayer />
      <NameSection />
      <PhotoSection />
      <CalendarSection />
      <ImageGallery />
      <MapSection />
    </div>
  )
}
