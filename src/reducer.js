export const initialState = {
    user : null,
    playlists: [],
    playing: false,
    item: null,
    // token : "BQB_k6LB2Zcv3orC27F053LZYEHrCyC2xyEnh3YthjbK60iLDBAj6NIHyVUDymoaTFfCi56DJar-Okuirb-VFSVbvjNP18J82Wf9VpPgab_BDmwYSb3jCUUTvo28Vw8ar9OFXDP9bXlqYuy39_YFKoSbxsSScM63AbPN4mwevrcPfCb5d5Sp"
}

const reducer = (state, action) => {
console.log("action type>>",action);
// action -> typr , [payload]
switch (action.type) {
    case 'SET_USER':
        return{
            ...state,
            user: action.user
        }
    case 'SET_TOKEN':
        return{
            ...state,
            token:action.token
        }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly
                }
    default:
        return state; 
}
}

export default reducer;