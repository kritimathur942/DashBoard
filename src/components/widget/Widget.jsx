import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export const Widget = ( {type} ) => {
    let data;


     //Temporary
     const amount = 100
     const diff = 20




    switch(type){
        case"user":
        data={
            title:"USERS",
            isMoney: false,
            link: "See all users",
            icon:
               < PersonOutlineIcon className='icon' 
               style={{ 
                   color:"crimson", 
                   backgroundColor: "#fadede"}}/>
        };
        break;
        case"earning":
        data={
            title:"EARNING",
            isMoney: true,
            link: "View net earning",
            icon:
               <  MonetizationOnIcon className='icon' style={{color:"#1e5631", backgroundColor: "#acdf87"}} />
        };
        break;
        case"orders":
        data={
            title:"ORDERS",
            isMoney: false,
            link: "View all orders",
            icon:
               < ShoppingCartIcon className='icon' style={{color:"#fdd017", backgroundColor: "#ffffc2"}}/>
        };
        break;
        case"balance":
        data={
            title:"BALANCE",
            isMoney: true,
            link: "See details",
            icon:
               < AccountBalanceIcon className='icon' style={{color:"#3c1361", backgroundColor: "#bca0dc"}}/>
        };
        break;
        default:
            break;
    }




  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}
