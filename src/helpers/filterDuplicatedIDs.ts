import { Image } from "../constants/types";

const filterDuplicatedIDs = (
  originList: Image["list"],
  newList: Image["list"]
) => {
  const originListIDs = originList.map((item) => item.id);
  const filteredList = newList.filter(
    (item) => !originListIDs.includes(item.id)
  );
  return [...originList, ...filteredList];
};

export default filterDuplicatedIDs;
