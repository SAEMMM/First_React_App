import axios from "axios";

// 모든 todos를 가져오는 api
const getBoards= async () => {
  const response = await axios.get("http://localhost:4000/board");
  return response;
};

export { getBoards };