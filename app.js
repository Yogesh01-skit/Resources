function getMotivation() {
    let mindset = document.getElementById("mindset").value;
    let output = document.getElementById("output");
    let body = document.getElementById("body");

    let thoughts = {
        "happy": { 
            motivation: "Keep spreading happiness! 😊",
            suggestion: "Engage in activities that bring you joy and share positive vibes!",
            color: "#ffeb3b"
        },
        "sad": { 
            motivation: "Tough times don’t last, but tough people do. 💪",
            suggestion: "Talk to a friend, listen to uplifting music, or write down your thoughts to feel better.",
            color: "#2196F3"
        },
        "stressed": { 
            motivation: "Take a deep breath, you got this! 🌿",
            suggestion: "Try meditation, a short walk, or a deep breathing exercise to relieve stress.",
            color: "#ff9800"
        },
        "confused": { 
            motivation: "Clarity comes with time, stay patient. ✨",
            suggestion: "Break down the problem into small steps and tackle them one by one.",
            color: "#9C27B0"
        },
        "motivated": { 
            motivation: "Go chase your dreams! 🚀",
            suggestion: "Set a goal for today and take one action toward it now!",
            color: "#4CAF50"
        }
    };

    if (mindset in thoughts) {
        output.innerHTML = `<p><strong>Motivation:</strong> ${thoughts[mindset].motivation}</p>
                            <p><strong>Suggestion:</strong> ${thoughts[mindset].suggestion}</p>`;
        body.style.backgroundColor = thoughts[mindset].color;
    } else {
        output.innerHTML = "<p>Please select your mindset first.</p>";
    }
}
