import { useState, useEffect, useCallback } from "react";
import { Typography, Box, styled } from "@mui/material";

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6 {
        margin-bottom: 20px;
    }
`;

const Price = styled(Box)`
    float: right;
`;

const Discount = styled(Typography)`
    font-weight: 500; 
    color: green;
`;

const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    const totalAmount = useCallback(() => {
        let price = 0, discount = 0;
        cartItems && cartItems.forEach(item => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost) 
        })
        setPrice(price);
        setDiscount(discount);
    }, [cartItems]);

    useEffect(() => {
        totalAmount();
    }, [cartItems, totalAmount]);

    return(
        <Box>
                <Header>
                    <Heading>PRICE DETAILS</Heading>
                </Header>
            <Container>
            <Typography>Price ({cartItems ? cartItems.length : 0} item)
                    <Price component="span">₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">-₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">₹40</Price>
                </Typography>
                <Typography variant="h6">Total Amount
                    <Price component="span">₹{price - discount + 40}</Price>
                </Typography>
                <Discount>You will ₹{discount -40} on this order</Discount>
            </Container>
        </Box>
    )
}

export default TotalView;