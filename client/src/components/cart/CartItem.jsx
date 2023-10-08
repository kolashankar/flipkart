import { Typography, Box, Button, styled } from "@mui/material";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

import { addEllipsis } from "../../utils/common-utils";

import GroupedButton from "./ButtonGroup";

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const LeftComponent = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`

const ProductImage = styled('img')`
    height: 80px;
    width: 80px;
    object-fit: contain;  // Ensure the image retains its aspect ratio
`;

const RightComponent = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;  // Allow this component to grow and take available space
    margin-left: 20px;  // Add margin for separation
`;

const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (
        <Component>
            <LeftComponent>
                <ProductImage src={item.url} alt="product" />
                <GroupedButton />
            </LeftComponent>
            <RightComponent>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller: RetailNet
                    <Box component="span"><img src={fassured} alt="flipkart" style={{ width: 50, marginLeft: 10 }} /></Box>
                </SmallText>
                <Typography style={{ margin: '20px 0 ' }}>
                    <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3c' }}>{item.price.discount} off</Box>
                </Typography>
                <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
            </RightComponent>
        </Component>
    )
}

export default CartItem;
