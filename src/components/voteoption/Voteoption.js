import React from 'react'
import './Voteoption.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BJP from '../../assets/PartyLogos/BJP.png' ;
 
const Voteoption = ({name, abbr, image}) =>{
    return(
        <div className='Voteoption'>
            <Card sx={{ maxWidth: 345,display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'16px' }}>
                <CardContent>
                    <img src={image}/>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                    {abbr}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='contained'>Vote</Button>
                </CardActions>
            </Card>
        </div>
    )
}

const VotePage =({parties}) =>{
    return(
    <div className='Voteoptions'>
        {
            parties.map(party=>{
                return <Voteoption name={party.name} abbr={party.abbr} image={party.logo}/>
            })
        }
    </div>
    )
}

export default VotePage;