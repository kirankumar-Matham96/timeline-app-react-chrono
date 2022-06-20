import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {itemDetails} = props

  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = itemDetails

  return (
    <div className="course-category-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="header-container">
        <h1 className="card-title">{projectTitle}</h1>
        <div className="time-lapsed-container">
          <AiFillCalendar className="icon" />
          <p className="time-lapsed">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
