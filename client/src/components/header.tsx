import { Button, LargeTitle, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles(
  {
    root:{
      display:"flex",
      alignItems:"center"
    }
  }
)

function Header() {
  const style = useStyles();
  return (
    <div className={style.root}>
      <LargeTitle>Title</LargeTitle>
      <Button as="a" href="/login">Log in</Button>
    </div>
  );
}

export default Header;