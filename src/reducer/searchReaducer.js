export function reducer(prevState,action){
    switch(action.type){
        case "SEARCH":
            let regx = new RegExp(action.payload.searchStr ,'gim')
            return action.payload.searchStr==="" ? action.payload.searchSpace : action.payload.searchSpace.filter(video => regx.test(video.title)) 
        case "INIT":
            return action.payload
        default: 
            return;
    }
}