document.addEventListener("DOMContentLoaded", () => {
  function updateDateTime() {
    // Get the current date and time
    const currentDate = new Date();

    // Get the current UTC date and time
    const currentUTCDate = new Date(currentDate.toISOString());

    const hours = currentUTCDate.getUTCHours();
    const minutes = currentUTCDate.getUTCMinutes();
    const seconds = currentUTCDate.getUTCSeconds();

    const timeFormat = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    const secondsFormatted = seconds < 10 ? `0${seconds}` : seconds;

    const time = `${hours12}:${minutesFormatted}:${secondsFormatted} ${timeFormat}`;

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = currentDate.getUTCDay();

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    document.getElementById("time").innerHTML = time;
    document.getElementById("day").innerHTML = daysOfWeek[dayOfWeek];
  }

  updateDateTime();

  // Update the date and time every second (1000 milliseconds)
  setInterval(updateDateTime, 1000);
});
