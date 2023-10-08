import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

import { Box, Typography, Button, Divider, styled } from '@mui/material';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Component = styled(Box)`
  margin-top: 10px;
  color: #FFFFFF;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;

const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #4f4f4f;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px;
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;  
  font-weight: 600;
`;

const Image = styled('img')({
  width: 'auto',
  height: 150
});

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Slide = ({ products, title, timer }) => {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds }) => {
    return <Box component="span">{hours}:{minutes}:{seconds} Left</Box>;
  };

return (
    <Component>
      <Deal>
        <DealText color="#000000">{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt='timer' style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
          </Timer>
        )}
        <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products && products.length > 0 ? (
          products.map(product => (
            <Link to={`product/${product.id}`} style={{ textDecoration: 'none'}}>
              <Box
                //key={product.id}
                textAlign="center"
                style={{
                  padding: '25px 15px'
                  //,  this is for border styles of the product
                // border: '1px solid #ccc', // Border style
                  //borderRadius: '10px', // Border radius for curved edges
                  //margin: '0 8px', // Adjust as needed
                }}
              > 
                <Image src={product.url} alt="product"/>
                <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle || 'No title'}</Text>
                <Text style={{ color: 'green' }}>{product.discount || 'No discount'}</Text>
                <Text style={{ color: '#212121', opacity: '.6' }}>{product.tagline || 'No tagline'}</Text>
              </Box>
            </Link>
          ))
        ) : (
          <Typography variant="body1">No products available</Typography>
        )}
      </Carousel>
    </Component>
  );
};

export default Slide;