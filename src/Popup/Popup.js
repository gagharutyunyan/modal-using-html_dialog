import './popup.css';

export const Popup = ({ popupRef, children }) => {
  return (
    <dialog className="popup-dialog" ref={popupRef}>
      <div className="popup-container" onClick={() => popupRef.current.close()}>
        {children}
      </div>
    </dialog>
  );
};
