export function formatDate(unixDate, js = true) {
  let time = unixDate;
  if (!js) {
    time = unixDate * 1000;
  }
  const date = new Date(time);
  const translatedDate = date.toLocaleString("en-US", {
    timeZone: "America/Boise",
  });
  // const formatedDate = translatedDate.split(",")[0];
  // return translatedDate.slice(0, translatedDate.length - 13);
  return translatedDate;
}

// mm/dd/yyyy
export function formatDateFull(unixDate, js = true) {
  let time = unixDate;
  if (!js) {
    time = unixDate * 1000;
  }
  const date = new Date(time);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export function formatDatePartial(unixDate, js = true) {
  let time = unixDate;
  if (!js) {
    time = unixDate * 1000;
  }
  const date = new Date(time);
  const translatedDate = date.toLocaleString("en-US", {
    timeZone: "America/Boise",
  });
  const formatedDate = translatedDate.split(",")[0];
  // return translatedDate.slice(0, translatedDate.length - 13);
  return formatedDate;
}

export function formatDateTime(unixDate, js = true) {
  let time = unixDate;
  if (!js) {
    time = unixDate * 1000;
  }
  const date = new Date(time);
  const translatedDate = date.toLocaleString("en-US", {
    timeZone: "America/Boise",
  });
  // return translatedDate.slice(0, translatedDate.length - 13);
  return translatedDate;
}

export function convertHTMLDate(htmlDate: string) {
  const dateParts = htmlDate.split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  return new Date(`${month}/${day}/${year}`);
}
