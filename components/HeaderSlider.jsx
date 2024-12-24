"use client"

import React, { useState } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [opened, setOpened] = useState(false);

  const handleOpenEnvelope = () => {
    setOpened(true);
    const audio = new Audio('/assets/audio/LastChristmas.mp3');
    audio.play();
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Merry Christmas! 🎄😺</h1>

        {!opened ? (
          <div className={styles.envelope} onClick={handleOpenEnvelope}>
                        <a
              href="/assets/Ticket.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadLink}
            >
                
            <img
              src="/assets/images/closed_envelope.png"
              alt="Closed Envelope"
              className={styles.envelopeImage}
            />
            <audio id='a1' src='/assets/audio/LostWoods.mp3'></audio>
            </a>

          </div>
        ) : (
            <>
          <div className={styles.envelopeOpened}>
            <img
              src="/assets/images/opened_envelope.png"
              alt="Opened Envelope"
              className={styles.envelopeImage}
            />

          </div>
            
        <h1>❤️❤️❤️❤️</h1>
        </>

        )}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
