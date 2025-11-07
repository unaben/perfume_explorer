'use client'

import React from "react";
import styles from "./PerfumeDetailsModal.module.css";
import { PerfumeDetailsModalProps } from "./PerfumeDetailsModal.types";
import Details from "../Details/Details";

const PerfumeDetailsModal: React.FC<PerfumeDetailsModalProps> = ({
  perfume,
  onClose,
}) => {
  if (!perfume) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Perfume Details</h3>
          <button onClick={onClose} className={styles.modalClose}>&times;</button>
        </div>
        <div className={styles.modalBody}>
        <Details perfumeCode={perfume.code} />
        </div> 
      </div>
    </div>
  );
};

export default PerfumeDetailsModal;
