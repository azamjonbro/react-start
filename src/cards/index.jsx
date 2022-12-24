 import React from 'react'
 
 export default function index(props) {
   return (
     <>
     <div className="card ">
            <img src={props.img} alt="" className="card-img" />
            <div className="card-body">
                <h2 className="card-title">
                    Lorem, ipsum dolor.
                </h2>
                <h4 className="card-text">
                    Lorem ipsum dolor sit amet.
                </h4>
            </div>
        </div>
     </>
   )
 }
 