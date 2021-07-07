import Axios from 'axios'


 const Totaldata=()=>{

 return(dispatch)=>{
 Axios.get('https://api.covid19api.com/world/total')
  .then( (response) => dispatch({type:"GETDATA",totaldata:response}))
 }
}

const Countrydata=()=>{

  return(dispatch)=>{
  Axios.get('https://api.covidtracking.com/v1/states/current.json')
   .then( (response) => dispatch({type:"GETDATACOUNTRY",countrydata:response}))
  }
 }

export{
    Totaldata,
    Countrydata
}