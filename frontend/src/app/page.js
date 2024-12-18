'use client'

import styles from "./page.module.css";
import { useState } from 'react';

import UsernameForm from "./UsernameForm";
import LeagueSelector from "./LeagueSelector";
import WallOfShame from "./WallOfShame";
import LoadingSpinner from "./LoadingSpinner";

export default function Home() {
  const [leagueSelectorOpen, setLeagueSelectorOpen] = useState(false);
  const [leagues, setLeagues] = useState([{ name: 'Test League', id: 123}, { name: 'Test League 2', id: 456}]);

  const [selectedLeagueName, setSelectedLeagueName] = useState(null);
  const [selectedLeagueId, setSelectedLeagueId] = useState(null);
  const [wallVisible, setWallVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const handleWallOfShameGeneration = (leagueId) => {
    setLoading(true);
    setLoadingText('Preparing to hate...');

    // time delay of 5 seconds
    setTimeout(() => {
      setLoading(false);
      setLoadingText('');
      setWallVisible(true);
    }, 5000)
    
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>HaterFF</h1>
        <h3>
          A tool to see the <u>worst</u> scoring performances in the history of your
          fantasy football league.
        </h3>
        { wallVisible ? null : <UsernameForm setLeagueDialogOpen={setLeagueSelectorOpen} setLeagues={setLeagues} setLoading={setLoading} setLoadingText={setLoadingText} /> }
        <LeagueSelector dialogOpen={leagueSelectorOpen} setDialogOpen={setLeagueSelectorOpen} leagues={leagues} setLoading={setLoading} setLoadingText={setLoadingText} generator={handleWallOfShameGeneration} />
        { wallVisible ? <WallOfShame /> : null }
        <LoadingSpinner open={loading} text={loadingText} />
      </main>
      <footer className={styles.footer}>
        <p>This tool is a work in progress. Please report any issues to BrianHJLee@proton.me</p>
      </footer>
    </div>
  );
}
