import { FC } from "react"
// import { useSelector } from "react-redux"
import './Loading.css'
type LoadingProp={
  show?:false
}
const Loading:FC<LoadingProp> = ({show} ) => {
  // const {global:{loading}} = useSelector((state:any) => state)
  const loading=false;
 
    return (
    <>
    {show? <div className="loadingContainer">
          <div className="loader"></div> 
    </div>: loading && <div className="loadingContainer">
          <div className="loader"></div> 
    </div>}
    </>
    )
}

export default Loading
