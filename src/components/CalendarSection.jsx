import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './CalendarSection.css'

// 표시할 일정 날짜 목록 (YYYY-MM-DD 형식으로 추가)
const EVENTS = [
  '2026-03-25',
  '2026-04-01',
]

export default function CalendarSection() {
  const tileClassName = ({ date }) => {
    const str = date.toISOString().split('T')[0]
    return EVENTS.includes(str) ? 'event-day' : null
  }

  return (
    <div className="calendar-section">
      <h2 className="section-title">일정</h2>
      <Calendar
        locale="ko-KR"
        tileClassName={tileClassName}
        calendarType="gregory"
      />
    </div>
  )
}
