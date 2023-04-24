import React from "react";

export default function Rolodex() {
	const projects = [
		{
			name: 'FishMonger DB',
			description:
				'FishMongerDB is a simplified version of the database at fishwatch.gov that provides a more readable and accessible way of viewing their data. It is built using Javascript, Mongoose, Express, and EJS, barebones.css and requires the following dependencies: dotenv, ejs, express, method-override, mongoose.',
			liveDemoUrl: 'https://fish-finding.onrender.com/fish',
			githubUrl: 'https://github.com/Fussyotter/project2',
		},
		{
			name: 'News API',
			description:
				'Django and React App to collect news stories and tailor bookmarks to authenticated user preference.',
			liveDemoUrl: 'https://news-frontend.onrender.com/',
			githubUrl: 'https://github.com/Fussyotter/ga_project4_frontend',
		},
		{
			name: 'SightSeer',
			description:
				'A Blog application that aims to provide users with a platform to share details of their upcoming trips. Users will be able to post trip information, including images and descriptions.',
			liveDemoUrl: 'https://sightseer-frontend.onrender.com/',
			githubUrl: 'https://github.com/Alberto-Ibarra/sightseer_frontend',
		},
		{
			name: 'Sage',
			description:
				"Django and Next.js app to showcase User to User messaging and storage, custom animation and a fun example of ChatGPT's ability to generate injectable HTML.",
			liveDemoUrl: 'https://sage-front-5srp5qym8-fussyotter.vercel.app/',
			githubUrl: 'https://github.com/Fussyotter/sage_front/tree/main',
		},
	];

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const icons = [
	'M -6 -1 a 3 3 0 0 1 6 0 a 3 3 0 0 1 6 0 q 0 4 -6 7 q -6 -3 -6 -7', // heart
	'M -2 -6 a 6 6 0 0 1 0 12 a 12 12 0 0 0 0 -12', // moon
	'M 0 -5.5 l 2 4 h 4 l -3.5 2.5 l 1.5 4.5 l -4 -2 l -4 2 l 1.5 -4.5 l -3.5 -2.5 h 4 l 2 -4', // star
	'M 5 1 a 5 5 0 0 1 -5 5 a 5 5 0 0 1 -5 -5 q 0 -2.5 1 -4 q 1 2.5 1 4 h 6 q 0 -2.5 1 -4 q 1 2.5 1 4 h -3 q 0 -4 -2 -6.5 q -2 3 -2 6.5 h -2', // fire
];
const deck = document.querySelector('.deck');

projects.forEach(({ name, description, liveDemoUrl, githubUrl }, index) => {
	/* project markup

  article.card
    div.card--front
      svg, avatar (add the random icon wrapped in a circle)
      h1, name
      h2, at
      p, tag
      button, pointing downwards
    div.card--back
      button, pointing upwards

  */
	const project = document.createElement('article');
	project.className = 'project';
	// negative index to have each subsequent article behind the previous one
	project.style.zIndex = -index;

	project.innerHTML = `
    <div class="project--front">
      <svg fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- mask to cut out the portion of the circle where the icon goes -->
        <defs>
          <mask id="icon">
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="#fff">
            </rect>
            <circle
              cx="75"
              cy="80"
              r="11"
              fill="#000">
            </circle>
          </mask>
        </defs>
        <!-- wrap the avatar in a circle -->
        <g
          fill="none"
          stroke="currentColor"
          stroke-width="2">
          <circle
            cx="50"
            cy="50"
            r="40"
            mask="url(#icon)">
          </circle>
          <g
            transform="translate(75 80)">
            <circle
              cx="0"
              cy="0"
              r="11">
            </circle>
            <!-- include the random icon -->
            <g fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="${randomItem(icons)}">
              </path>
            </g>
          </g>
        </g>
        <g>
          <path d="m38.977 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0"></path>
          <path d="m60.477 59.074c0 2.75-4.125 2.75-4.125 0s4.125-2.75 4.125 0"></path>
        </g>
        <path d="m48.203 69.309c1.7344 0 3.1484-1.4141 3.1484-3.1484 0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.1836-0.96484 2.1484-2.1484 2.1484s-2.1484-0.96484-2.1484-2.1484c0-0.27734-0.22266-0.5-0.5-0.5-0.27734 0-0.5 0.22266-0.5 0.5 0 1.7344 1.4141 3.1484 3.1484 3.1484z"></path>
        <path d="m35.492 24.371c0.42187-0.35156 0.48047-0.98438 0.125-1.4062-0.35156-0.42188-0.98438-0.48438-1.4062-0.125-5.1602 4.3047-16.422 17.078-9.5312 42.562 0.21484 0.79688 0.85547 1.4062 1.6641 1.582 0.15625 0.035156 0.31641 0.050781 0.47266 0.050781 0.62891 0 1.2344-0.27344 1.6445-0.76562 0.82812-0.98828 2.0039-1.5391 2.793-1.8203 0.56641 1.6055 1.4766 3.3594 2.9727 4.9414 2.2852 2.4219 5.4336 3.9453 9.3867 4.5547-3.6055 4.5-3.8047 10.219-3.8086 10.484-0.011719 0.55078 0.42187 1.0078 0.97656 1.0234h0.023438c0.53906 0 0.98437-0.42969 1-0.97266 0-0.054688 0.17187-4.8711 2.9805-8.7773 0.63281 1.2852 1.7266 2.5 3.4141 2.5 1.7109 0 2.7578-1.2695 3.3398-2.6172 2.8867 3.9258 3.0586 8.8359 3.0586 8.8906 0.015625 0.54297 0.46094 0.97266 1 0.97266h0.023438c0.55078-0.015625 0.98828-0.47266 0.97656-1.0234-0.007812-0.26953-0.20703-6.0938-3.9141-10.613 7.0781-1.3086 10.406-5.4219 11.969-8.9766 1.0508 0.98828 2.75 2.1992 4.793 2.1992 0.078126 0 0.15625 0 0.23828-0.003906 0.47266-0.023438 1.5781-0.074219 3.4219-4.4219 1.1172-2.6406 2.1406-6.0117 2.8711-9.4922 4.8281-22.945-4.7852-30.457-9.1445-32.621-12.316-6.1172-22.195-3.6055-28.312-0.42188-0.48828 0.25391-0.67969 0.85938-0.42578 1.3477s0.85938 0.67969 1.3477 0.42578c5.7031-2.9688 14.934-5.3047 26.5 0.4375 7.1875 3.5703 9 11.586 9.2539 17.684 0.49609 11.93-4.2617 23.91-5.7344 25.062h-0.015626c-1.832 0-3.4102-1.5742-4.0352-2.2852 0.28906-0.99609 0.44531-1.8672 0.52734-2.5117 0.62891 0.16797 1.2812 0.27344 1.9727 0.27344 0.55469 0 1-0.44922 1-1 0-0.55078-0.44531-1-1-1-7.3203 0-10.703-13.941-10.734-14.082-0.097656-0.40625-0.4375-0.71094-0.85156-0.76172-0.43359-0.050781-0.82031 0.16406-1.0117 0.53906-1.8984 3.7188-1.4297 6.7539-0.67969 8.668-6.2383-2.2852-8.9766-8.6914-9.0078-8.7617-0.17969-0.43359-0.62891-0.68359-1.1016-0.60156-0.46094 0.082032-0.80469 0.47266-0.82422 0.94141-0.14062 3.3359 0.67188 5.75 1.5 7.3164-8.3125-2.4297-10.105-11.457-10.184-11.875-0.097656-0.51562-0.57422-0.86328-1.0898-0.8125-0.51953 0.054687-0.90625 0.50391-0.89062 1.0234 0.41406 13.465-1.8516 17.766-3.2383 19.133-0.66406 0.65625-1.1992 0.67188-1.2383 0.67188-0.53906-0.050781-1.0156 0.31641-1.0938 0.85156-0.078125 0.54688 0.29688 1.0547 0.84375 1.1328 0.03125 0.003906 0.11328 0.015625 0.23828 0.015625 0.36719 0 1.1016-0.09375 1.9414-0.66406 0.050781 0.38672 0.125 0.81641 0.21875 1.2656-1.0273 0.35156-2.6211 1.0781-3.7812 2.4648-0.015625 0.019532-0.054687 0.066406-0.15625 0.046875-0.039062-0.007812-0.13281-0.039062-0.16406-0.15234-2.1875-8.1094-5.7148-28.309 8.8867-40.496zm12.711 51.828c-1.0039 0-1.5898-1.207-1.8672-2.0117 0.48047 0.023438 0.95703 0.050781 1.4531 0.050781 0.74219 0 1.4453-0.035156 2.1289-0.082031-0.24219 0.83594-0.76172 2.043-1.7148 2.043zm-13.148-30.664c1.9531 3.6211 5.6367 7.9102 12.305 8.6992 0.43359 0.046875 0.83984-0.18359 1.0234-0.57422 0.18359-0.39062 0.089844-0.85938-0.22656-1.1523-0.074219-0.070312-1.2734-1.2227-1.9688-3.6367 2 2.6094 5.3359 5.6836 10.305 6.5664 0.42187 0.070312 0.83594-0.125 1.0469-0.49219 0.21094-0.36719 0.16406-0.82812-0.11719-1.1484-0.023437-0.027344-1.9414-2.2969-1.2891-5.8906 1.2227 3.5508 3.7461 9.2227 7.8945 11.551-0.03125 0.55859-0.14844 1.668-0.55078 3.0156-0.085937 0.13672-0.125 0.28516-0.13672 0.44531-1.3008 3.8906-5.0039 9.3281-15.547 9.3281-5.375 0-9.4414-1.418-12.086-4.2109-3.5664-3.7656-3.332-8.8477-3.332-8.8984v-0.011719c1.5898-2.7227 2.5-7.3203 2.6797-13.59z"></path>
      </svg>

      <h1>${name}</h1>
      <h2>${description}</h2>
      <p>${liveDemoUrl}</p>
      <p>${githubUrl}</p>
      <button>
        <svg viewBox="0 0 100 100" width="35" height="35">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="20"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M 50 10 v 80 l -30 -20 l 30 20 l 30 -20">
          </path>
        </svg>
      </button>
    </div>

    <div class="project--back">
      <button>
        <svg viewBox="0 0 100 100" width="35" height="35">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="20"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M 50 10 v 80 l -30 -20 l 30 20 l 30 -20">
          </path>
        </svg>
      </button>
    </div>
    `;

	// following a click on the article toggle the class of active allowing for the 3D rotation
	// ! the click is also registered following a press on the nested buttons, as the event bubbles up
	project.addEventListener('click', () => {
		project.classList.toggle('active');
		// flip the z-index to have the projects in the opposite order
		// ! the timeout is a bit of an hack to avoid immediately displaying the underlying projects as a project is toggle back
		const timeoutID = setTimeout(() => {
			project.style.zIndex = project.style.zIndex * -1;
			clearTimeout(timeoutID);
		}, 500);
	});
	deck.appendChild(project);
});
return(
<>
<div className="deck relative w-350 h-250 my-12 filter drop-shadow-lg">
  {/* container for the cards, added through the script */}
  <div className="cards absolute w-full h-full"></div>

  {/* svg icon describing the profile of a rolodex */}
  <svg
    id="rolodex"
    className="absolute top-0 left-0 w-full h-full"
    viewBox="0 0 464 464"
    width="464"
    height="464"
  >
    {/* background circle */}
    <g>
      <circle
        cx="232"
        cy="232"
        r="232"
        fill="#fff"
      ></circle>
    </g>

    {/* actual graphic describing the profile of a rolodex */}
    <svg viewBox="0 0 210 264" x="127" y="100" width="210" height="264">
      <defs>
        {/* line used for the profile of the cards */}
        <path
          id="line"
          d="M 0 0 v -100"
          fill="none"
          stroke="#26262B"
          strokeLinecap="round"
          strokeWidth="10"
        ></path>

        {/* semicircle used to create the rolodex structure */}
        <path
          id="semicircle"
          d="M 0 0 v -100 a 100 100 0 0 1 0 200 z"
        ></path>
      </defs>

      <g>
        {/* group to translate the shapes and change the transform-origin */}
        <g className="transform translate-x-105 translate-y-105 origin-center">
          {/* include two lines at either side of the rolodex structure */}
          <use href="#line" transform="rotate(10)"></use>
          <use href="#line" transform="rotate(260)"></use>

          {/* in a group (used to target the lines in CSS) add lines rotated from the bottom card to the top */}
          <g id="flip" transform="rotate(260)">
            {/* 260 + 105 means the cards overlap with the first line */}
            {/* and when animating their rotation to 0, it means the cards overlap with the second line*/}
            <use href="#line" transform="rotate(110)"></use>
            <use href="#line" transform="rotate(110)"></use>
            <use href="#line" transform="rotate(110)"></use>
            <use href="#line" transform="rotate(110)"></use>
            <use href="#line" transform="rotate(110)"></use>
            <use href="#line" transform="rotate(110)"></use>
          </g>

          {/* to fake a section of the pie larger than the semicircle overlap a semicircle */}
          {/* given the path element included afterwords, the stroke separating the two semicircles is hidden */}
          <g
            fill="#FFF"
            stroke="#26262B"
            strokeLinecap="round"
            strokeWidth="10"
          >
            <use href="#semicircle" transform="rotate(60)"></use>
            <use href="#semicircle" transform="rotate(25)"></use>
          </g>

          {/* smaller semicircles to give a tint of color to the rolodex structure */}
          <g
            className="transform scale-80"
            fill="#26262B"
            stroke="none"
            opacity="0.25"
          >
            <use href="#semicircle" transform="rotate(60)"></use></g>
            <g className="transform scale-80" fill="#26262B" stroke="none" opacity="0.25">
            <use href="#semicircle" transform="rotate(25)"></use>
            </g>
            </g>
            </g>
            </svg>
            </svg>
            </div>
            </>
            );
            }
