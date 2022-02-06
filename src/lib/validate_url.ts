import axios from "axios"; // IMPORTANTE

export const validate_url = async (url: string): Promise<boolean> => {
  try {
    axios.get(url);
    return true;
  }
  catch (error) {
    return false;
  }
};
