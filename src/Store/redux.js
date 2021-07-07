const INITIAL_STATE = {
    
     totaldata:[],
     countrydata:[],
     email:"aa"
}

const Redux = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case "GETDATA":
            return{
                ...state,
                totaldata:action.totaldata
            }
            case "GETDATACOUNTRY":
                return{
                    ...state,
                    countrydata:action.countrydata
                }  
            default:
                return state
    }
    
  
}

export {
    Redux,
    
}

