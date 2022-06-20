import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-container">
      <div className="timeline-view-container">
        <h1 className="main-heading-1">
          MY JOURNEY OF
          <br />
          <span className="main-heading-2">CCBP 4.0</span>
        </h1>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            primary: '#0967d2',
            secondary: '#fff',
            cardBgColor: '#fff',
            cardForeColor: 'transparent',
            titleColor: '#0967d2',
          }}
        >
          {timelineItemsList.map(eachItem =>
            eachItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard itemDetails={eachItem} key={eachItem.id} />
            ) : (
              <ProjectTimelineCard itemDetails={eachItem} key={eachItem.id} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
