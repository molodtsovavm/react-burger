import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalOverlay } from './modal-overlay.jsx';

import styles from './modal.module.css';

const modalRoot = document.getElementById('modalRoot');

function Modal({ children, title, onClose, variant }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div className={styles.mainOverlay}>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal}>
        {title && (
          <h3 className="text text_type_main-large mt-10 ml-10 mr-10">{title}</h3>
        )}
        <button
          className={
            variant === 'order' ? `${styles.close} ${styles.closeOrder}` : styles.close
          }
          type="button"
          onClick={onClose}
        >
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
