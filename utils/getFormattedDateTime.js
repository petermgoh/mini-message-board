function getFormattedDateTime() {
    const dateTime = new Date();
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
  
    return dateTime.toLocaleString("en-us", options);
  }
  
 module.exports = getFormattedDateTime;