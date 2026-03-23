import { useState } from 'react'
import './ImageGallery.css'

// public/images/ 폴더에 이미지 파일을 넣고 아래 목록에 추가하세요
const IMAGES = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
]

export default function ImageGallery() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="gallery-section">
      <h2 className="section-title">갤러리</h2>
      <div className="gallery-grid">
        {IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`갤러리 ${i + 1}`}
            className="gallery-img"
            onClick={() => setSelected(src)}
          />
        ))}
      </div>

      {selected && (
        <div className="gallery-modal" onClick={() => setSelected(null)}>
          <img src={selected} alt="확대" className="gallery-modal-img" />
        </div>
      )}
    </div>
  )
}
