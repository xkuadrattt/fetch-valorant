export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("data from utils", data);
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};
