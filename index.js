document.addEventListener("DOMContentLoaded", () => {
  function updateDateTime() {
    // Get the current date and time
    const currentDate = new Date();

    // Get the current UTC date and time
    const currentUTCDate = new Date(currentDate.toISOString());

    const time = new Date().getTime();
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
  setInterval(updateDateTime, 100);
});
