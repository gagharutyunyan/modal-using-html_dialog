import './modal.css';

export const Modal = ({ modalRef, children }) => {
    return (
        <dialog className="modal-dialog" ref={modalRef} onClick={(e) => {
            if(e.target.className === 'modal-dialog') modalRef.current.close();
        }}>
            <div className="modal-container">
                {children}
                <button onClick={() => modalRef.current.close()}>close modal</button>
            </div>
        </dialog>
    );
}
