import { useRef } from 'react';
import { Modal } from './Modal/Modal';
import { Popup } from './Popup/Popup';
import './App.css';

export const App = () => {
  const modalRef = useRef(null);
  const popupRef = useRef(null);
  return (
    <div className="App">
      <h1>everything will be fine</h1>
      <button onClick={() => modalRef.current.showModal()}>pr ess to open modal</button>
      <Modal modalRef={modalRef}>
        <h1>hello</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sed!</p>
      </Modal>

      <br />
      <button onClick={() => popupRef.current.show()}>press to open popup</button>
      <br />

      <br />
      <div className="popup-container">
        <span>my popup parent</span>
        <Popup popupRef={popupRef}>
          <h1>popup</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Popup>
      </div>
    </div>
  );
};
