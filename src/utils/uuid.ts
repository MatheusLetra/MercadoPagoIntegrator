import { v4 as uuidv4 } from "uuid";


export const generateUUIDToken = () => {
  let token = uuidv4();

  return token;
}


