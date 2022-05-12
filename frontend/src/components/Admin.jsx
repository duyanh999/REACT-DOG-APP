import Roles from "./role";
import TodoList from "./TodoList";
import './admin.css'
const Admin = () => {
  return (
    <div className="Admin">
      <Roles />
      <TodoList />
    </div>
  );
};

export default Admin;
