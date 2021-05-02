import { makeAutoObservable } from 'mobx';

class State {

    name = '';

    surname ='';

    isPopupOpened = false;

    constructor(){
        makeAutoObservable(this);
    }

    changeName(name: string){
        this.name = name;
    }

    changeSurname(surname: string){
        this.surname = surname;
    }

    togglePopup(){
        this.isPopupOpened = !this.isPopupOpened;
    }
}

export default new State();
