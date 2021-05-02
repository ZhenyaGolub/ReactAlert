import React, { useRef, useState } from 'react'
import State from "../store/state";

const Form: React.FunctionComponent = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);

    const [text, setText] = useState(false);

    const showAlert = (e:React.MouseEvent) => {    
        e.preventDefault();
        if(nameRef.current!.value === '' || surnameRef.current!.value === ''){
            setText(true);
        } else {
            State.togglePopup();
            nameRef.current!.value = '';
            surnameRef.current!.value = '';
            setText(false)
        }  
    }

    return (
        <div className="container">
            <form className="form">
                <div className="row">
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" onChange={(e) => {
                        State.changeName(e.target.value.trim());
                        setText(false)
                    }} ref={nameRef}/>
                </div>
                <div className="row">
                    <label htmlFor="surname">Фамилия</label>
                    <input type="text" id="surname" onChange={(e) => {
                        State.changeSurname(e.target.value.trim())
                        setText(false)
                    }} ref={surnameRef}/>
                    <p className="text" style={{display: text ? 'block' : 'none'}}>Заполните, пожалуйста, все поля формы</p>
                </div>
                <div className="row last">
                    <input type="submit" className="submit" onClick={(e) => showAlert(e)} value="Готово"/>
                </div>
            </form>
        </div>
    )
}

export default Form
