// trigger to play music in the background with SweetAlert
window.addEventListener("load", () => {
    Swal.fire({
      title: "Do you want to play music? (Highly Recommended)",
      icon: "warning",
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

// Set initial positions of daisies above the viewport
gsap.set(".daisy", {
  x: () => gsap.utils.random(-window.innerWidth/2, window.innerWidth/2), // Random horizontal position across the screen width
  y: () => gsap.utils.random(-300, -50), // Random position above the top of the screen
  opacity: 0, // Start with invisible daisies
  scale: () => gsap.utils.random(0.7, 1.2), // Randomize size of daisies
  rotation: () => gsap.utils.random(0, 360), // Random rotation
});




  // animation timeline
  const animationTimeline = () => {
  
    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg",
    };
  
    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg",
    };
  
    // Timeline
    const tl = gsap.timeline();
  
    tl.to(".container", { duration: 0.6, visibility: "visible" })
      .from(".one", { duration: 0.7, opacity: 0, y: 10 })
      .from(".two", { duration: 0.5, opacity: 0, y: 10 }, "+=1")
      .to(".one", { duration: 0.7, opacity: 0, y: 10 }, "+=3.5")
      .to(".two", { duration: 0.7, opacity: 0, y: 10 }, "-=1")
      
      
      .from(".idea-1", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-1", { duration: 0.7, ...ideaTextTransLeave }, "+=2")

      .from(".idea-2", { duration: 0.7, ...ideaTextTrans })
      .from(".idea-3", { duration: 0.7, ...ideaTextTrans }, "+=1")
      .to(".idea-2", { duration: 0.7, ...ideaTextTransLeave }, "+=2")
      .to(".idea-3", { duration: 0.7, ...ideaTextTransLeave }, "-=1")
  
      .from(".idea-4", { duration: 0.7, ...ideaTextTrans })
      .from(".idea-5", { duration: 0.7, ...ideaTextTrans }, "+=1")
      .to(".idea-4", { duration: 0.7, ...ideaTextTransLeave }, "+=2")
      .to(".idea-5", { duration: 0.7, ...ideaTextTransLeave }, "-=1")


      .from(".idea-6", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-6", { duration: 0.7, ...ideaTextTransLeave }, "+=2")
      .from(".idea-7", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-7", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")


      .from(".idea-8", { duration: 0.7, ...ideaTextTrans })
      


     // Create the falling animation
      .to(".daisy", {
        duration: (i, target) => 7 / parseFloat(gsap.getProperty(target, "scale")), // Randomize fall duration for variation
        y: window.innerHeight + 50, // Move daisies to below the viewport
        opacity: 0.7, // Make daisies visible as they fall
        ease: "ease", // Linear easing for constant falling speed
        stagger: 0.3, // Start daisies falling one after another
        delay: () => gsap.utils.random(0, 3), // Randomize start delay for each daisy
        x: "+=120", // Slight horizontal drift as they fall
        rotation: 45, // Gentle rotation for natural effect
      }, "-=1.5")


      .to(".idea-8", { duration: 0.7, ...ideaTextTransLeave }, "-=2")
      
      
      .from(".idea-9", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-9", { duration: 0.7, ...ideaTextTransLeave }, "+=1")
      .from(".idea-10", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-10", { duration: 0.7, ...ideaTextTransLeave }, "+=2")

      .from(".idea-11", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-11", { duration: 0.7, ...ideaTextTransLeave }, "+=2")

      .from(".idea-102", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-102", { duration: 0.7, ...ideaTextTransLeave }, "+=2")
      
      .from(".idea-12", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-12", { duration: 0.7, ...ideaTextTransLeave }, "+=1")
      .from(".idea-13", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-13", { duration: 0.7, ...ideaTextTransLeave }, "+=2")
      .from(".idea-14", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-14", { duration: 0.7, ...ideaTextTransLeave }, "+=1")
      .from(".idea-15", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-15", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
      .from(".idea-16", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-16", { duration: 0.7, ...ideaTextTransLeave }, "+=2")
      .from(".idea-17", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-17", { duration: 0.7, ...ideaTextTransLeave }, "+=2")

      //hehe animation
      .from(".hehe", {
        duration: 0.8,
        opacity: 0,
        rotation: 15,
        ease: "expo.out",
        stagger: 0.2,
      })
      .to(".hehe", {
        duration: 0.5,
        opacity: 1,

      })
      .to(".hehe", {
        duration: 0.8,
        scale: 6,
        opacity: 0,
        rotation: -15,
        ease: "expo.out",
        stagger: 0.2,
      }, "+=1.5")

      .from(".idea-19", { duration: 0.7, ...ideaTextTrans })
      .to(".strong", {
        duration: 0.5,
        scale: 1.2,
        x: 10,
        backgroundColor: "#0492c2",
        color: "#ffffff",
      })
      .to(".idea-19", { duration: 0.7, ...ideaTextTransLeave }, "+=2")


      .from(".idea-20", {
        duration: 0.7,
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      }, "+=1.5")
      .to(".idea-20", { duration: 0.7, scale: 0.2, opacity: 0}, "+=2")

      .from(".first-smile", { duration: 0.5, ...ideaTextTrans },)
      .to(".first-smile", { duration: 0.5, rotation: 90 },"+=1")
      .to(".first-smile", { duration: 0.5, scale: 2, ...ideaTextTransLeave }, "+=1")


      .fromTo(".baloons img", {
        opacity: 0.9,
        y: 1400,
      }, {
        duration: 2.5,
        opacity: 1,
        y: -1000,
        stagger: 0.2,
      }, "-=2")
      .from(".profile-picture", {
        duration: 0.5,
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      }, "-=2")
      .from(".hat", { duration: 0.5, x: -100, y: 350, rotation: -180, opacity: 0 })
      .from(".wish-hbd", {
        duration: 0.7,
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: "elastic.out(1, 0.5)",
        stagger: 0.1,
      })
      .fromTo(".wish-hbd span", {
        scale: 1.4,
        rotationY: 150,
      }, {
        duration: 0.7,
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: "expo.out",
        stagger: 0.1,
      }, "party")
      .from(".wish h5", { duration: 0.5, opacity: 0, y: 10, skewX: "-15deg" }, "party")
      .to(".eight svg", {
        duration: 1.5,
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
        stagger: 0.3,
      })
      .to(".six", { duration: 0.5, opacity: 0, y: 30, zIndex: "-1" })
      .from(".nine p", { duration: 1, ...ideaTextTrans, stagger: 1.2 })
      .to(".last-smile", { duration: 0.5, rotation: 90 }, "+=1");
  
      // Restart Animation on click
      const replyBtn = document.getElementById("replay");
      replyBtn.addEventListener("click", () => {
        tl.restart();
      });

      // Redirect to another page on click
      const redirectBtn = document.getElementById("dand");
      redirectBtn.addEventListener("click", () => {
        window.location.href = "/song";
      });

  };
  