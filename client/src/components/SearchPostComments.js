import { Grid, List, ListItem, ListItemText, ListSubheader, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root2: {
        width: '110%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 200,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));

const SearchPostComments = () => {
    const classes = useStyles();
    return (
        <Grid item md={5} xs={12}>
            <Paper className={classes.paper}>
                <Typography style={{ color: 'black' }} variant="h4">
                    Comments
                <List style={{ marginTop: '5%' }} className={classes.root2} subheader={<li />}>
                        <ul className={classes.ul} >
                            {['comment', 'comment', 'comment', 'comment', '5', '6', '7', '8', '9'].map((item) => (
                                <ListItem key={`item--${item}`}>
                                    <a href={`/`}><ListItemText primary={`${item}`} /></a>
                                </ListItem>
                            ))}
                        </ul>
                    </List>
                </Typography>
            </Paper>

            <Paper style={{marginTop: '4%'}} className={classes.paper}>
                <Typography style={{ color: 'black' }} variant="h4">
                    Other Dishes by User
                <List style={{ marginTop: '5%' }} className={classes.root2} subheader={<li />}>
                        <ul className={classes.ul} >
                            {['comment', 'comment', 'comment', 'comment', '5', '6', '7', '8', '9'].map((item) => (
                                <ListItem key={`item--${item}`}>
                                    <a href={`/`}><ListItemText primary={`${item}`} /></a>
                                </ListItem>
                            ))}
                        </ul>
                    </List>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SearchPostComments;