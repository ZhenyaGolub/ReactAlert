import React from 'react';
import State from "../store/state";
import { observer } from "mobx-react-lite";

const Alert: React.FunctionComponent = observer(
    
    () => {

        const closePopup = () => {
            State.togglePopup();
            State.changeName('');
            State.changeSurname('');
        }

        return (
            <div className="alert" style={{display: State.isPopupOpened ? 'flex' : 'none'}}>
                <div className="alert__body">
                    <button className="alert__close" onClick={() => closePopup()}><img src="https://img.icons8.com/color/48/000000/close-window.png"/></button>
                    <div className="alert__content">
                        Здравствуйте, {State.name + " "+ State.surname}
                    </div>
                </div>
            </div>
        )
    }
) 

export default Alert
