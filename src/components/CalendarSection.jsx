import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './CalendarSection.css'

const HIGHLIGHT = '2026-10-17'

export default function CalendarSection() {
  const tileClassName = ({ date, view }) => {
    if (view !== 'month') return null
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}` === HIGHLIGHT ? 'highlight-day' : null
  }

  return (
    <div className="calendar-section">
      <h2 className="section-title">일정</h2>
      <Calendar
        value={new Date(2026, 9, 17)}
        activeStartDate={new Date(2026, 9, 1)}
        tileClassName={tileClassName}
        calendarType="gregory"
        locale="ko-KR"
        prev2Label={null}
        next2Label={null}
        prevLabel={null}
        nextLabel={null}
        navigationDisabled
        onClickDay={() => {}}
      />
    </div>
  )
}
