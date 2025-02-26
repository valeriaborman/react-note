import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';


function Note() {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide'); 
    const [errorClass, setErrorClass] = useState('hide');


    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event){
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url+'/'+url;
    }
    function searchNote(){
        window.location.href = env.url
    }

    return (
        <div className="row">
             <div className="col-12">
                <div className="text">
            <div className={lineClass}>
                <div className="alert alert-success" role="alert">
                <h4>Note:</h4>
                <div>{noteText}</div>
                <hr />
                <p className="mb-0">Attention! Copy the note. After the display, the note will be deleted!</p>
                </div>
                <div className="text-right"><button onClick={searchNote} className="btn btn-primary">Search for another note</button></div>

            </div>
            <div className={errorClass}>
                <div className="alert alert-danger" role="alert">An error has occurred. No such hash was found!!</div>
                <div className="alert alert-danger" role="alert">
                Note with such a hash was not found!
                    </div>
                    <div className="text-right"><button onClick={searchNote} className="btn btn-primary">Search for another note</button></div>
            </div>
            <div className={formClass}>
                <form action="" onSubmit={getNote}>
                    <div className="form-group">
                    <label htmlFor="url">Enter the hash of the note</label>
                    <input type="text" name="url" id="url" className="form-control" />
                    </div>
                    <div className="form-group text-right">
                            <button type="submit" className="btn btn-primary">Search for a Note</button>
                        </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Note;