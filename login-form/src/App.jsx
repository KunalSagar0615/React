import { useState } from "react";
import DisplayUserdata from "./component/DisplayUserdata"
import LoginForm from "./component/LoginForm"

function App() {

  const [users, setUsers] = useState([]);

  return (
    <div className="flex">
      <LoginForm users={users} setUsers={setUsers} />
      <DisplayUserdata users={users} />
    </div>
  )
}

export default App
