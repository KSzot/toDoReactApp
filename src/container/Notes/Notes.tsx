import React, { useState } from 'react';
import { Container } from './Notes.css';
import { useSelector } from 'react-redux';
import { AppState } from '../../data/store';
import { Button, Cards } from '../../components';
import { Shape } from '../../helpers';

interface INotes {
  id: number;
  name: string;
  bgColor: string;
}

const Notes = (props: any) => {
  const isMode = useSelector((state: AppState) => state.mode.isMode);
  const [insertValue, setInsertValue] = useState<string>('');
  const [customNotes, setCustomNotes] = useState<INotes[]>([]);

  const _getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInsertValue(event.target.value);
  };

  const _clearInput = () => {
    setInsertValue('');
  };

  const _generateRandomColor = () => {
    const o = Math.round,
      r = Math.random,
      s = 255;
    return (
      'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      0.7 +
      ')'
    );
  };

  const _insertNotesToArray = (
    setNotes: React.Dispatch<React.SetStateAction<INotes[]>>,
    value: string,
    bgColor: string
  ) => {
    setNotes((prevState) => [
      ...prevState,
      { id: new Date().getTime(), name: value, bgColor: bgColor },
    ]);
  };

  const onNotesAdd = () => {
    if (insertValue.length != 0) {
      const color = _generateRandomColor();
      _insertNotesToArray(setCustomNotes, insertValue, color);
      _clearInput();
    }
  };
  const onDeleteNotes = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    indexKey: number
  ) => {
    const obj = customNotes.filter((note) => note.id !== indexKey);
    setCustomNotes(obj);
  };
  console.log(customNotes);
  return (
    <Container mode={isMode} lengthText={50}>
      <div className='notes-header'>
        <h2 className='notes-header--title'>Brainstrom your ideas</h2>
        <div className='notes-header__div'>
          <input
            type='text'
            placeholder='// Write a short note here..'
            onChange={_getInputValue}
            value={insertValue}
          />
          <Button clicked={onNotesAdd} variant={Shape.circle}>
            +
          </Button>
        </div>
      </div>
      <div className='notes-main'>
        <Cards
          isMode={isMode}
          arrayNotes={customNotes}
          clicked={onDeleteNotes}
        />
      </div>
    </Container>
  );
};

export default Notes;
