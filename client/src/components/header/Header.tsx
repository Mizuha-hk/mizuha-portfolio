import { Button, LargeTitle, Tab, TabList, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles(
  {
    root:{
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
    },
    flexStart:
    {
      display:"flex",
      alignItems:"center",
      justifyContent:"flex-start",
    },
  }
);

function Header() {
  const style = useStyles();
  return (
    <>
      <div className={style.root}>
        <div className={style.flexStart}>
          <LargeTitle>Title</LargeTitle>
          <TabList>
            <Tab value="home">Home</Tab>
            <Tab value="about">About</Tab>
            <Tab value="contact">Contact</Tab>
          </TabList>
        </div>
        <Button as="a" href="/login">Log in</Button>
      </div>
    </>
  );
}

export default Header;