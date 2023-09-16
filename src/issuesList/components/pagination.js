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
      dispatch(setCurrentPage(11));
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
      <Button onClick={onStartBtn}>《</Button>
      <Button onClick={onBefore}>〈</Button>
      {renderPageButtons()}
      <Button onClick={onNext}>〉</Button>
      <Button onClick={onEndBtn}>》</Button>
    </PaginationBtn>
  );
};
export default PageIssues;

const PaginationBtn = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-weight: 900;
`;
