import { Avatar, Body1, Button, Caption1Strong, Card, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles(
    {
        flexRow: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        flexColumn: {
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            width: "8rem"
        },
        avatar: {
            marginRight: "0.5rem",
        },
        userName:{
            marginLeft: "0.5rem",
        },
        url: {
            alignSelf: "flex-start",
        },
    }
);

function AccountCard(args: AccountCardProps) {
    const style = useStyles();
    return (
        <>
            <Card>
            {args.isLogin ? (
                <div className={style.flexRow}>
                    <Avatar image={{src: args.avatarUrl}} className={style.avatar}/>
                    <div className={style.flexColumn}>
                        <Caption1Strong
                            className={style.userName}>{args.username}
                        </Caption1Strong>
                        <Button 
                            as="a" href={args.url} 
                            size="small" 
                            appearance="transparent"
                            className={style.url}>{args.url}</Button>
                    </div>
                </div>
            ) : (
                <div className={style.flexRow}>
                    <Avatar className={style.avatar}/>
                    <div className={style.flexColumn}>
                        <Body1>Log in</Body1>
                    </div>
                </div>
            )}
            </Card>
        </>
    )
}

export default AccountCard;