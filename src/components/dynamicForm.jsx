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
                const name=document.getElementById("name").value;
                const password=document.getElementById("password").value;
                const address=document.getElementById("address").value;
                dispatch(addInputField({name:name,password:password,address:address}));
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
        <Modal show={showModal} onHide={hideUserModal}>
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
                 <textarea name="address" id="address" placeholder="enter name" /><span> *</span><br/><br/>
           <button onClick={handleRemoveInput}>Remove</button>
           <button onClick={handleAddInput}>Add</button>
           <button onClick={handleResetInput}>Reset</button>
           </div><br/><br/>
           <div>
           {modalInputs.map((input,index)=>
           (
                <div key="index"><p><span>Name:</span> {input.name} <span>Password:</span>  {input.password}
                  <span>Address:</span>   {input.address}</p></div>
           ))}
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