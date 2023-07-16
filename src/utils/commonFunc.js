import { useDispatch } from "react-redux";

export const handleError = (key, errorMsg, setter) => {
  setter((preError) => ({
    ...preError,
    [key]: errorMsg,
  }));
};

export const handleChange = (e, dataSetter, errorSetter) => {
  const { name, value } = e.target;
  dataSetter((pre) => ({
    ...pre,
    [name]: value,
  }));

  errorSetter((preError) => ({
    ...preError,
    [name]: "",
  }));
};

export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i=newArray.length-1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1))
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

export const randomNum = () => {
  let random =   Math.floor(Math.random()*900)+10
  return random;
}

export const priceWithoutOffer = (price,discount) => {
  let res = (100/(100-discount)) * price;
  return res.toFixed(1);
}

const today = new Date();
const options = { day: "numeric", month: "long", year: "numeric" };
const todayDate = today.toLocaleDateString("en-GB", options);

