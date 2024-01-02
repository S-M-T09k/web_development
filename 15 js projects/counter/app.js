let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(
    (element) => {
        element.addEventListener('click', (e) => {
            const button = e.currentTarget.classList;

            ChangeCount ();

            ChangeColor ();

            function ChangeCount ()
            {
                if (button.contains ("decrease")) {
                    count--;
                }
                else if (button.contains ("increase")) {
                    count++;
                }
                else if (button.contains ("reset")) {
                count = 0;
                };

                value.textContent = count;
            };

            function ChangeColor ()
            {
                if (count == 0) {
                    value.style.color = "#222";
                }
                else if (count > 0) {
                    value.style.color = "green";
                }
                else if (count < 0) {
                    value.style.color = "red";
                };
            }
        });
    }
);
//*done