import './PhotoSection.css'

export default function PhotoSection() {
  return (
    <div className="photo-section">
      {/* 사진 파일을 public/images/profile.jpg 에 넣으세요 */}
      <img src="/images/profile.jpg" alt="프로필 사진" className="profile-photo" />
    </div>
  )
}
