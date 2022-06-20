import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {itemDetails} = props

  const {courseTitle, description, duration, tagsList} = itemDetails

  return (
    <div className="course-category-container">
      <div className="header-container">
        <h1 className="card-title">{courseTitle}</h1>
        <div className="time-lapsed-container">
          <AiFillClockCircle className="icon" />
          <p className="time-lapsed">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="skills-list-container">
        {tagsList.map(eachTag => (
          <p className="skill-item" key={eachTag.id}>
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
