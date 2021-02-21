import React, { useEffect, useState } from 'react';
import { Container } from './Bored.css';
import { Button } from '../../components';
import { Shape } from '../../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { AppState } from '../../data/store';
import boredCat from '../../img/boredCat.svg';

const Bored = (props: any) => {
  const isMode = useSelector((state: AppState) => state.mode.isMode);
  const [randomActivText, setRandomActivText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchRandomText() {
      const randomText = await onFetchData();
      setRandomActivText(randomText);
    }
    fetchRandomText();
    setIsLoading(false);
  }, []);

  const onFetchData = async (): Promise<string> => {
    return fetch('http://www.boredapi.com/api/activity/')
      .then((response) => response.json())
      .then((result) => {
        console.log('Work');
        return result.activity;
      })
      .catch((err) => console.log(err));
  };

  const onClickButton = async () => {
    setIsLoading(true);
    const tmp = await onFetchData();
    console.log(tmp);
    setRandomActivText(tmp);
    setIsLoading(false);
  };
  return (
    <Container mode={isMode}>
      <div className='bored__header'>
        <h2 className='bored__header--primary'>Feeling Bored ?</h2>
        <p className='bored__header--secondary'>
          Don't worry. I can help you find something to do.
        </p>
      </div>
      <div className='bored__main'>
        <img src={boredCat} alt='Zdjecie' className='bored__img' />
        <div className='bored__randomActiv'>
          <div className='itemCenter'>
            {' '}
            <Button variant={Shape.square} clicked={onClickButton}>
              Random activity
            </Button>
          </div>

          {!isLoading ? (
            <p className='bored__randomActiv--text'>{randomActivText}</p>
          ) : null}
          {isLoading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className='fa-spin customSpinner'
            />
          ) : null}
        </div>
      </div>
    </Container>
  );
};

export default Bored;
