<<<<<<< HEAD
const formatDate = (value) => {
  if (!value) {
    return;
=======
export const formatDate = (value) => {
  if (!value) {
    return "";
>>>>>>> 7b9098b190604f11c817c013f31a26b42235d565
  }
  const date = new Date(value);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const format = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  return format;
};

export const formatDateAndTime = (value) => {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  const format = `${date.getDate()}/${month}/${date.getFullYear()} ${hours}:${minutes}`;
  return format;
};

export const formatInputDate = (value) => {
  if (!value) {
    return;
  }
  const date = new Date(value);
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const format = `${date.getFullYear()}-${month}-${date.getDate()}`;
  return format;
};

export const getTimeRemaining = (start, end) => {
  if (!start || !end) {
    return;
  }
  const total = Date.parse(end) - Date.parse(start);
  // const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return `${days}`;
};
