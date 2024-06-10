import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal,Button } from 'react-bootstrap';
import { useDispatch,useSelector } from "react-redux";
import {addInputField,removeInputField } from "../reducer/formReducer";
import "../styles/dynamicForm.css"

function DynamicForm()
{

    const modalInputs=useSelector(state=>state.form.inputFields);
    const [showModal, setShowModal] = useState(false);

    const dispatch=useDispatch();
        const handleAddInput=()=>
            {
                const name=document.getElementById("name");
                const password=document.getElementById("password");
                const address=document.getElementById("address");
                dispatch(addInputField({name,password,address}));
            }
        const handleRemoveInput=()=>
            {
                dispatch(removeInputField());
            }
        const handleResetInput=()=>
            {
                document.getElementById("name").value="";
                document.getElementById("password").value="";
                document.getElementById("address").value="";
            }
        const hideUserModal=()=>
            {
                setShowModal(false);
            }
        const showuserModal=()=>
            {
                setShowModal(true);
            }
        
    return(
        <div className="userDetails">
           <h3> User Details:</h3><br/><br/>
            <button onClick={showuserModal}>open user Form</button>
        <Modal className="userModal" show={showModal} onHide={hideUserModal}>
        <Modal.Header closeButton>
            <Modal.Title>User Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div>
                 <label>Name:  </label><span>   </span>
                 <input name="Name" id="name" placeholder="enter name" /><span> *</span><br/><br/>
                 <label>Password:  </label><span>  </span>
                 <input name="Password" id="password" placeholder="enter password" /><span> *</span><br/><br/>
                 <label>Address:  </label><span>  </span>
                 <textarea name="address" id="address" placeholder="enter name" /><span> *</span><br/><br/><hr/>
          </div>
            {modalInputs.map((input,index)=>(
            <div>
                 <label>Name:  </label><span>   </span>
                 <input name="Name" id="name" placeholder="enter name" /><span> *</span><br/><br/>
                 <label>Password:  </label><span>  </span>
                 <input name="Password" id="password" placeholder="enter password" /><span> *</span><br/><br/>
                 <label>Address:  </label><span>  </span>
                 <textarea name="address" id="address" placeholder="enter address" /><span> *</span><br/><br/>
           <button onClick={handleRemoveInput}>Remove</button><hr/>
           </div>
         ))}
         <div>
            <button onClick={handleAddInput}>Add</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={hideUserModal}>Close</button>
        </Modal.Footer>
       </Modal>
       </div>
    )
}

export default DynamicForm;