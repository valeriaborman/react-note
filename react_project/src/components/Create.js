import { useState } from "react"
import React from "react";
import env from "../env.json"

function Create() {
const [url, setURL] = useState('');
const [lineClass, setlineClass] = useState('hide');
const [FormClass, setFormClass] = useState('');


let sendData = (obj) =>{
    setFormClass('hide');
    setlineClass('');

    fetch(env.urlBackend, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        if(response.result){
            setURL(env.url+'/'+response.url);
        }
    })
}


const loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if(note === ' '){
        alert('Заполните поля');
        return false;
    }
    sendData({'note' : note})

}



    return (
      <div className="row">
        <div className="col-12">
            <div className="text">
        <form onSubmit={loadDataFromForm} className={FormClass}>
            <div className="form-group">
            <label htmlFor="">Enter a note</label>
            <textarea className="form-control" name="note" id="note" defaultValue='Test'></textarea>
            <p><b>Attention!</b> The maximum length of a note is 1000 characters.</p>
            </div>

           <div className="form-group text-right">
                <button type="submit" className="btn btn-primary">To create</button>
            </div>
        </form>
        <div className={lineClass}>
        <div className="alert alert-primary" role="alert">{url}</div>
        <div className="text-right"><button className="btn btn-primary" onClick={function(){window.location.reload()}}>Create a new note</button></div>
      </div>
      </div>
      </div>
      </div>

    );
  }
  
  export default Create;
  