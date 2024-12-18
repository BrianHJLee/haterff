'use client'

import styles from "./page.module.css";
import { useState } from 'react';

import UsernameForm from "./UsernameForm";
import LeagueSelector from "./LeagueSelector";
import WallOfShame from "./WallOfShame";
import LoadingSpinner from "./LoadingSpinner";
import ResetButton from "./ResetButton";
import ErrorModal from "./ErrorModal";

export default function Home() {
  const [leagueSelectorOpen, setLeagueSelectorOpen] = useState(false);
  const [leagues, setLeagues] = useState([]);

  const [selectedLeagueName, setSelectedLeagueName] = useState('');
  const [selectedLeagueId, setSelectedLeagueId] = useState('');
  const [wallVisible, setWallVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const [wallData, setWallData] = useState([]);

  const [errorStatus, setErrorStatus] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleWallOfShameGeneration = (league) => {
    setLoading(true);
    setLoadingText('Preparing to hate...');

    setSelectedLeagueName(league.name);
    setSelectedLeagueId(league.id);

    fetch('/api/get_wall?league=' + league.id, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      }
    })
    .then(response => {
        if (response.status != 200) {
            throw new Error("Something went wrong. Please try a different username or try again later.");
        }
        return response.json();
    })
    .then(data => {
      console.log(data);
      setWallData(data);
      setLoading(false);
      setLoadingText('');
      setWallVisible(true);
    })
    .catch((error) => {
        setLoading(false);
        setLoadingText('');

        setErrorStatus(true);
        setErrorTitle('No data found');
        setErrorText('Either your league does not exist or there is no data. Please try a different league or try again later.');
    });
    
  };

  const handleReset = () => {
    setSelectedLeagueName('');
    setSelectedLeagueId('');
    setWallData([]);

    setWallVisible(false);
    setLeagueSelectorOpen(false);
    setLeagues([]);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>HaterFF</h1>
        <h3>
          A tool to see the <u>worst</u> scoring performances in the history of { selectedLeagueName.length > 0 ? <u>{selectedLeagueName}</u> : "your fantasy football league"}.
        </h3>
        { wallVisible ? null : <UsernameForm setLeagueDialogOpen={setLeagueSelectorOpen} setLeagues={setLeagues} setLoading={setLoading} setLoadingText={setLoadingText} setErrorStatus={setErrorStatus} setErrorTitle={setErrorTitle} setErrorText={setErrorText} /> }
        <LeagueSelector dialogOpen={leagueSelectorOpen} setDialogOpen={setLeagueSelectorOpen} leagues={leagues} setLoading={setLoading} setLoadingText={setLoadingText} generator={handleWallOfShameGeneration} />
        { wallVisible ? <WallOfShame data={wallData} /> : null }
        { wallVisible ? <ResetButton resetFunction={handleReset} /> : null }

        <ErrorModal open={errorStatus} setOpen={setErrorStatus} title={errorTitle} text={errorText} />
        <LoadingSpinner open={loading} text={loadingText} />
      </main>
      <footer className={styles.footer}>
        <p>This tool is a work in progress. Please report any issues to BrianHJLee@proton.me</p>
      </footer>
    </div>
  );
}
