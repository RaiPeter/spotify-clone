import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440" />
                <div className="footer__songInfo">
                    <h4>yeah</h4>
                    <p>Uhser</p>
                </div>

            </div>
            <div className="footer__center">
<ShuffleIcon className="footer__green" />
<SkipPreviousIcon classname="footer__icon" />
<PlayCircleOutlineIcon fontSize="large" />
<RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
<Grid container spacing={2}>
    <Grid item>
        <PlaylistPlayIcon />
    </Grid>
<   Grid item>
        <VolumeDownIcon />
    </Grid>
    <Grid item xs>
        <Slider />
    </Grid>
</Grid>
            </div>

        </div>
    )
}

export default Footer