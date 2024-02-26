import TodoFirst from "../TodoFirst/TodoFirst";
import TodoLast from "../TodoLast/TodoLast";


const Todo = () => {
    return (
        <div className="grid grid-cols-2 m-4 p-4">
            <div>
                  <TodoFirst></TodoFirst>

            </div>
             <div>
                <TodoLast></TodoLast>
             </div>
        </div>
    );
};

export default Todo;
