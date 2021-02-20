import React, { Fragment, FunctionComponent } from 'react';
import { Container } from './Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface INotes {
  id: number;
  name: string;
  bgColor: string;
}

interface IProps {
  isMode: boolean;
  arrayNotes: INotes[];
  clicked: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    indexKey: number
  ) => void;
}

const Cards: FunctionComponent<IProps> = ({ isMode, arrayNotes, clicked }) => {
  return (
    <Fragment>
      {arrayNotes.map((note) => (
        <Container
          mode={isMode}
          key={note.id}
          lengthText={note.name.length}
          bgColor={note.bgColor}
        >
          <div className='wrapper'>
            {note.name}
            <FontAwesomeIcon
              icon={faTrash}
              className='trash'
              onClick={(event) => clicked(event, note.id)}
            />
          </div>
        </Container>
      ))}
    </Fragment>
  );
};

export default Cards;
