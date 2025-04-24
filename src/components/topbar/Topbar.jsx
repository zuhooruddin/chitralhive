import { CallOutlined, ExpandMore, MailOutline, LogOut } from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { Box, Container, MenuItem, styled } from "@mui/material";
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import { Span } from "components/Typography";
import Link from "next/link";
import { useEffect, useState } from "react";
import { layoutConstant } from "utils/constants";
import { useSession, signIn, signOut, destroy } from 'next-auth/react';
import DrawerComponent from "components/topbar/drawer";
import { toast } from 'react-toastify';
import ReactModal from 'react-modal'; 
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
const TopbarWrapper = styled(Box)(({ theme, bgColor }) => ({
  fontSize: 12,
  height: layoutConstant.topbarHeight,
  background: bgColor || theme.palette.secondary.dark,
  color: theme.palette.secondary.contrastText,
  "& .topbarLeft": {
    "& .logo": {
      display: "none",
    },
    "& .title": {
      marginLeft: "10px",
      fontsize: 12,
    },
    "& .drawer": {
      display: "none",
    },

    "@media only screen and (max-width: 600px)": {
      "& .logo": {
        display: "none",
      },
      "& .title": {
        marginLeft: "0px",
        fontSize: 10,
        display: "none",
      },
      "& .icon": {
        display: "none"
      },
      "& .drawer": {
        justifyContent: 'flex-start',
        display: "block",
      },
      "& > *:not(.drawer)": {
        display: "none",
      },
    },
  },
  "& .topbarRight": {
    "& .link": {
      paddingRight: 30,
      color: theme.palette.secondary.contrastText,
      fontSize: 12,
    },
    "@media only screen and (max-width: 600px)": {
      "& .link": {
        display: "none",
        fontSize: 10,
      },
    },
  },


  "& .menuItem": {
    minWidth: 100,
  },
  "& .marginRight": {
    marginRight: "1.25rem",
  },
  "& .handler": {
    height: layoutConstant.topbarHeight,
  },
  "& .smallRoundedImage": {
    height: 15,
    width: 25,
    borderRadius: 2,
  },
  "& .menuTitle": {
    fontSize: 12,
    marginLeft: "0.5rem",
    fontWeight: 600,
  },
}));



