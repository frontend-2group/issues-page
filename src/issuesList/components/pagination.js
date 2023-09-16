import { useDispatch, useSelector } from "react-redux";
import {
  asyncIssues,
  setCurrentPage,
  setStartPage,
  setEndPage,
} from "../../reducer/issues";
import { useEffect } from "react";
import styled from "styled-components";

const PageIssues = () => {
  const dispatch = useDispatch();

  const { startPage, endPage, issues, currentPage } = useSelector(
    (state) => state.issues
  );

  useEffect(() => {
    dispatch(asyncIssues());
  }, [dispatch]);

  const lastPage = issues !== null && Math.ceil((issues.length * 2) / 3);

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => {
            dispatch(setCurrentPage(i));
            window.scroll({
              top: 0,
            });
          }}
          style={{ backgroundColor: currentPage === i ? "red" : "#fff" }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const onBefore = () => {
    if (startPage > 10) {
      dispatch(setStartPage(startPage - 10));
      dispatch(setEndPage(endPage - 10));
    }
  };
  const onNext = () => {
    if (endPage < lastPage) {
      dispatch(setStartPage(startPage + 10));
      dispatch(setEndPage(endPage + 10));
    }
  };
  const onStartBtn = () => {
    dispatch(setCurrentPage(1));
    if (startPage > 10) {
      dispatch(setStartPage(startPage - 10));
      dispatch(setEndPage(endPage - 10));
    }
  };
  const onEndBtn = () => {
    dispatch(setCurrentPage(lastPage));
    if (endPage < lastPage) {
      dispatch(setStartPage(startPage + 10));
      dispatch(setEndPage(endPage + 10));
    }
  };

  return (
    <PaginationBtn>
      <button onClick={onStartBtn}>맨처음</button>
      <button onClick={onBefore}>◀</button>

      {renderPageButtons()}

      <button onClick={onNext}>▶</button>
      <button onClick={onEndBtn}>마지막</button>
    </PaginationBtn>
  );
};
export default PageIssues;

const PaginationBtn = styled.div`
  display: flex;
  justify-content: center;
`;
