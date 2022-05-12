import {
  useGetRolesQuery,
  useAddRoleMutation,
  useDeleteRoleMutation,
} from "./apiSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button, Modal, Dropdown } from "react-bootstrap";

const Roles = () => {
  const [newRole, setNewRole] = useState("");

  const {
    data: roles,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRolesQuery();
  const [addRole] = useAddRoleMutation();
  const [deleteRole] = useDeleteRoleMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    addRole({ userId: 1, title: newRole });
    setNewRole("");
  };

  const newItemSection = (
    <>
 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 <FontAwesomeIcon icon={faPlus} />
</button>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Role</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form onSubmit={handleSubmit}>
          <label htmlFor="new-todo">Enter a new Role</label>
          <div className="new-todo">
            <input
              type="text"
              id="new-permission"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              placeholder="Enter a new Role"
            />
          </div>
          <button className="submit">
            <FontAwesomeIcon icon={faUpload} />
          </button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      
  
      
    </>
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <div className="Drop">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Role
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#" >
                {roles.map((role) => {
                  return (
                    <article >
                      <div className="todo">
                        <label htmlFor={role.id}>{role.title}</label>
                      </div>
                      <button
                        className="trash"
                        onClick={() => deleteRole({ id: role.id })}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </article>
                  );
                })}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <main className="role">
      <h1>Role List</h1>
      {newItemSection}
      {content}
    </main>
  );
};
export default Roles;
