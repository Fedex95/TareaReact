import React from 'react'
import { useState } from 'react';
export default function TareaAdd({ guardarClase }) {
    const [asignatura, setAsignatura] = useState("");
    const [nrc, setNRC] = useState("");
    const [creditos, setCreditos] = useState("");
    const [parcial1, setParcial1] = useState("");
    const [parcial2, setParcial2] = useState("");
    const guardarHandler = (event) => {
        event.preventDefault();
        const claseNueva = {
            "asignatura": asignatura,
            "nrc": nrc,
            "creditos": creditos,
            "parcial1": parcial1,
            "parcial2": parcial2,
        }
        guardarClase(claseNueva);
    }
    const nuevaAsignatura = (event) => {
        setAsignatura(event.target.value);
    }
    const nuevoNRC = (event) => {
        setNRC(event.target.value);
    }
    const nuevoCredito = (event) => {
        setCreditos(event.target.value);
    }
    const nuevoParcial1 = (event) => {
        setParcial1(event.target.value);
    }
    const nuevoParcial2 = (event) => {
        setParcial2(event.target.value);
    }
    return (
        <div className='row mt-4'>
            <div className='col'>
                <form onSubmit={guardarHandler}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h1>Nueva clase</h1>
                        </div>
                        <div className="card-body">
                            <div class="form-group">
                                <label for="asignatura">Titulo de la asignatura</label>
                                <input
                                    type="test"
                                    class="form-control"
                                    id="asignatura"
                                    name="asignatura"
                                    placeholder="Ingresa la asignatura"
                                    value={asignatura}
                                    onChange={nuevaAsignatura}
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="nrc">NRC</label>
                                <input
                                    type="test"
                                    class="form-control"
                                    id="nrc"
                                    name="nrc"
                                    placeholder="Ingresa el nrc"
                                    value={nrc}
                                    onChange={nuevoNRC}
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="creditos">Creditos</label>
                                <input
                                    type="test"
                                    class="form-control"
                                    id="creditos"
                                    name="creditos"
                                    placeholder="Ingresa los creditos"
                                    value={creditos}
                                    onChange={nuevoCredito}
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="parcial1">Parcial1</label>
                                <input
                                    type="test"
                                    class="form-control"
                                    id="parcial1"
                                    name="parcial1"
                                    placeholder="Ingresa el parcial1"
                                    value={parcial1}
                                    onChange={nuevoParcial1}
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="parcial2">Parcial2</label>
                                <input
                                    type="test"
                                    class="form-control"
                                    id="parcial2"
                                    name="parcial2"
                                    placeholder="Ingresa el parcial2"
                                    value={parcial2}
                                    onChange={nuevoParcial2}
                                    required
                                />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>



    )
}