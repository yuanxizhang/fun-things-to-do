import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageTodo
(state = {
    lists: [],
    tasks: [],
  }, action) {
    switch(action.type){
        case 'ADD_LIST':
            const list = {text: action.text, id: cuidFn()};
            return{
                ...state,
                lists: [...state.lists, list]
            }

        case 'DELETE_LIST':
            const lists = state.lists.filter(list => list.id !== action.id);
            return { ...state, lists}

        case 'ADD_TASKS':

            const task = { text: action.task.text, listId: action.task.listId, id: cuidFn() };
            return { ...state,
              tasks: [...state.tasks, task]
            }

        case 'DELETE_TASKS':
            const tasks = state.tasks.filter(task => task.id !== action.id);
            return {...state, tasks }
            
        default:
            return state;
    }
}
