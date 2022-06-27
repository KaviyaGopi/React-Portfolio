import React from "react";
import Nav from "../Components/Nav";

function Projects() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <p className="my-16 ml-16 text-center font-bold text-4xl">PROJECTS</p>
      <div className=" ml-16 mt-28 grid grid-cols-3 gap-8 py-2 ">
        <div className="mb-16 drop-shadow-2xl bg-[#f7f7f7] rounded-3xl mx-20 hover:bg-[#B858] duration-500 hover:-translate-y-3">
          <div>
            <img
              className="rounded-t-3xl"
              src="https://media.istockphoto.com/photos/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-picture-id1353332258?b=1&k=20&m=1353332258&s=170667a&w=0&h=tsU8wdJuXCIXJ8wTC8PgLAin3A5sDAStCbqwB8erLyI="
              class="project-img"
              alt="donation"
            />
            <div>
              <p className="my-10 font-bold text-2xl pl-10">Donation App</p>
              <p className="text-[18px] px-10">
                The basic idea of this project is to integrate all kind of
                donation in one page like food, books and blood donation.
                <br />
                <br />
                This project is made using Python and Streamlit.
                <br />
                <br />
                The same project is recreated from scratch using HTML, CSS and
                JavaScript.
              </p>
              <div className="text-right text-lg pr-8 pt-2 pb-6 ">
                <a
                  href="https://star-rak.github.io"
                  target="_blank"
                  rel="noopeners noreferrer"
                  className="rounded-lg"
                >
                  ▶ Project link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-16 drop-shadow-2xl bg-[#f7f7f7] rounded-3xl mx-20 hover:bg-[#c9c9c9] duration-500 hover:-translate-y-3">
          <div>
            <img
              className="rounded-t-3xl"
              src="https://cdn.discordapp.com/attachments/945615575068082176/966710504947068948/unknown.png"
              alt="Clone"
            />
            <div>
              <p className="my-10 font-bold text-2xl pl-10">Website Clone</p>
              <p className="text-[18px] px-10">
                To explore my learning, I cloned and developed websites like
                Omnifood and Mega from scratch.
                <br />
                <br />
                Doing these projects made me confident about concepts like
                Flexbox and CSS Grid.
                <br />
                <br />
                This project is made using HTML, CSS and Basic JavaScript (only
                for Nav-bar purpose)
              </p>
              <div className="text-right text-lg pr-8 pt-2 pb-6 ">
                <a
                  href="https://kaviyagopi.github.io/Omnifood-Desktop-and-Responsive/"
                  target="_blank"
                  rel="noopeners noreferrer"
                >
                  ▶ Project link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 drop-shadow-2xl bg-[#f7f7f7] rounded-3xl mx-20 hover:bg-[#FABF89] duration-500 hover:-translate-y-3">
          <div>
            <img
              className="rounded-t-3xl"
              src="https://cdn.discordapp.com/attachments/945615575068082176/966714116528042025/unknown.png"
              alt="Dice"
            />
            <div>
              <p className="my-10 font-bold text-2xl pl-10">
                Rolling Dice Game
              </p>
              <p className="text-[18px] px-10">
                For Learning JavaScript, I thought of choosing a different way.
                <br />
                <br />
                I started developing games that would make learning fun.
                <br />
                <br />
                This project is made mainly for learning JavaScript. The project
                also uses HTML and CSS.
              </p>
              <div className="text-right text-lg pr-8 pt-2 pb-6 ">
                <a
                  href="https://kaviyagopi.github.io/Rolling-Dice-Game/"
                  target="_blank"
                  rel="noopeners noreferrer"
                >
                  ▶ Project link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" mb-16 drop-shadow-2xl bg-[#f7f7f7] rounded-3xl mx-20 hover:bg-[#F4F1D5] duration-500 hover:-translate-y-3">
          <div>
            <img
              className="rounded-t-3xl"
              src="https://i.ytimg.com/vi/E-Voff821tE/maxresdefault.jpg"
              alt="Guess"
            />
            <div>
              <p className="my-10 font-bold text-2xl pl-10">Guess The Number</p>
              <p className="text-[18px] px-10">
                To play, the game selects a mystery number and the player enters
                the number, you'll get a hint.
                <br />
                <br />
                If guess id greater or less than the mystery number. guesses to
                further numbers until the mystery number
                <br />
                <br />
                This project is made using HTML, CSS and JavaScript
              </p>
              <div className="text-right text-lg pr-8 pt-2 pb-6 ">
                <a
                  href="https://kaviyagopi.github.io/Guess-The-Number/"
                  target="_blank"
                  rel="noopeners noreferrer"
                >
                  ▶ Project link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
