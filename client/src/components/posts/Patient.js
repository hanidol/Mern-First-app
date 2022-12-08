import React from 'react';
import { FormGroup, Label, Input } from "reactstrap";

function UploadParseCsv(props) {
    //posting the csv file to api, for data parsing
  const fileHandler = (event) => {
    const formData = new FormData();
    formData.append("csvFile", event.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios({
      method: "post",
      url: "myurl",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

   return(
     <div>
       <FormGroup>
          <Input 
          type="file"
          name="file" 
          id="exampleFile" 
          onChange={(e) => fileHandler(e)}/>
        </FormGroup>
     </div> 
)
}