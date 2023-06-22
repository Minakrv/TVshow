import { Box, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { style } from './HomePage.style';
import { NavLink } from 'react-router-dom';

interface Episode {
    id: number;
    name: string;
    show: {
        id: number,
        summary: string;
        image: string;
        rating: number;
    };
}

const HomePage = () => {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const classes = style
    useEffect(() => {
        axios
            .get('https://api.tvmaze.com/schedule')
            .then((response) => {
                setEpisodes(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const removeTags = (text: string) => {
        if (text === null || text === "") {
          return false;
        } else {
          text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
      };
    return (
        <Box sx={classes.container}>
            <Box sx={classes.headerContainer}>
                <Box sx={classes.headerContent}>
                    <Typography sx={classes.headerLable}> TV Bland </Typography>
                    <Typography color='#969595'>
                        TV Shows and web series database.
                    </Typography>
                    <Typography color='#969595'>
                        Create personalised scheduale. Episode guide, cast, crew and character information.
                    </Typography>
                </Box>
                <Typography sx={{ paddingLeft: 5, paddingTop: 5, fontSize: '21px' }}>
                    Last Added Shows
                </Typography>
                <Box sx={classes.cardContainer}>
                    {episodes.map((episode) => (
                        <Box key={episode.id} sx={classes.cards}>
                            <NavLink to={`/shows/${episode.show.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <CardContent sx={{ padding: 0 }} >
                            <CardMedia
                                sx={{ height: 220 }}
                                image={episode.show.image
                                    ? episode.show.image.medium
                                    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}

                            />
                            <Rating name="read-only" value={episode.show.rating} readOnly sx={{ paddingTop: 2 }}/>
                            <Typography sx={classes.cardSummery} paddingTop='10px'>
                                {episode.show.summary && removeTags(episode.show.summary)}
                            </Typography>
                            </CardContent>
                            </NavLink>
                        </Box>
                    ))}
                </Box>

            </Box>
        </Box>
    )
};

export default HomePage;
