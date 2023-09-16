import { useDispatch, useSelector } from "react-redux";
import { setShowPageNum } from "../../../reducer/issues";

const ChangeShowNum = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <select
        onChange={(e) => {
          const value = e.target.value;
          dispatch(setShowPageNum(value));
        }}
      >
        <option>10</option>
        <option>20</option>
        <option>50</option>
      </select>
    </div>
  );
};
export default ChangeShowNum;
