
import { Typography, Box, Table, TableBody, TableRow, TableCell, styled } from "@mui/material";

import { LocalOffer as Badge }from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 15px;

`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`

const ProductDetail = ({ product }) => {

    
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5 * 24 * 60 * 60 * 1000));


    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Ratings & 1 Review
                <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="assured"/></Box>
            </Typography>
            <Typography>
                    <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3c' }}>{product.price.discount} off</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyledBadge />Bank Offer10% Off on Samsung Axis Bank Credit Card T&C</Typography>
                <Typography><StyledBadge />Bank Offer10% Instant Discount on Axis Bank Credit Card EMI Txns, up to ₹1500, on orders of ₹5,000 and above T&C</Typography>
                <Typography><StyledBadge />Bank OfferFlat ₹100 Cashback on Paytm Wallet. Min Order Value ₹1,000. Valid once per Paytm account T&C</Typography>
                <Typography><StyledBadge />Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C</Typography>
                <Typography><StyledBadge />Extra 10% Off On Monitor when bought with Keyboard & UPST&C</Typography>
                <Typography><StyledBadge />Partner OfferSign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*Know More</Typography>
                <Typography><StyledBadge />Partner OfferPurchase now & get 1 surprise cashback coupon in FutureKnow More</Typography>

            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40 </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component="span"  style={{ color: '#2874fo' }}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} alt="flipkartpoints" />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail;