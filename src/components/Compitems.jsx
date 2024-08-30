
import image from '../assets/news3.jpg'
const Compitems = ({title,description,src,url}) => {
  return (
      <div className="card bg-dark text-light mb-5 d-inline-block my-3 mx-3 px-3 py-2"style={{maxWidth:"345px"}}>
  <img src={src?src:image} style={{height:"200px", width:"300px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,50):"News will show after fix the Bug"}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is the report of the current event it is information about something that just happened"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default Compitems
