"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
var axios_1 = require("axios");
var HomePage_style_1 = require("./HomePage.style");
var react_router_dom_1 = require("react-router-dom");
var HomePage = function () {
    var _a = react_1.useState([]), episodes = _a[0], setEpisodes = _a[1];
    var classes = HomePage_style_1.style;
    react_1.useEffect(function () {
        axios_1["default"]
            .get('https://api.tvmaze.com/schedule')
            .then(function (response) {
            setEpisodes(response.data);
        })["catch"](function (error) {
            console.error(error);
        });
    }, []);
    return (react_1["default"].createElement(material_1.Box, { sx: classes.container },
        react_1["default"].createElement(material_1.Box, { sx: classes.headerContainer },
            react_1["default"].createElement(material_1.Box, { sx: classes.headerContent },
                react_1["default"].createElement(material_1.Typography, { sx: classes.headerLable }, " TV Bland "),
                react_1["default"].createElement(material_1.Typography, null, "TV Shows and web series database."),
                react_1["default"].createElement(material_1.Typography, null, "Create personalised scheduale. Episode guide, cast, crew and character information.")),
            react_1["default"].createElement(material_1.Box, null,
                react_1["default"].createElement(material_1.Card, null, episodes.map(function (episode) { return (react_1["default"].createElement(material_1.CardMedia, { key: episode.id, image: episode.show.image, component: "img", height: "140" },
                    react_1["default"].createElement("h2", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/shows/" + episode.show.id }, episode.name)))); }))))));
};
exports["default"] = HomePage;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// interface Episode {
//   id: number;
//   name: string;
//   show: {
//     id: number;
//     name: string;
//   };
// }
// interface Show {
//   id: number;
//   name: string;
//   summary: string;
// }
// function Schedule() {
//   const [episodes, setEpisodes] = useState<Episode[]>([]);
//   useEffect(() => {
//     axios
//       .get('https://api.tvmaze.com/schedule')
//       .then((response) => {
//         setEpisodes(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
//   return (
// <div>
//   <h1>Schedule</h1>
//   <ul>
//     {episodes.map((episode) => (
//       <li key={episode.id}>
//         <h2>
//           <Link to={`/shows/${episode.show.id}`}>{episode.name}</Link>
//         </h2>
//       </li>
//     ))}
//   </ul>
// </div>
//   );
// }
// function ShowDetails() {
//   const [show, setShow] = useState<Show | null>(null);
//   const showId = window.location.pathname.split('/').pop();
//   useEffect(() => {
//     if (showId) {
//       axios
//         .get(`https://api.tvmaze.com/shows/${showId}`)
//         .then((response) => {
//           setShow(response.data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, [showId]);
//   return (
//     <div>
//       <h1>Show Details</h1>
//       {show ? (
//         <div>
//           <h2>{show.name}</h2>
//           <div dangerouslySetInnerHTML={{ __html: show.summary }} />
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
