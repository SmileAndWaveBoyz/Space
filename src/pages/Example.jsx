import React, {useState} from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'



function Example(props)
{
    var items = [
        {
            url: "./assets/crew/image-douglas-hurley.webp"
        },
        {
            url: "./assets/crew/image-mark-shuttleworth.webp"
        },        
        {
            url: "./assets/crew/image-victor-glover.webp"
        },
        {
            url: "./assets/crew/image-anousheh-ansari.webp"
        }
    ]

    return (
        <Carousel  animation="fade"  height="712px" autoPlay={false} fullHeightHover={false}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img className="crewImage" src= {props.item.url} alt="" />
        </Paper>
    )
}

export default Example;