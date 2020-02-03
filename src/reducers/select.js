import Selected from './selected';

const Todos = (state = [],action) => {
    switch(action.type){
        case "SELECT":
            action.id = state.length
            return [
                ...state,
                Selected(undefined,action)
            ];
        case "RESET":
            return state = [];
        default:
            return state;
    }
}
export default Todos;