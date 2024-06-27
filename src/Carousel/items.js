import { Paper, Button } from '@mui/material'

export default function Item({item})
{
    return (
        <Paper>
            <img src={item.image} />
            <h2>{item.title}</h2>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}