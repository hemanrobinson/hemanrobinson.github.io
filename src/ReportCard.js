import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActionArea } from '@mui/material';

// Report Card:  A Card with title, link, thumbnail, and text.
function ReportCard({ title, href, img, text }) {
    return (
        <Card style={{maxWidth: 310, boxShadow: '1px 1px 5px 0px grey'}}>
            <CardActionArea component="a" href={href}>
                <CardHeader title={title}/>
                <CardMedia style={{height: 0, paddingTop: '66.67%'}} image={img} title={title} />
                <CardContent>{text}</CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ReportCard;
