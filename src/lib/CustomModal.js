import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const CustomModal = ({ isOpen, onRequestClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onRequestClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onRequestClose}>X</button>
                {children}
            </div>
        </div>,
        document.body
    );
};

CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default CustomModal;