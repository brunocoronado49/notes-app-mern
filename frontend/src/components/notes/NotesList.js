import React, { Component } from 'react'
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

export default class NotesList extends Component {

    state = {
        notes: []
    }

    getNotes = async () => {
        const res = await axios.get("http://localhost:4000/notes");
        this.setState({ notes: res.data });
    }

    componentDidMount() {
        this.getNotes()
    }

    deleteNote = async (id) => {
        await axios.delete(`http://localhost:4000/notes/delete/${id}`)
        this.getNotes()
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => 
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>{note.title}</h4>
                                </div>
                                <div className="card-body">
                                    <h5>{note.description}</h5>
                                    <p>{note.author}</p>
                                    <p>{format(note.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger m-1" 
                                    key={note._id} onClick={() => this.deleteNote(note._id)}>
                                        Delete
                                    </button>
                                    <Link className="btn btn-warning m-1" to={`/notes/edit/${note._id}`}>
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

