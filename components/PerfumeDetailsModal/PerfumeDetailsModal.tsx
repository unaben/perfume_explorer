"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames";
import { PerfumeDetailsModalProps } from "./PerfumeDetailsModal.types";
import Details from "../Details/Details";
import styles from "./PerfumeDetailsModal.module.css";

const PerfumeDetailsModal: React.FC<PerfumeDetailsModalProps> = ({
  perfume,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (perfume) {
      setTimeout(() => setIsVisible(true), 10);
    }
  }, [perfume]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  if (!perfume) return null;

  return (
    <div
      className={cn(styles.modalOverlay, { [styles.visible]: isVisible })}
      onClick={handleClose}
    >
      <div
        className={cn(styles.modalContent, { [styles.visible]: isVisible })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Perfume Details</h3>
          <button onClick={handleClose} className={styles.modalClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <Details perfumeCode={perfume.code} />
        </div>
      </div>
    </div>
  );
};

export default PerfumeDetailsModal;
