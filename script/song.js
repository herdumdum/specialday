// trigger to play music in the background with SweetAlert
window.addEventListener("load", () => {
    Swal.fire({
      title: "Play?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        document.querySelector(".song").play();
        animationTimeline();
      } else {
        animationTimeline();
      }
    });
  });

