import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import moment from 'moment';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia image={post.selectedFile} title={post.title} classsName={classes.media} style={{ height: 0, paddingTop: "56%", backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'darken' }} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: "white" }} size="small" onClick={() => { setCurrentId(post._id) }}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterbuttom>{post.title}</Typography>
            <CardContent>
                <Typography variant="h5" gutterbuttom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => { }}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => { }}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;