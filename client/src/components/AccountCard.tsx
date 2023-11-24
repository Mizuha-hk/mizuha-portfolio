import { Avatar, Body1, Card, makeStyles } from "@fluentui/react-components";

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
            marginRight: "1rem",
        },
    }
);

function AccountCard(userName: string) {
    const style = useStyles();
    return (
        <>
            <Card>
                <div className={style.flexRow}>
                    <Avatar className={style.avatar}/>
                    <div className={style.flexColumn}>
                        <Body1>{userName}</Body1>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default AccountCard;