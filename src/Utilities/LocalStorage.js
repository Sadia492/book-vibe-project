const getStoredRead = () => {
  const storedRead = localStorage.getItem("read");
  if (storedRead) {
    return JSON.parse(storedRead);
  }
  return [];
};

const addReadToLs = (id) => {
  const read = getStoredRead();
  read.push(id);

  saveToLs(read);
};

const saveToLs = (read) => {
  const readStringify = JSON.stringify(read);
  localStorage.setItem("read", readStringify);
};

// for wishList
const getStoredWishList = () => {
  const storedWish = localStorage.getItem("wishList");
  if (storedWish) {
    return JSON.parse(storedWish);
  }
  return [];
};

const addWishToLs = (id) => {
  const wish = getStoredWishList();
  wish.push(id);

  saveWishToLs(wish);
};

const saveWishToLs = (wish) => {
  const wishStringify = JSON.stringify(wish);
  localStorage.setItem("wishList", wishStringify);
};
export { addReadToLs, getStoredRead, addWishToLs, getStoredWishList };
