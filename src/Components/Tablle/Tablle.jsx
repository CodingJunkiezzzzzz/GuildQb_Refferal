import React from 'react'
import './Tablle.css'

function Tablle() {
  return (
    
    <div className='tablebg '>

   <div className="container py-5">

    <div className="row  justify-content-center justify-content-center ">
    
        <div className="col-3  col-md-3 col-lg-2  p-3 tableh1 test"> Level </div>
        <div className="col-3  col-md-3 col-lg-2 tableborder p-3  tableh1 tpbg">Point </div>
        <div className="col-5  col-lg-2 tableborder brids1 test1 p-3 tableh1 ">Rewads</div> </div>

    <div className="row  justify-content-center">

        <div className="col-3  col-md-3 col-lg-2   tableborder p-3 tableP"> 1 </div>
        <div className="col-3  col-md-3 col-lg-2  tableborder p-3 tableP">2 </div>
        <div className="col-5  col-lg-2 tableborder p-3 tableP">QB Badge I</div>
    </div>
    <div className="row  justify-content-center">

        <div className="col-3  ol-md-3 col-lg-2  tableborder p-3 tableP tableP"> 2 </div>
        <div className="col-3  ol-md-3 col-lg-2   tableborder p-3 tableP tableP">2 </div>
        <div className="col-5  col-lg-2  tableborder p-3 tableP tableP">QB Badge  II</div>
    </div>
    <div className="row  justify-content-center">

        <div className="col-3  ol-md-3 col-lg-2  tableborder p-3 brids2  tableP tableP test2 "> 3 </div>
        <div className="col-3 ol-md-3 col-lg-2   tableborder p-3 tableP tableP">7~ </div>
        <div className="col-5 col-lg-2 tableborder p-3 brids3 tableP tableP test3">QB Badge III</div>
    </div>

   </div>

</div>


  )
}

export default Tablle