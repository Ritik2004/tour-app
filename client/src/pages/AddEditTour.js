import React, { useState, useEffect } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBValidation,
    MDBBtn,
    MDBInput,
  } from "mdb-react-ui-kit";

  import ChipInput from "material-ui-chip-input";
  import FileBase from "react-file-base64";
  import { toast } from "react-toastify";
  import { useNavigate, useParams } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";

const initialState = {
    title: "",
    description: "",
    tags: [],
  };

const AddEditTour = () => {
    const [tourData, setTourData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { title, description, tags } = tourData;

    const handleSubmit = (e) => {
      e.preventDefault();
    }

    const onInputChange = (e) => {
       const {name, value} = e.target;
       setTourData({...tourData, [name]:value})
    }
    const handleAddTag = (tag) => {
       setTourData({...tourData, tags: [...tourData.tags, tag]})
    }
    const handleDeleteTag = (deleteTag) => {
         setTourData({
            ...tourData,
            tags: tourData.tags.filter((tag) => tag !== deleteTag),
         })
    }
    const handleClear = () => {
        setTourData({title:"", description:"",tags:[]})
    }
  return (
    <div style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
      className="container">
           <MDBCard alignment='center'>
               <h5>Add Tour</h5>
               <MDBCardBody>
               <MDBValidation onSubmit={handleSubmit} 
               className='row g-3'
               noValidate
               >
                  <div className='col-md-12'>
                     <input
                     placeholder='Enter title'
                     type='text'
                     value={title}
                     name='title'
                     onChange={onInputChange}
                     className="form-control"
                     required
                     invalid
                     validation="Please provide title"
                     />
                  </div>
                  <div className="col-md-12">
              <textarea
                placeholder="Enter Description"
                type="text"
                value={description}
                name="description"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                textarea
                rows={4}
                validation="Please provide description"
              />
            </div>
            <div className="col-md-12">
              <ChipInput
                name="tags"
                variant="outlined"
                placeholder="Enter Tag"
                fullWidth
                value={tags}
                onAdd={(tag) => handleAddTag(tag)}
                onDelete={(tag) => handleDeleteTag(tag)}
              />
              {/* {tagErrMsg && <div className="tagErrMsg">{tagErrMsg}</div>} */}
            </div>
            <div className="d-flex justify-content-start">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setTourData({ ...tourData, imageFile: base64 })
                }
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }}>
                {/* {id ? "Update" : "Submit"} */}
                Submit
              </MDBBtn>
              <MDBBtn
                style={{ width: "100%" }}
                className="mt-2"
                color="danger"
                onClick={handleClear}
              >
                Clear
              </MDBBtn>
            </div>

               </MDBValidation>
               </MDBCardBody>
           </MDBCard>
    </div>
  )
}

export default AddEditTour
