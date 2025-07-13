import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INI_URL = "https://images.unsplash.com/photo-1580061022778-70ee6981bbce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHJhaW55fGVufDB8fDB8fHww";

    const HOT_URL = "https://images.pexels.com/photos/29079236/pexels-photo-29079236.jpeg";
    const COLD_URL = "https://images.pexels.com/photos/3454270/pexels-photo-3454270.jpeg";
    const RAIN_URL = "https://images.pexels.com/photos/25677022/pexels-photo-25677022.jpeg";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={info.humidity > 70 ? 
          RAIN_URL : info.temp > 15 ? 
          HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 70 ? <ThunderstormTwoToneIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitOutlinedIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like = {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}