const Topbar = ({ bgColor,topbardata, color }) => {
  const { data: session } = useSession();
  async function tokenBlacklist(){
    const payload = {
      // refresh: session.refreshToken,
      userId:session.user.id,
      accessToken: session.accessToken
    };
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_BASE}apiSignOut`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" }
  
      })
      const res = await response.json()
      if(res['ErrorCode'] == 0){
              // toast.success(res.data['ErrorMsg'], {
              //   position: toast.POSITION.TOP_RIGHT
              // });
              signOut();
            }
      else{toast.error(res['ErrorMsg'], {position: toast.POSITION.TOP_RIGHT});}
      return res;
    } catch (error) {
      if (error.response) {
          if(error.response.status==400){
            for(var i=0;i<Object.keys(error.response.data).length;i++){
              var key = Object.keys(error.response.data)[i];
              var value = error.response.data[key].toString();
              toast.error(<div>Field: {key} <br/>Error Message: {value}</div>, {position: toast.POSITION.TOP_RIGHT});
            }
          }
          else{toast.error('Error Occured! '+error.response.statusText, {position: toast.POSITION.TOP_RIGHT});
          }
          return error.response
      } else if (error.request) {toast.error('Network Error', {position: toast.POSITION.TOP_RIGHT});
          return error.request
        } else {toast.error('Error Occured', {position: toast.POSITION.TOP_RIGHT});
          return error
        }
    }
    }


    const imgbaseurl = process.env.NEXT_PUBLIC_BACKEND_API_BASE + "media/";
const server_ip=process.env.NEXT_PUBLIC_BACKEND_API_BASE
    const handleSignOut = () => {tokenBlacklist()}


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const todayDealStyle = {
    cursor: 'pointer',
    color: 'blue', 
    textDecoration: 'underline',
    fontWeight: 'bold',
    marginRight:'15px'
  };

  const[coupon,setCoupon]=useState()


  useEffect(() => {
    fetch(server_ip+'getvoucher')
      .then((res) => res.json())
      .then((data) => {
        setCoupon(data)
      })
  }, [])
 
  const data=coupon &&coupon?coupon.voucher[0]:''

  
  const couponContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const modalContentStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1000,
    },
    content: {
      width: '400px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      position: 'relative',
    },
  };
  const couponTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const couponInfoStyle = {
    fontSize: '16px',
    margin: '8px 0',
  };
  const copyIconStyle = {
    color: '#007bff',
    cursor: 'pointer',
    marginLeft: '10px',
  }


  const handleCopyClick = (couponCode) => {
    const textarea = document.createElement('textarea');
    textarea.value = couponCode;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const copySuccessful = document.execCommand('copy');
      if (copySuccessful) {
      toast.success("Code Copied Sucessfully", {
                position: toast.POSITION.TOP_RIGHT
              });
      } else {
      }
    } catch (err) {
      console.error('Error copying coupon code:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  if (session) {
    return (
      <TopbarWrapper bgColor={bgColor}>
        <Container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <FlexBox className="topbarLeft">
            <div className="logo">
              <Link href="/" passHref>
                <Image
                  display="block"
                  height="28px"
                  src={topbardata?imgbaseurl+topbardata[0].site_logo:'assets/images/logos/webpack.png'}
                  alt="logo"
                />
              </Link>
            </div>
            <FlexBox className="drawer">
              <DrawerComponent />
            </FlexBox>
            <FlexBox>
              <FlexBox alignItems="center">
                <CallOutlined className="icon" fontSize="small" />
                <Span className="title">
  <a href={`tel:${topbardata ? topbardata[0].top_bar_left_phone : ''}`}>
    {topbardata ? topbardata[0].top_bar_left_phone : '+923'}
  </a>
</Span>
              </FlexBox>

              <FlexBox alignItems="center" ml={2.5}>
                <MailOutline className="icon" fontSize="small" />
                <Span className="title"><a href={`mailto:${topbardata?topbardata[0].top_bar_left_email:''}`}>{topbardata?topbardata[0].top_bar_left_email:'email@company.com'}</a></Span>
              </FlexBox>
            </FlexBox>
          </FlexBox>
          <FlexBox className="topbarRight" alignItems="center" style={{ cursor: 'pointer' }}>
          <div style={todayDealStyle} onClick={openPopup}>
            Today Deal
          </div>
          <LogoutIcon fontSize="small" onClick={handleSignOut}  />
          <p> Sign Out</p>
               </FlexBox>
      </Container>

      <ReactModal
        isOpen={isPopupOpen}
        onRequestClose={closePopup}
        contentLabel="Voucher Popup"
        style={modalContentStyle}

      >
       
        <CloseIcon
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
          }}
          onClick={closePopup}
        />
      <div className="voucher-content" style={couponContainerStyle}>
          <img
            src={imgbaseurl + data.image}
            alt={data.name}
            width="100%"
            height="auto"
            style={{ marginBottom: '20px' }}
          />
          <h2 style={couponTitleStyle}>{data.name}</h2>
          <p style={couponInfoStyle}>Discount: {data.discount}%</p>
          <p style={couponInfoStyle}>Start Date: {data.startdate}</p>
          <p style={couponInfoStyle}>End Date: {data.enddate}</p>
          <p style={couponInfoStyle}>
        Coupon Code: {data.code}
        <IconButton
          onClick={() => handleCopyClick(data.code)}
          size="small"
          style={copyIconStyle}
        >
          <FileCopyIcon />
        </IconButton>
      </p>

  

             </div>
      </ReactModal>
      </TopbarWrapper>
    );
  }
  // handleClick();onClick={() => {  signOut;}}
  else {
    return (
      <TopbarWrapper bgColor={bgColor} color={color}>
        <Container
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <FlexBox className="topbarLeft">
            <div className="logo">
              <Link href="/" passHref>
              <Image
                  display="block"
                  height="28px"
                  src={topbardata?imgbaseurl+topbardata[0].site_logo:''}
                  alt="logo"
                />
              </Link>
            </div>
            <FlexBox className="drawer">
              <DrawerComponent />
            </FlexBox>
            <FlexBox>
              <FlexBox alignItems="center">
                <CallOutlined className="icon" fontSize="small" />
                <Span className="title"><a href={topbardata?topbardata[0].top_bar_left_phone:''}>    {topbardata ? topbardata[0].top_bar_left_phone : '+923'}
</a></Span>
              </FlexBox>

              <FlexBox alignItems="center" ml={2.5}>
                <MailOutline className="icon" fontSize="small" />
                <Span className="title"><a href={`mailto:${topbardata?topbardata[0].top_bar_left_email:''}`}>{topbardata?topbardata[0].top_bar_left_email:'email@company.com'}</a></Span>
              </FlexBox>
            </FlexBox>
          </FlexBox>
          <FlexBox className="topbarRight" alignItems="center" style={{'cursor': 'pointer'}} >
          <div style={todayDealStyle} onClick={openPopup}>
            Today Deal
          </div>
            <LoginIcon fontSize="small" onClick={signIn} />
            <p> Sign In</p>
          </FlexBox>
        </Container>
        <ReactModal
        isOpen={isPopupOpen}
        onRequestClose={closePopup}
        contentLabel="Voucher Popup"
        style={modalContentStyle}

      >
       
        <CloseIcon
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
          }}
          onClick={closePopup}
        />
      <div className="voucher-content" style={couponContainerStyle}>
          <img
            src={imgbaseurl + data?.image || ''}
            alt={data?.name || ''}
            width="100%"
            height="auto"
            style={{ marginBottom: '20px' }}
          />
          <h2 style={couponTitleStyle}>{data?.name || ''}</h2>
          <p style={couponInfoStyle}>Discount: {data?.discount || ''}%</p>
          <p style={couponInfoStyle}>Start Date: {data?.startdate || ''}</p>
          <p style={couponInfoStyle}>End Date: {data?.enddate || ''}</p>
          <p style={couponInfoStyle}>
        Coupon Code: {data?.code || ''}
        <IconButton
          onClick={() => handleCopyClick(data?.code || '')}
          size="small"
          style={copyIconStyle}
        >
          <FileCopyIcon />
        </IconButton>
      </p>

  

             </div>
      </ReactModal>
      </TopbarWrapper>
    );
  }

};

export default Topbar;
