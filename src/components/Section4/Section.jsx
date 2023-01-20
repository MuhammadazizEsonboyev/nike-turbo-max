import React from 'react'
import "./index.css"
const strelka = require("../../img/strelka.png")
const nuqt = require("../../img/nuqt.png")
const nuqta = require("../../img/nuqta.png")
const bacha = require("../../img/bacha.png")
const stars = require("../../img/stars.png")
const year = require("../../img/2021.png")

export default function Section() {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <img src={strelka} alt="" className='strelka' />
            </div>
            <div className='mores'>
            <div className='col-2'>
                <button className='button'>More Reciew</button>
            </div>
            </div>
            <div className='nuqta'>
                <div className='col-6'>
                  <img src={nuqt} alt="" className='nuqtq'/>
                  <img src={nuqta} alt="" className='nuqtb' />
                  <img src={nuqt} alt="" className='nuqt'/>
                </div>
            </div>
        </div>
    </div>

      <div className='container'>
        <div className='row'>
            <div className='col-8'>
              <div className='boxxs'>
                  <h3 className='grev'>Greatest Reviews</h3>
                  <img src={bacha} alt="" className='bocha'/>
                  <h5 className='shah'>Shahriar Sohag</h5>
                  <p className='ptag'>Now that you have a ready strategy <br></br>to move forward, it’s time to come<br></br> up with some ideas.</p>
                  <img src={stars} alt="" className='star'/>
                  <h5 className='design'>UI Designer</h5>
                  <div className="col-10">
                    <hr className='hr'></hr>
                    <img src={year} alt="" className='yil'/>
                  </div>
              </div>
            </div>
        </div>
      </div>

      
    </>
  )
}
