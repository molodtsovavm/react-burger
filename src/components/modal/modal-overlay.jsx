import styles from './modal.module.css';

export const ModalOverlay = ({ onClose }) => (
  <div className={styles.overlay} onClick={onClose} />
);
