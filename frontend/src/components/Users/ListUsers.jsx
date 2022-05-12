import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ListUsers = () => {
    const [allUsers,setAllUsers] = useState([]);
    useEffect(() => {
        async function getData() {
          const res = await axios.get("http://localhost:5000/users");
          return res;
        }
        getData().then((res) => setAllUsers(res.data));
        
      },[]);
    return ( 
            <section className="dogs-container">
            {allUsers && allUsers.map((users) => {
                return(
                      <div key={users.id}>
                          
                          {users.email}
                          
                      </div>
                );
            })}
        </section>
     );
}
 
export default ListUsers;