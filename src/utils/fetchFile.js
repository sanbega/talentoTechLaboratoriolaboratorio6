import axios from "axios";

const fetchFile = async (filename) => {
  const response = await axios.get(`/api/file`, { params: { filename } });
  return response.data;
};

export default fetchFile;
