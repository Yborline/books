import TrainingListItem from '../TrainingListItem/TrainingListItem';
import {
  TrainingListContainer,
  TrainingListHeader,
  TrainingListHeaderBookTitle,
  TrainingListHeaderBookAuthor,
  TrainingListHeaderBookYear,
  TrainingListHeaderBookPages,
  TrainingListStyled,
} from './TrainingList.styled';

import {
  TrainingListItemStyled,
  BookIconStyled,
  TrainingListItemTitle,
  TrainingListItemAuthor,
  TrainingListItemYear,
  TrainingListItemPages,
} from '../TrainingListItem/TrainingListItem.styled';

import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const TrainingList = () => {
  const books = useSelector(state => state.training.books);
  return (
    <TrainingListContainer>
      <TrainingListHeader>
        <TrainingListHeaderBookTitle>Назва книги</TrainingListHeaderBookTitle>
        <TrainingListHeaderBookAuthor>Автор</TrainingListHeaderBookAuthor>
        <TrainingListHeaderBookYear>Рік</TrainingListHeaderBookYear>
        <TrainingListHeaderBookPages>Стор.</TrainingListHeaderBookPages>
      </TrainingListHeader>
      <TrainingListStyled>
        {/* <TrainingListItem /> */}
        {books.length ? (
          books.map(book => (
            <TrainingListItem
              author={book.author}
              title={book.title}
              year={book.year}
              pages={book.pages}
              key={uuidv4()}
              id={book.id}
            />
          ))
        ) : (
          <TrainingListItemStyled>
            <BookIconStyled />
            <TrainingListItemTitle>...</TrainingListItemTitle>
            <TrainingListItemAuthor />
            <TrainingListItemYear />
            <TrainingListItemPages />
          </TrainingListItemStyled>
        )}
      </TrainingListStyled>
    </TrainingListContainer>
  );

  // <TrainingListItem />;
};
export default TrainingList;
