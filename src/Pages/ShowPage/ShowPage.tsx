import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, CardMedia, List, ListItem, Rating, Typography, Grid, ListItemText, ListItemAvatar, TableBody, TableRow, Divider } from "@mui/material";
import { style } from './ShowPage.style';

interface Show {
  id: number;
  name: string;
  summary: string;
  status: string;
  rating: number;
  genres: string[];
  schedule: {
    days: string[];
  }
  network: {
    name: string;
  };
  image: string;
  _embedded: {
    cast: {
      person: {
        id: number;
        name: string;
      };
      character: {
        name: string;
      };
    }[];
  };
};

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const ShowPage = ({ match }: Props) => {
  const [show, setShow] = useState<Show | null>(null);
  const { id } = useParams<{ id: string }>();
  const classes = style
  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

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
        </Box>

        {show ? (
          <><Box sx={classes.details}>
            <CardMedia
              sx={{ height: 330, width: 200 }}
              image={show.image
                ? show.image.medium
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} />
            <Box sx={classes.topBox}>
              <Rating name="read-only" value={show.rating} readOnly sx={{ paddingTop: 2 }} />
              <Typography sx={{ fontWeight: 'bold', fontSize: '21px', paddingTop: 1 }}>{show.name}</Typography>
              <Typography dangerouslySetInnerHTML={{ __html: show.summary }} />
            </Box>
          </Box>
            <Box sx={classes.moreDetails}>
              <Box sx={classes.info}>
                <Typography sx={{ paddingTop: 1, paddingLeft: 1 }}> Show Info </Typography>
                <List>
                  <ListItem sx={classes.list}>
                    <ListItemText sx={{ padding: 1 }}> Streamed on </ListItemText>
                    <ListItemText sx={{ color:'#969595' }}> {show.network.name} </ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem sx={classes.list}>
                    <ListItemText sx={{ padding: 1 }}> Status </ListItemText>
                    <ListItemText sx={{ color:'#969595' }}>{show.status}</ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem sx={classes.list}>
                    <ListItemText sx={{ padding: 1 }}> Schedule </ListItemText>
                    <ListItemText sx={{ color:'#969595' }}>{show.schedule.days + ""}</ListItemText>
                  </ListItem>
                  <Divider />
                  <ListItem sx={classes.list}>
                    <ListItemText sx={{ padding: 1 }}> Genres </ListItemText>
                    <ListItemText sx={{ color:'#969595' }}>{show.genres + ""}</ListItemText>
                  </ListItem>
                </List>
              </Box>
              <Box sx={classes.starring}>
                <Typography> Starring </Typography>
                <List>
                  {show._embedded.cast.map((cast) => (
                    <><ListItem key={cast.person.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <AccountCircleIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText sx={{ padding: 1 }}>{cast.person.name}</ListItemText>   
                      <ListItemText sx={{ color:'#969595' }}>{cast.character.name}</ListItemText>
                    </ListItem><Divider /></>
                  ))}
                </List>
              </Box>
            </Box></>
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </Box>
  );
}

export default ShowPage;