import { Card, Persona, makeStyles } from "@fluentui/react-components";

import githubLogo from "../../assets/github-mark-white.svg"

const useStyles = makeStyles(
    {
        persona:{
            width: "10rem"
        },
    }
);

function AccountCard(args: AccountCardProps) {
    const style = useStyles();
    return (
        <>
            <Card>
            {args.isLogin ? (
                <Persona
                    className={style.persona}
                    name={args.username}
                    secondaryText={args.url}
                    avatar={{
                        image: {
                            src: args.avatarUrl
                        }
                    }}/>
            ) : (
                <Persona
                    className={style.persona}
                    primaryText="Log in"
                    avatar={{
                        image:{
                            src: githubLogo
                        }
                    }}
                    onClick={() => {
                        window.location.href = "/login";
                    }}/>
            )}
            </Card>
        </>
    )
}

export default AccountCard;