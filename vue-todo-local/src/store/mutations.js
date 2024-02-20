const addOneItem = (state, todoItem)=>{
    const obj ={completed: false, item: todoItem}
    localStorage.setItem(todoItem, JSON.stringify(obj))
    state.todoItems.push(obj);
}
const removeOneItem = (state, selectedItemInfo)=> {
    const todoItem = selectedItemInfo.todoItem;
    const index = selectedItemInfo.index
    localStorage.removeItem(todoItem.item);
    state.todoItems.splice(index, 1);
}
const toggleOneItem = (state, selectedItemInfo) => {
    const todoItem = selectedItemInfo.todoItem;
    const index = selectedItemInfo.index
    state.todoItems[index].completed = !state.todoItems[index].completed;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}
const clearAllItem = (state) => {
    localStorage.clear();
    state.todoItems = [];
}
export {addOneItem, removeOneItem, toggleOneItem, clearAllItem}