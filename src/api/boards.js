import axios from "axios";

const SERVER_URI = 'http://localhost:4000'

// 모든 board를 가져오는 api
const getBoard = async () => {
  const response = await axios.get(`${SERVER_URI}/board`);
  return response;
};

const addBoard = async (newBoard) => {
    await axios.post(`${SERVER_URI}/board`, newBoard);
  };

export { getBoard, addBoard };