import { useEffect, useRef } from 'react'
import './MapSection.css'

// 카카오맵 API 키를 .env 파일에 VITE_KAKAO_MAP_KEY=발급받은키 로 설정하세요
const KAKAO_KEY = import.meta.env.VITE_KAKAO_MAP_KEY

// 표시할 위치 좌표 (위도, 경도)
const LOCATION = {
  lat: 37.5665,
  lng: 126.9780,
  name: '서울시청',  // 마커에 표시할 이름
}

export default function MapSection() {
  const mapRef = useRef(null)

  useEffect(() => {
    if (!KAKAO_KEY) return

    const script = document.createElement('script')
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`
    script.onload = () => {
      window.kakao.maps.load(() => {
        const map = new window.kakao.maps.Map(mapRef.current, {
          center: new window.kakao.maps.LatLng(LOCATION.lat, LOCATION.lng),
          level: 3,
        })
        new window.kakao.maps.Marker({
          map,
          position: new window.kakao.maps.LatLng(LOCATION.lat, LOCATION.lng),
          title: LOCATION.name,
        })
      })
    }
    document.head.appendChild(script)
  }, [])

  return (
    <div className="map-section">
      <h2 className="section-title">위치</h2>
      {KAKAO_KEY ? (
        <div ref={mapRef} className="kakao-map" />
      ) : (
        <p className="map-placeholder">카카오맵 API 키를 .env 파일에 설정해주세요</p>
      )}
    </div>
  )
}
