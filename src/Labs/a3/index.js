import JavaScript from "./JavaScript";
import Classes from "./Classes";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

function Assignment3() {
    console.log('Hello World!');
    return (
    <div>
        <h1>Assignment 3</h1>
        <TodoItem/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <PathParameters/>
        <JavaScript/>
        <TodoList/>
    </div>
    );
}
export default Assignment3;