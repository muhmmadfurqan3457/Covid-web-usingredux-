import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import logo from '../src/assets/Capture.PNG'
import { useEffect } from 'react';
import { Totaldata, Countrydata } from './Store/action'
import React from 'react';

function Home() {

   let date = new Date()
   let day = date.getDate()
   let month = date.getMonth()
   let year = date.getFullYear()

   const state = useSelector(State => State)
   const dispatch = useDispatch()


   useEffect(() => {
      dispatch(Totaldata())
   }, [])


   useEffect(() => {
      dispatch(Countrydata())
   }, [])


   // console.log(state.countrydata.data)



   return (<div className="body" >

      <div className="header p-2">
         <img src={logo} />

         <div className="row ml-5 ">
            <div className="margin-header">
               <p className="conform-p">Total conform cases</p>
               <div className="total-conform p-2">{state.totaldata.data ? state.totaldata.data.TotalConfirmed : <div class="spinner-border text-secondary" role="status">
                  <span class="sr-only">Loading...</span>
               </div>}
               </div>
            </div>

            <div className="margin-header">
               <p className="deth-p">Total deaths Cases</p>
               <div className="total-deth p-2 ">{state.totaldata.data ? state.totaldata.data.TotalDeaths : <div class="spinner-border text-secondary" role="status">
                  <span class="sr-only">Loading...</span>
               </div>}
               </div>
            </div>

            <div className="margin-header">
               <p className="recover-p">Total recover cases</p>
               <div className="total-recover p-2">{state.totaldata.data ? state.totaldata.data.TotalRecovered : <div class="spinner-border text-secondary" role="status">
                  <span class="sr-only">Loading...</span>
               </div>}
               </div>
            </div>

            <div className="row live-update">
               <div className="live">
                  <img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Red_circle.gif" />
               </div>
               <p>Live update : {month}/{day}/{year}</p>
            </div>
         </div>

      </div>
      <div>
      </div>



     {state.countrydata.data? <div className="secondbody">

         <div className="reports">
            <h5 className="report-h">States</h5><br/>
            {state.countrydata.data.map((e, v) => {
               return (
                  <p className="reports-p">{e.state ? e.state : <span>not conform</span>}</p>
               )
            })}
         </div>

         <div className="reports">
            <h5 className="report-h">TotalCases</h5><br/>
            {state.countrydata.data.map((e, v) => {
               return (
                  <p  className="reports-p">{e.total ? e.total : <span>not conform</span>}</p>
               )
            })}
         </div>

         <div className="reports">
            <h5 className="report-h">Positive</h5><br/>
            {state.countrydata.data.map((e, v) => {
               return (
                  <p  className="reports-p">{e.positive ? e.positive : <span>not conform</span>}</p>
               )
            })}
         </div>

         <div className="reports">
            <h5 className="report-h">Negative</h5><br/>
            {state.countrydata.data.map((e, v) => {
               return (
                  <p  className="reports-p">{e.negative ? e.negative : <span>not conform</span>}</p>
               )
            })}
         </div>

         <div className="reports">
            <h5 className="report-h">Hospitalized</h5><br/>
            {state.countrydata.data.map((e, v) => {
               return (
                  <p  className="reports-p">{e.hospitalizedCurrently ? e.hospitalizedCurrently : <span>not conform</span>}</p>
               )
            })}
         </div>

         <div className="reports">
            <h5  className="report-h">Death</h5><br/>
            {state.countrydata.data.map((e, v) => {
               return (
                  <p className="reports-p">{e.death ? e.death : <span>not conform</span>}</p>
               )
            })}
         </div>


         <div className="reports">
            <h5 className="report-h">LastUpdate</h5><br/>
            {state.countrydata.data.map((e, v) => {
               return (
                  <p  className="reports-p">{e.lastUpdateEt ? e.lastUpdateEt : <span>not conform</span>}</p>
               )
            })}
         </div>

      </div> : <img width="100%" src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20spinner.gif?width=1500&name=CSS%20infinite%20loading%20animation%20spinner.gif"/>}


   </div>);
}

export default Home;
